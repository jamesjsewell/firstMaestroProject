import Backbone from 'backbone'

export var DetailsModel = Backbone.Model.extend({

	url: 'https://openapi.etsy.com/v2/listings/' + location.hash.split("/")[1] + '/' + '.js',
	_key: 'qycca7qp2gj078smbdvxdg7b',
	parse: function(apiResponse) {
		console.log(apiResponse)
		return apiResponse

	}
})