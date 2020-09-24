import React from 'react'
import Img from '../assets/error.png'

function Error404() {
    return (
        <div className="error">
            <img className='wait' src={Img} alt=""/>
            <h3 style={{color:'#797384'}} className='text-center'>
                Opps! 404 Page Not Found
            </h3>
        </div>
    )
}
 
export default Error404;