import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';
import Navigation from '../Navigation/Navigation';

function App(props) {
  return (
    <Router>
      <div>
        
        <header className="Header">
        <h1>Giphy Search!</h1>
        </header>
        
        <Navigation />
          {/* <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>  */}


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
