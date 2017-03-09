import React from 'react'
import Banner from './components/bannerComp.js'
import Listing from './components/listingComp.js'

var DetailsPage = React.createClass({

	_handleClick: function(eventObj){
		if (eventObj.target.attributes.class.value === "listing-title") {
			console.log('clicked this')
			location.hash = `item/${eventObj.target.value}`
		}
	},

	_makeBanner: function(){

		return <Banner />

	},

	_makeDetails: function(){
		
		
		return <Details model ={this.props.detailsModel}/>
		
	},

	render: function(){
		console.log(this._makeBanner())
		console.log('making details')
		return (

 			<div onClick={this._handleClick}>
 				{this._makeBanner()}	
 				{this._makeDetails()}		
 			</div>
 		)
	}
})

var Details = React.createClass({

	render: function(){
		console.log(this.props.model.attributes.results[0], "HERE IT IS")
		console.log('rendering detials')

		return(

			<div className="details-container">
				<div className ="details-title"><h2 className = 'listing-title'>{this.props.model.attributes.results[0].title}</h2></div>
				<div className="details-column-left">
					<img className = 'listing-thumbnail' src={this.props.model.attributes.results[0].Images[0].url_fullxfull}/>
				</div>
				<div className="details-column-right">
					<p className = 'details-description'>{this.props.model.attributes.results[0].description}</p>
					<p className = 'details-price'>{this.props.model.attributes.results[0].price}</p>
				</div>
			</div>
		)
	}		
})


export default DetailsPage