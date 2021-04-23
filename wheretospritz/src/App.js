import React, {useState, useEffect, Fragment} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import HomePage from './pages/HomePage';

import pageStyle from './pages/Pages.module.css'

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
           
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about" component={About}>
            
//           </Route>

//           <Route path="/" component={HomePage}>
            
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


function App() {
  return (
    <div className={pageStyle.body}>
      <Fragment>
        <NavigationBar></NavigationBar>
        {/* <Router>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/about" component={About}></Route>
            </Switch>
        </Router> */}
      </Fragment>
    </div>
  );
}

export default App;
