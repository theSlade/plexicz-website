import React from 'react';
import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';
import TeamPage from '../src/pages/TeamPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <div>
    <Router>
       <Switch>
         <Route path="/team" component={TeamPage} /> 
         <Route path="/about" component={AboutPage} />
         <Route path="/" component={HomePage} />
         </Switch>
      </Router>
  </div>
  );
}

export default App;
