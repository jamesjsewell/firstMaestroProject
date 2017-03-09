import React from 'react'
import Banner from './components/bannerComp.js'
import Listing from './components/listingComp.js'

var ListingsPage = React.createClass({

	_makeBanner: function(){

		return <Banner />

	},

	_makeListings: function(){
		
		var listingsArray = []
		for(var i=0; i < this.props.listingColl.length; i++){
			listingsArray.push(<Listing listingModel ={this.props.listingColl[i]}/>)
		}
		
		return listingsArray
	},

	render: function(){
		
		return (
 			<div>
 				{this._makeBanner()}	
 				{this._makeListings()}		
 			</div>
 		)
	}
})

export default ListingsPage