import React from "react";
import { connect } from "react-redux";
import UserListItem from "../components/UserListItem";
import { fetchContacts, selectContact } from "../actions/contactActions.js"

class UserList extends React.Component {
  constructor() {
    super();
    this.selectContact = this.selectContact.bind(this);
  }
  
  componentDidMount = () => {
    this.props.dispatch(fetchContacts());
  };

  selectContact(contact) {
    this.props.dispatch(selectContact(contact, this.props.filteredContacts));
  }

  render() {
    const { error, loading, filteredContacts } = this.props;

    if (error) {
      return  <div className="alert-box">error.message</div>
    }

    if (loading) {
      return <div className="alert-box">Loading...</div>
    }

    return filteredContacts ? (
      <div>
        {filteredContacts.map(contact => {
          return (
            <UserListItem
              user={contact}
              key={contact.contact.email}
              onSelect={this.selectContact}
            />
          );
        })}
      </div>
    ) : null;
  }
}

const mapStateToProps = state => (state.contactlist ?
  {
    selectedContact: state.contactlist.selectedContact,
    filteredContacts: state.contactlist.filteredContacts,
    loading: state.contactlist.loading,
    error: state.contactlist.error
  } : {});

const mapDispatchToProps = (dispatch) => ({
  selectContact: (user, users) => dispatch(selectContact(user, users)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(
  mapStateToProps, null
)(UserList);
