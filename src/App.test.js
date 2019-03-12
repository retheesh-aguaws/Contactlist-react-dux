import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(rootReducer, applyMiddleware(thunk));
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
