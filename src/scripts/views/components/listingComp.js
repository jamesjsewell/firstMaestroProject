import React from 'react'

var Listing = React.createClass({

	render: function(){

		return(

			<div className="listing-container">

				<h3 id = {this.props.listingModel.attributes.listing_id} className = 'listing-title'>{this.props.listingModel.attributes.title}</h3>
				<img className = 'listing-thumbnail' src={this.props.listingModel.attributes.Images[0].url_fullxfull}/>
				<h3 className = 'listing-price'>{this.props.listingModel.attributes.price}</h3>
				
			</div>
		)
	}		
})

export default Listing
