import React from 'react'
import './App.css'
import Home from './components/Home'
import {BsCodeSlash} from 'react-icons/bs'

class App extends React.Component {
  render() { 
    return ( 
      <React.Fragment>
        <div className="overlay"></div>
        <Home />
        <div className='footer-line'>
          <BsCodeSlash /> ByAmir
          <span></span>
        </div>
      </React.Fragment>
     )
  }
}
 
export default App;