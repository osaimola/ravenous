import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	render () {
		// starthere
		const businesses = this.props.businesses;
		const businessList = businesses.map(business =>
			<Business
				imageSrc={business.imageSrc}
				address={business.address}
				city={business.city}
				state={business.state}
				zipCode={business.zipCode}
				category={business.category}
				rating={business.rating}
				reviewCount={business.reviewCount}/>
		);
		// endhere

		return (
			<div className="BusinessList">
				{businessList}
			</div>
			);
	}
}

export default BusinessList;