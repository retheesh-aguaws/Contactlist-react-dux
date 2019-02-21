import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserDetails extends Component {
	render() {
		if (!this.props.contact) {
			return (
				<div className="alert-box">Oops! No matching results found.</div>
			);
		}
		var styles = {
			backgroundImage: 'url(' + this.props.contact.general.avatar + ')'
		}
		const contact = this.props.contact;
		return (
			<div className="contact-info">
				<header>
					<div className="image" style={styles}></div>
					<h3 className="name">{contact.general.firstName} {contact.general.lastName}{" "}</h3>
					<h3 className="occupation">{contact.job.title}{" "}</h3>
					<h3 className="company-name">{contact.job.company}{" "}</h3>
				</header>
				<section>
					<p className="phone">Phone: {contact.contact.phone}</p>
					<p className="email">Email: {contact.contact.email}</p>
					<p className="address">Address: {contact.address.street}</p>
					<p className="address">City: {contact.address.city}</p>
					<p className="address">Zip Code: {contact.address.zipCode}</p>
					<p className="address">Country: {contact.address.country}</p>
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		contact: state.contactlist.selectedContact
	});

export default connect(mapStateToProps)(UserDetails)