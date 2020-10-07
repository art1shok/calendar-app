import React from 'react';
import './App.scss';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/werdevs-test/home" exact component={HomePage} />
          <Route path="/werdevs-test/about-us" component={AboutUs} />
          <Redirect from="*" to="home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
