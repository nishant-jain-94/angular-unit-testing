describe('directives', function() {

	beforeEach(module('directives'));

	var element;
	var outerScope;
	var innerScope;

	beforeEach(inject(function($rootScope, $compile) {
		element = angular.element('<super-button label="label" on-click="outerCallback()"></super-button>');
		outerScope = $rootScope.$new();
		$compile(element)(outerScope);
		innerScope = element.isolateScope();
		outerScope.$digest();
	}));

	describe('label', function() {
		beforeEach(function() {
			outerScope.$apply(function() {
				outerScope.label = "Super Button!!!"
			});
		});

		it('should be rendered', function() {
			expect(element[0].children[0].innerHTML).to.equal('Super Button!!!');
		});
	});

	describe('click callback', function() {
		var mySpy;

		beforeEach(function() {
			mySpy = sinon.spy();
			outerScope.$apply(function() {
				outerScope.outerCallback = mySpy;
			})
		});

		describe('When the directive is called', function() {
			beforeEach(function() {
				var event = document.createEvent('MouseEvent');
				event.initMouseEvent('click',true,true);
				element[0].children[1].dispatchEvent(event);
			});

			it('Should be called', function() {
				expect(mySpy.callCount).to.equal(1);
			});
		});
	});

});