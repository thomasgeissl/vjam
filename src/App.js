import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home";
import Room from "./components/Room";

import store from "./store";

const Container = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

function App() {
  return (
    <Container>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/rooms/:id">
              <Room />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
