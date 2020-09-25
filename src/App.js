import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Routers from './components/Routers'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav/>
      <Routers/>
      <Footer />
    </Router>
  )
}
 
export default App;