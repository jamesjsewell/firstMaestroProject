import Backbone from 'backbone'

export var DetailsModel = Backbone.Model.extend({

	url: function() {
		return `https://openapi.etsy.com/v2/listings/${this.listingId}/.js`
	},
	_key: 'qycca7qp2gj078smbdvxdg7b',
	parse: function(apiResponse) {
		console.log(apiResponse)
		return apiResponse

	}
})