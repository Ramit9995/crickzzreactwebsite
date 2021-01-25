import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Venue from "./components/pages/Venue";
import Countz from './components/pages/Countz';
import India from './components/pages/India';
import Tournaments from "./components/pages/Tournaments";
import Scores from "./components/pages/Scores";
import Australia from "./components/pages/Australia";

function App() {
  return (
    <>
    <Router>  {/* this will contain all of the routes that is our pages */}
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
         <Route path='/venue' component={Venue} />
        <Route path='/country' component={Countz} />
        <Route path='/india' component={India} />
        <Route path='/tournaments' component={Tournaments} />
        <Route path='/scores' component={Scores} />
        <Route path='/australia' component={Australia} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
