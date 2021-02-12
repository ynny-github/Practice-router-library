import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

function ElementWithNestedRoute() {
  const {path, url} = useRouteMatch();
  const history = useHistory();

  const onClick = () => {
    history.push(`${url}/1-nested`)
  }

  return (
    <React.Fragment>
    <Link to={`${url}/1-nested`}>
      link
    </Link>
    <Switch>
      <Route exact path={`${path}`}>
        <button onClick={onClick}>test</button>
      </Route>
      <Route path={`${path}/1-nested`}>
        1 nested
      </Route>
    </Switch>
    </React.Fragment>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/test"> test</Link>
        </Route>
        <Route path="/test">
          <ElementWithNestedRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
