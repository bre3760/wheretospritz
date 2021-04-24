import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar';

import pageStyle from './pages/Pages.module.css'
import responsivePageStyle from './pages/ResponsivePage.module.css'
import WhatToBring from './pages/WhatToBring';


function App() {
  return (
    <div className={responsivePageStyle.siteContainer}>
          <NavigationBar></NavigationBar>
        
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path="/about" component={About}></Route>
              <Route path="/whattobring" component={WhatToBring}></Route>
              <Route path="/wheretospritz" component={HomePage}></Route>
              <Route render={function () {
                  return <p>Not found</p>
              }} />
          </Switch>
    </div>
  );
}

export default App;
