import React from 'react'
import Data from './data.json'
import Profile from './Profile'
import Img from '../assets/error.png'

function DisplayProfile(props) {
    const wanted= Data.find(wanted=>wanted.pathname===props.match.params.id)
    return (
        wanted
        ?<Profile data={wanted} />
        :<div className='text-center'>
	    <img className='wait' src={Img} alt=""/>
            <h3 style={{color: '#797384'}}>Opps! 404 Page Not Found</h3>
        </div>
    )
}

export default DisplayProfile