import Backbone from 'backbone'

export var ListingsCollection = Backbone.Collection.extend({
	url: 'https://openapi.etsy.com/v2/listings/active.js',
	_key: 'qycca7qp2gj078smbdvxdg7b',
	parse: function(apiResponse) {
		console.log(apiResponse.results)
		return apiResponse.results

	}
})