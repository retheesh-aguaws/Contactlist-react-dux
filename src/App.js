import React, { Component } from "react";
import UserList from "./containers/UserList";
import style from "./styles.less";

const stylesApp = {
  marginTop: 40
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <h2>Contacts</h2>
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="Search contacts..."></input>
            </div>
          </div>
          <div className="contacts-container">
            <UserList />
          </div>
        </div>
        <div className="right">

        </div>
      </div>
    );
  }
}
export default App;
