import React from 'react'
import './stylesheets/profile.css'
import {FiDownload} from 'react-icons/fi'

function Profile(props) {
    const {data} = props
    return(
        <div className="profile">
            <header>
                <img 
                    src={'../media/images/'+data.img} 
                    alt=""
                />
                <div className="info">
                    <img 
                        className='logo'
                        src={'../media/images/'+data.logo} 
                        alt=""/>
                    <h3>
                        {data.title} - Demo
                    </h3>
                    <span className="time">
                        {data.date}
                    </span>
                </div>
            </header>
            <div className="desc">
                <p>{data.desc}</p>
                <a 
                    href={data.source_code} 
                    target="_blank" 
		    rel="noopener noreferrer" >
                    Source Code  <FiDownload/>
                </a>
            </div>
        </div>
    )
}

export default Profile