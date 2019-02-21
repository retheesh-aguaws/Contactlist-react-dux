import React from "react";
import { connect } from "react-redux";

class UserListItem extends React.Component {

  render() {
    var imageStyles = {
      backgroundImage: "url(" + this.props.user.general.avatar + ")"
    };
    var contactStyles = {
      backgroundColor: (this.props.selectedContact && this.props.selectedContact.contact.email === this.props.user.contact.email) ? "#dcd8d8" : "#FFFFFF"
    };
    return (
      <div onClick={() => this.props.onSelect(this.props.user)} className="contact" style={contactStyles}>
        <span className="image" style={imageStyles} />
        <div className="details">
          <span className="name">
            {" "}
            {this.props.user.general.firstName} {this.props.user.general.lastName}{" "}
          </span>
          <span className="job"> {this.props.user.job.company}</span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => (state.contactlist ?
  {
    selectedContact: state.contactlist.selectedContact,
  } : {});

export default connect(
  mapStateToProps, null
)(UserListItem);

