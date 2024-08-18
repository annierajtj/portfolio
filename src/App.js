import React from 'react';
import Nav from './nav';
import Loader from './loader';
import Home from './home';
import About from './about';
import Work from './work';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { useSelector } from "react-redux";

function App() {

  const count = useSelector(state => state.reducer.loadintro);

  return (
    <Router>
    {count && <Loader />}
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    </Switch>
    <Nav/>
    </Router>
  );
}

export default App;
