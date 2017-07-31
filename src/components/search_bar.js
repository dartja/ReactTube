import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	//render() {
	//	return <input onChange={this.onInputChange} />; //Always use {} for js events
	//}

	//onInputChange(event) {
	//	console.log(event.target.value);
	//}
	//Can also be written like this with Arrow Function
	render() {
		return (
			<div className="search-bar">
			<p>ReactTube</p>
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;