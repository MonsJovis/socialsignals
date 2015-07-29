# Social Signals

This module enables easy access to the social media metrics publicly provided by

* Facebook
	* Likes
	* Shares
	* Comments
	* Clicks
* Twitter
	* Occurrences of a URL in tweets
* Google Plus
	* +1s

Getting facebook like counts with nodejs is easier than ever.

## Installation

	npm install socialsignals

Find this package at:

* Github: https://github.com/justusbluemer/socialsignals
* npm: https://www.npmjs.com/package/socialsignals

## Methods

### facebook(url, callback)

Fetches the facebook data for `url`.

##### Arguments

* `url` The url to fetch Facebook social signals for
* `callback(err, data)` A callback which is called after the operation is complete

##### Data

```json
{
	total_count: 19109,
	like_count: 4756,
	comment_count: 4589,
	share_count: 9764,
	click_count: 1004
}
```

## Examples

```javascript
var social = require('socialsignals')

social.facebook('https://github.com/', function(err, signals){
	console.log(signals)
})
```

### twitter(url, callback)

Fetches the Twitter data for `url`.

##### Arguments

* `url` The url to fetch Twitter social signals for
* `callback(err, data)` A callback which is called after the operation is complete

##### Data

```json
{
	count: 44336
}
```

## Examples

```javascript
var social = require('socialsignals')

social.twitter('https://github.com/', function(err, signals){
	console.log(signals)
})
```

### googleplus(url, callback)

Fetches the Google+ data for `url`.

##### Arguments

* `url` The url to fetch Google+ social signals for
* `callback(err, data)` A callback which is called after the operation is complete

##### Data

```json
{
	count: 5498
}
```

## Examples

```javascript
var social = require('socialsignals')

social.googleplus('https://github.com/', function(err, signals){
	console.log(signals)
})
```