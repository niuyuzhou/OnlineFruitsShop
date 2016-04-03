describe('storeControllers', function() {
	var scope = {};
  beforeEach(module('ngRoute'));
	beforeEach(module('storeCtrl'));
	beforeEach(module('AngularStore'));
	
  beforeEach(inject(function(_$controller_){
    _$controller_('storeController', {$scope: scope});
  }));

  xdescribe('shoppingCart', function() {
    it('store.products', function() {
      expect(scope.store.products.length).toEqual(0);
    });
  });
});