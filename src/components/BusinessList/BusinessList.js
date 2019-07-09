import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	render () {
		// use props as received from App.js to build list of Business components with a business prop each
		const businesses = this.props.businesses;
		const businessList = businesses.map(business =>
			<Business business={business} key={business.id}/>
		);

		// return a BusinessList component with a list of businesses as children
		return (
			<div className="BusinessList">
				{businessList}
			</div>
			);
	}
}

export default BusinessList;