import react from "react";
//react router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//pages

import Home from "./home";
import About from "./about"
import People from "./people"
import Error from "./error"

//navbar
import Navbar from "./navbar"
import NavBar from "./navbar";

const ReactRouterSetUp = () =>{
    return(
        <Router>
            <NavBar/>
            <Switch>
                
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/about">
                <About/> 
            </Route>

            <Route exact path="/people">
                <People/>
            </Route>

            <Route exact path="*">
                <Error/>
            </Route>
            </Switch>
        </Router>

      

        
        
    )
}

export default ReactRouterSetUp;