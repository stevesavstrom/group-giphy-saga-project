import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Search from '../Search/Search';

function App(props) {
  return (
    <Router>
      <div>
        <h1>Giphy Search!</h1>
          <Route path="/" exact>
            <Search />
          </Route>
          {/* <Route path="/Favorite">
            <p>Favorite:</p>
          <Favorite /> */}
        {/* </Route> */}
      </div>
    </Router>
  );
}

export default App;
