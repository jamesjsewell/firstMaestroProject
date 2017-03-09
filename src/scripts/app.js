import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import ListingsPage from './views/listingsPage.js'
//Syntax for importing from a file that is not 'default'
import {ListingsCollection} from './models/listingModels.js'


var app = function() {

	var NewsRouter = Backbone.Router.extend({

		routes: {
			'listings': 'handleListings',
			'search/:query': 'handleListingSearch',
			'details/:id': 'handleSingleListing',
			'*defaultRoute': 'handleRedirect'
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
				//ReactDom.render mounts the article page component
				//any key value pairs that we assign to the component upon rendering
				//blah blah blah
				//sticking a javascript name into jsx
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
				data:{
					'q':query,
					'api-key': collectionInstance._key
				}
			}) 

			//Right way
			promise.then(function(){
				//ReactDom.render mounts the article page component
				//any key value pairs that we assign to the component upon rendering
				//blah blah blah
				//sticking a javascript name into jsx
				ReactDOM.render(<ListingsPage 
					cohort='awesome' 
					student='kenji'
					articleColl={collectionInstance}
					/>, document.querySelector('.container'))
			})	

		},
		handleSingleListing: function(){


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