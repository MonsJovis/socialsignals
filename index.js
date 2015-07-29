var request = require('request')

module.exports = {

	facebook: function(url, cb) {
		request({
			url: 'https://api.facebook.com/method/fql.query?&format=json&query=select%20total_count,like_count,comment_count,share_count,click_count%20from%20link_stat%20where%20url="' + encodeURIComponent(url) + '"'
		}, function(err, res, body){
			if (!err) {
				try {
					var json = JSON.parse(body)
					cb(null, json[0])
				}
				catch(ex) {
					cb(ex)
				}
			}
			else cb(err)
		})
	},

	twitter: function(url, cb) {
		request({
			url: 'http://urls.api.twitter.com/1/urls/count.json?url=' + encodeURIComponent(url)
		}, function(err, res, body){
			if (!err) {
				try {
					var json = JSON.parse(body)
					delete json.url
					cb(null, json)
				}
				catch(ex) {
					cb(ex)
				}
			}
			else cb(err)
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
				try {
					cb(null, body.result.metadata.globalCounts)
				}
				catch(ex) {
					cb(ex)
				}
			}
			else cb(err)
		})
	}

}