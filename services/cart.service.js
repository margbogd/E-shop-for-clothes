app.service('CartService', function() {

	var errors = {
		add: 'Error ocurred on adding this item to your cart!',
		remove: 'Error ocurred on removing this item!',
		buy: 'Error ocurred on completing buy action',
		buy_null: 'Add items before trying to buy',
		general: 'Error ocurred on completing action'
	};
	var success = {
		add: 'Item add to cart',
		remove: 'Item removed'
	};
	this.cart = [];

	// Cart functions
	var actions = {};
	
	actions.add = (item) => {
		if (!item || typeof item !== 'object') {
			return alert(errors.add);
		}
		this.cart.push(item);
		alert(success.add);
	}

	actions.remove = (item_id) => {
		let temp = this.cart.indexOf(item_id);
		if (temp === -1) {
			return alert(errors.remove);
		}
		this.cart.splice(temp, 1);
		alert(success.remove);
	}

	actions.buy = () => {
		if (this.cart.length < 1) {
			return alert(errors.buy_null);
		}
		console.log('You\'ve buyed ${this.cart.length} items');
	}

	// Proxy function that validates data before taking action
	function proxy(action) {
		return (param) => {
			if (!action || !actions[action]) {
				return alert(errors.general);
			}
			switch (action) {
				case 'add':
					if (!param || typeof param !== 'object') {
						return alert(errors.add);
					}
					break;
				case 'remove':
					if (!param || typeof param !== 'number') {
						return alert(errors[action]);
					}
					break;
			};
			actions[action](param);
		};
	}

	// Declaring cart functions
	this.add = proxy('add');
	this.remove = proxy('remove');
	this.buy = proxy('buy');

});
