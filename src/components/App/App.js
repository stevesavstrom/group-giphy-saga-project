import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Favorite from '../Favorite/Favorite';


function App(props) {
  return (
    <Router>
      <div>
        <h1>Giphy Search!</h1>

        <Route path="/favorites" exact>
          <Favorite />
        </Route>
        {/* <Route path="/" exact>
            <StudentForm />
          </Route>
          <Route path="/allStudents">
            <p>Student list:</p>
          <StudentList />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
