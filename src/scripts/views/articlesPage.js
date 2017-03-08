import React from 'react'
import Banner from './components/banner'

var ArticlesPage = React.createClass({
	render: function(){
		console.log('rendering articles page')
		console.log('Here comes the value of this in articles page')
		console.log(this)
		return (
			<div className="articles-page">
				<Banner />
				<SearchResults collection={this.props.articleColl} />
			</div>
			)
	}
})

var SearchResults = React.createClass({
	_makeArticles: function(){
		var newArray = []
		for(var i = 0; i < this.props.collection.models.length; i++){

			newArray.push(<Article articleMod={this.props.collection.models[i]}/>)

		}
		console.log(newArray.length)
		return newArray
	},
	render: function(){
		console.log('rendering search results')
		console.log('Here comes the winner')
		console.log(this.props.collection)
		return (
			<div>
				{this._makeArticles()}
			</div>
		)
	}
})

var Article = React.createClass({
	
	_toggleParagraph: function(){

		this.setState({
			pShowing: this.state.pShowing ? false : true
		})
	
	},
	getInitialState: function(){
		return {
			pShowing: false
		}
	},

	render: function(){
		console.log('here is state', this)
		console.log('fsfdgsdgsdgsdgf',this.props.articleMod)
		var paraStyle = {
			display: 'none'
		}
		var	buttonSymbol = '+'
		if (this.state.pShowing){
			paraStyle.display = 'block'
			buttonSymbol = '-'

		}
		return(
		<div className="article">
			<h3>{this.props.articleMod.get('headline').main}</h3>
			<button onClick={this._toggleParagraph}>{buttonSymbol}</button>
			<p style = {paraStyle}>{this.props.articleMod.get('lead_paragraph')}</p>
		</div>
		)
	}
})

export default ArticlesPage