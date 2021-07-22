import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';

function App(props) {
  return (
    <Router>
      <div>
        <h1>Giphy Search!</h1>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/favorites" exact>
           <Favorite />
          </Route>
      </div>
    </Router>
  );
}

export default App;
