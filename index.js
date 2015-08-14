var request = require('request')

module.exports = {

	facebook: function(url, cb) {
		request({
			url: 'https://api.facebook.com/method/fql.query?&format=json&query=select%20total_count,like_count,comment_count,share_count,click_count%20from%20link_stat%20where%20url="' + encodeURIComponent(url) + '"',
			json: true
		}, function(err, res, body){
			if (!err) {
				if (typeof(body[0]) === 'object') {
					cb(null, body[0])
				}
				else return cb('Could not parse facebook response')
			}
			else return cb(err)
		})
	},

	twitter: function(url, cb) {
		request({
			url: 'http://urls.api.twitter.com/1/urls/count.json?url=' + encodeURIComponent(url),
			json: true
		}, function(err, res, body){
			if (!err) {
				if (typeof(body.url) === 'string') {
					delete body.url
					cb(null, body)
				}
				else return cb('Could not parse twitter response')
			}
			else return cb(err)
		})
	},

	googleplus: function(url, cb) {
		request.post({
			url: 'https://clients6.google.com/rpc',
			json: {
			    method: 'pos.plusones.get',
			    id: 'p',
			    params: {
			        nolog: true,
			        id: url,
			        source: 'widget',
			        userId: '@viewer',
			        groupId: '@self'
			    },
			    jsonrpc: '2.0',
			    key: 'p',
			    apiVersion: 'v1'
			},
		}, function(err, res, body){
			if (!err) {
				if (typeof(body.result.metadata.globalCounts) === 'object') {
					cb(null, body.result.metadata.globalCounts)
				}
				else return cb('Could not parse google+ response')
			}
			else cb(err)
		})
	}

}