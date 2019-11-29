const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');


describe('Get Tour Tests', function () {
	let response;
	let tours = null;
	before(async function(){
		response = await request(app).get('/tours');
	})
	it('Everything is OK', async function(){
		assert.equal(response.status, 200);
	});
	it('Returns an array', function(){
		tours = JSON.parse(response.text);
		assert.isArray(tours);
	});
	it('All tour elements have name and date', function(){
		tours.forEach(function(tour){
			assert.containsAllKeys(tour, ['name', 'date']);
		});
	});
	it('Cookie with appropriate name is returned', function(){
		let cookies = response.header['set-cookie'].map(cookie.parse);
		let mycookie = cookies.filter(c => c.hasOwnProperty('rg4984'));
		assert.notEmpty(mycookie);
	});
})

describe('Get an individual tour', function () {
	describe('Trying path /tours/6NzrXVT0RG3QPc1M', function () {
	let response;
	let tours = null;
	before(async function(){
		response = await request(app).get('/tours/6NzrXVT0RG3QPc1M');
	})
	it('Getting an existing tour ', async function(){
		assert.equal(response.status, 200);
	});

	describe('Trying path /tours/7nTII3KlO5cmnga3', function () {
	let response;
	before(async function(){
		response = await request(app).get('/tours/7nTII3KlO5cmnga3');
	})
	it('Getting an existing tour ', async function(){
		assert.equal(response.status, 200);
	});
	describe('Trying path /tours/nonexistingtourid', function () {
		let response;
		let tours = null;
		before(async function(){
			response = await request(app).get('/tours/nonexistingtourid');
		})
		it('Getting an existing tour ', async function(){
			assert.equal(response.status, 404);
		});
	})
})
})
})

	