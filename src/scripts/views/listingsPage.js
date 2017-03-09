import React from 'react'
import Banner from './components/banner'
import Listing from './components/listingComp.js'

var ListingsPage = React.createClass({

	_makeListings: function(){
		var listingsArray = []
		for(var i=0; i < this.props.listingColl.length; i++){
			listingsArray.push(<Listing listingModel ={this.props.listingColl[i]}/>)
		}
		console.log(listingsArray)
		return listingsArray
	},
	render: function(){
		return (
 			<div>
 				{this._makeListings()}
 			</div>
 		)
	}
})

export default ListingsPage

// var SearchResults = React.createClass({
// 	_makeArticles: function(){
// 		var newArray = []
// 		for(var i = 0; i < this.props.collection.models.length; i++){

// 			newArray.push(<Article articleMod={this.props.collection.models[i]}/>)

// 		}
// 		console.log(newArray.length)
// 		return newArray
// 	},
// 	render: function(){
// 		console.log('rendering search results')
// 		console.log('Here comes the winner')
// 		console.log(this.props.collection)
// 		return (
// 			<div>
// 				{this._makeArticles()}
// 			</div>
// 		)
// 	}
// })