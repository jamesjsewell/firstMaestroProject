import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import ListingsPage from './views/listingsPage.js'
import DetailsPage from './views/detailsPage.js'
//Syntax for importing from a file that is not 'default'
import {ListingsCollection} from './models/listingModels.js'
import {DetailsModel} from './models/detailsModel.js'
var userSelection = ""

var app = function() {

	var NewsRouter = Backbone.Router.extend({

		routes: {
			'listings': 'handleListings',
			'search/:query': 'handleListingSearch',
			'details/:id': 'handleSingleListing',
			':splat': 'handleRedirect'
		},

		handleListings: function() {

			//ReactDOM.render(<ListingsPage />,document.querySelector('.container'))//ReactDOM.render will mount a React component onto the actual DOM
			var collectionInstance = new ListingsCollection()
			var promise = collectionInstance.fetch({
				dataType: 'jsonp',
				data:{
					'tags': "guitar,",
					'includes': "Images",
					'api_key': collectionInstance._key
				}
			}) 

			//Right way
			promise.then(function(){

				console.log(collectionInstance.models)
				ReactDOM.render(<ListingsPage 
					listingColl={collectionInstance.models}
					/>, document.querySelector('.container'))
			})
		},

		handleRedirect: function() {
			location.hash = 'listings'
		},

		handleListingSearch: function(query) {
			
			var collectionInstance = new ListingsCollection()
			var promise = collectionInstance.fetch({
				dataType: 'jsonp',
				data:{
					'tags': "guitar," + query,
					'includes': "Images",
					'api_key': collectionInstance._key
				}
			}) 

			//Right way
			promise.then(function(){

				console.log(collectionInstance.models)
				ReactDOM.render(<ListingsPage 
				
					listingColl={collectionInstance.models}
					/>, document.querySelector('.container'))
			})	

		},

		handleSingleListing: function(selection){
		
			var detailsModelInstance = new DetailsModel()
			var promise = detailsModelInstance.fetch({
				dataType: 'jsonp',
				data:{
			
					'id': selection,
					'includes': "Images",
					'api_key': detailsModelInstance._key
				}
			}) 

			//Right way
			promise.then(function(){

				console.log(detailsModelInstance)
				ReactDOM.render(<DetailsPage 
				
					detailsModel={detailsModelInstance}
					/>, document.querySelector('.container'))
			})

		}
	})
	new NewsRouter 
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export var app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..