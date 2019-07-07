import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: "",
			location: "",
			sortBy: "best_match"
		};
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);

		this.sortByOptions = {
			"Best Match": 'best_match',
			"Highest Rated": 'rating',
			"Most Reviewed": 'review_count'
			// "Closest": 'distance'
		};
	}

	getSortByClass(sortByOption){
		if (sortByOption === this.state.sortBy) {
			return "active";
		} else {
			return "";
		}
	}

	handleSortByChange(sortByOption) {
		this.setState({sortBy: sortByOption});
	}

	handleTermChange(e) {
		let searchTerm = e.target.value;
		this.setState({term: searchTerm});
	}

	handleLocationChange(e) {
		let searchLocation = e.target.value;
		this.setState({location: searchLocation});
	}

	handleSearch(e) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		e.preventDefault();
	}

	renderSortByOptions () {
		return Object.keys(this.sortByOptions).map(
			sortByOption => {
				let sortByOptionsValue = this.sortByOptions[sortByOption];
				return (<li key={sortByOptionsValue}
									 className={this.getSortByClass(sortByOptionsValue)}
									 onClick={this.handleSortByChange.bind(this, sortByOptionsValue)}>{sortByOption}</li>
				         );
			}
			);
	}



	render () {
		return (
		<div className="SearchBar">
			<div className="SearchBar-sort-options">
    			<ul>
      				{this.renderSortByOptions()}
    			</ul>
  			</div>
  			<div className="SearchBar-fields">
    			<input placeholder="Search Businesses" onChange={this.handleTermChange}/>
    			<input placeholder="Where?" onChange={this.handleLocationChange}/>
  			</div>
  			<div className="SearchBar-submit">
    			<a onClick={this.handleSearch}>Let's Go</a>
  			</div>
		</div>);
	}
}

export default SearchBar;