import Backbone from 'backbone'

export var ListingsCollection = Backbone.Collection.extend({
	url: 'https://openapi.etsy.com/v2/listings/active.js',
    //data: {'api_key': 'qycca7qp2gj078smbdvxdg7b'}
	_key: 'qycca7qp2gj078smbdvxdg7b',
	parse: function(apiResponse) {
		console.log(apiResponse)
		return apiResponse

	}
})