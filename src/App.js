import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./Components/navbar";
import Home from './Components/home';
import About from './Components/about';
import Login from "./Components/login";
import SignUp from "./Components/signup";

function App() {
  return (
    
      <div className="App">
        <>
        <Router>
      <Navbar />
      
    <Switch>
   <Route exact path="/" component={Home}></Route>
   <Route  exact path="/about" component={About}></Route>

   
   <Route path="/sign-in" component={Login} />
   <Route path="/sign-up" component={SignUp} />
   <Redirect to="/"></Redirect>
   
   </Switch>
   </Router>
   </>
   </div>
   
     );
    }
    //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //       <div className="container">
    //         <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
    //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //           <ul className="navbar-nav ml-auto">
    //             <li className="nav-item">
    //               <Link className="nav-link" to={"/sign-in"}>Login</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav> 

    //     <div className="auth-wrapper">
    //       <div className="auth-inner">
    //         <Switch>
    //           <Route exact path='/' component={Login} />
    //           <Route path="/sign-in" component={Login} />
    //           <Route path="/sign-up" component={SignUp} />
    //         </Switch>
    //       </div>
    //     </div>
    //   </div>
    // </Router> 


export default App;
