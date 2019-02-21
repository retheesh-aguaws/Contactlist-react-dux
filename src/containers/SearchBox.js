import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchContacts } from "../actions/contactActions.js"

class SearchBox extends Component {
    constructor() {
        super();
        this.searchContacts = this.searchContacts.bind(this);
    }

    searchContacts(event) {
        event.preventDefault();
        let searchValue = event.target.value;
        this.props.dispatch(searchContacts(searchValue, this.props.filteredContacts));
    }

    render() {
        const { search, value } = this.props;

        return (
            <input
                type="text"
                className="searchTerm"
                placeholder="Search contacts..."
                onChange={this.searchContacts}
                value={value}
            />
        );
    }
}

function mapStateToProps({ works }) {
    return { value: works };
}

const mapDispatchToProps = (dispatch) => ({
    searchContacts: (searchValue,users) => dispatch(searchContacts(searchValue,users))
  });

export default connect(mapStateToProps, null)(SearchBox);