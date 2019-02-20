import React from "react";
import { connect } from "react-redux";
import UserListItem from "../components/UserListItem";
import {fetchContacts} from "../actions/contactActions.js"

class UserList extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(fetchContacts());
  };
  render() {
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return users?(
      <div>
        {users.map(user => {
          return (
            <UserListItem
              user={user}
              key={user.contact.email}
            />
          );
        })}
      </div>
    ):null;
  }
}

const mapStateToProps = state => (state.users?
  {
    users: state.users.users.contacts,
    loading: state.users.loading,
    error: state.users.error
  }:null);
  

export default connect(
  mapStateToProps,
)(UserList);
