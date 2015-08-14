var should = require('should');
var assert = require('assert');
var winston = require('winston');

var request = require('supertest');
var socialsignals = require('../index.js')


describe('Social signals', function() {
	var url = 'https://npmjs.com'
	
	console.log('Checking https://npmjs.com for its social signals…')
	
	it('should return facebook data', function(done){
		socialsignals.facebook(url, function(err, response) {
			if (err) {
				throw err;
			}
			response.total_count.should.be.above(280);
			response.like_count.should.be.above(90);
			response.comment_count.should.be.above(50);
			response.share_count.should.be.above(130);

			done();
		})
	})

	it('should return twitter data', function(done){
		socialsignals.twitter(url, function(err, response) {
			if (err) {
				throw err;
			}
			response.count.should.be.above(0);

			done();
		})
	})

	it('should return google+ data', function(done){
		socialsignals.googleplus(url, function(err, response) {
			if (err) {
				throw err;
			}
			response.count.should.be.above(-1);

			done();
		})
	})

});