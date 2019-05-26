import React from "react";

import createStore from "../../createStore";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route, Switch } from "react-router";

import { ConnectedRouter } from "react-router-redux";

import "reset-css";
import "./style.css";

import HomePage from "../HomePage";
import NewTripPage from "../NewTripPage";
import TripPage from "../TripPage";

const history = createHistory();
const store = createStore(history);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/new-trip" component={NewTripPage} />
              <Route path="/trip" component={TripPage} />
            </Switch>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
