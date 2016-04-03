'use strict';

describe('Product', function(){
	var $httpBackend, pro;
	
	beforeEach(module('ngResource'));
	beforeEach(module('storeServices'));
	beforeEach(inject(function($injector, Product){
		$httpBackend = $injector.get('$httpBackend');
		pro = Product;
	}));
	
	it('Product normally', function(){
		var result;
		$httpBackend.when('GET', 'json/productList.json')
      .respond([{"id":"fruit01","name": "orange"}]);
		result = pro.query();
		$httpBackend.flush();
		expect(result[0].id).toEqual("fruit01");
	});
});

describe('onlineStore', function(){
	var $httpBackend, os;
	
	beforeEach(module('ngResource'));
	beforeEach(module('storeServices'));

	beforeEach(inject(function(onlineStore, $injector){
		$httpBackend = $injector.get('$httpBackend');
		os = onlineStore;
	}));
	
	it('onlineStore normally', function(){
		$httpBackend.when('GET', 'json/productList.json')
      .respond([{"id":"fruit01","name": "orange"}]);
		var v1 = os.products;
		$httpBackend.flush();		
		expect(os.getProduct('fruit01').id).toEqual("fruit01");
	});
});
