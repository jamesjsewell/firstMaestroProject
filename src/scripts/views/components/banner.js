import React from 'react'

var Banner = React.createClass({
	_handleKeyDown: function(evtObj){
		if (evtObj.keyCode === 13) {
			location.hash = `search/${evtObj.target.value}`
		}
	},

	render: function() {

		return(
			<header className = "banner-container">

				<div className = "banner-logo">
					<h1 className = "logo-text">FRETSY</h1>
				</div>
				<div className = "search-bar">
					<input type="search" onKeyDown={this._handleKeyDown}/>
				</div>

			</header>
		)
		return(
			<div className="banner">
				<h1>The Peoples News</h1>
				<input type="text" onKeyDown={this._handleKeyDown}/>
				<a href="#home">home</a>
			</div>
		)
	}
})

export default Banner