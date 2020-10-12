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
          <Route path="/calendar-app/home" exact component={HomePage} />
          <Route path="/calendar-app/about-us" component={AboutUs} />
          <Redirect from="*" to="/calendar-app/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
