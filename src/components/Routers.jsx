import React from 'react'
import Home from './Home'
import Display from './Display'
import About from './About'
import Error404 from './Error404'
import DisplayProfile from './DisplayProfile'
import {Route, Switch} from 'react-router-dom'

function Routers() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route path='/works/:id' component={Display}/>
            <Route path='/posts/:id' component={DisplayProfile}/>
            <Route component={Error404}/>
        </Switch>
    )
}
 
export default Routers;