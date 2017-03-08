import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomePage from './views/homePage.js'


const app = function() {
	console.log('app started')
  	var NewsRouter = Backbone.Router.extend({
  		
		routes: {
			'home': 'handleHomeListings',
			'search/:query': 'handleResults',
			'item/:id': 'handleItem',
			'*defaultRoute': 'handleRedirect'
		},

		handleHomeListings: function() {
			console.log('homepage initialized')
			ReactDOM.render(<HomePage />,document.querySelector('.container'))
		},

		handleRedirect: function() {
			console.log('redirect')
			//location.hash = 'home'
		},

		handleResults: function(query) {
			console.log('results')
			// var collectionInstance = new ArticleCollection()
			// var promise = collectionInstance.fetch({
			// 	data:{
			// 		'q':query,
			// 		'api-key': collectionInstance._key
			// 	}
			// }) 
			// //Wrong way
			// // promise.then(ReactDOM.render(<ArticlesPage cohort='awesome' student='kenji'/>, document.querySelector('.container')))	


			// //Right way
			// promise.then(function(){
			// 	ReactDOM.render(<ArticlesPage 
			// 		cohort='awesome' 
			// 		student='kenji'
			// 		articleColl={collectionInstance}
			// 		/>, document.querySelector('.container'))
			// })	

		},

		handleItem: function(){
			console.log('item')
		}
	})
	new NewsRouter 
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..