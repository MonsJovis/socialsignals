var social = require('../index.js')

var url = 'https://github.com/'

social.facebook(url, function(err, signals){
	console.log(signals)
})

social.twitter(url, function(err, signals){
	console.log(signals)
})

social.googleplus(url, function(err, signals){
	console.log(signals)
})

/* Output

{ count: 44336 }
{ count: 5498 }
{ total_count: 33784,
  like_count: 9706,
  comment_count: 6473,
  share_count: 17605,
  click_count: 1 }

*/