import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Home";
import SM from "./SM";
import TEO from "./TEO";
import WK from "./WK";
import ErrorMessage from "./ErrorMessage";

const Header = styled.div`
  text-align: center;
  margin-left: 20px;
  background-color: "blue";
  font-size: 3em;
`;

export default () => {
  return (
    <Router>
      <Header>
        <Link to="/">Home </Link>
        <Link to="/SM">SM </Link>
        <Link to="/TEO">TEO </Link>
        <Link to="/WK">WK </Link>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SM" component={SM} />
        <Route path="/TEO" component={TEO} />
        <Route path="/WK" component={WK} />
        <Route component={ErrorMessage} />
      </Switch>
    </Router>
  );
};
