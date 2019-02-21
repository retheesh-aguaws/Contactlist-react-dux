import React, { Component } from "react";
import UserList from "./containers/UserList";
import style from "./styles.less";
import UserDetails from "./containers/UserDetails";
import SearchBox from "./containers/SearchBox";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <div className="top-bar">
            <SearchBox />
          </div>
          <div className="contacts-container">
            <UserList />
          </div>
        </div>
        <div className="right" >
          <UserDetails />
        </div>
      </div>
    );
  }
}
export default App;
