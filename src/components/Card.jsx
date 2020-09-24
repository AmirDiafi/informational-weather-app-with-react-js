import React from 'react'
import './stylesheets/card.css'
import {Link} from 'react-router-dom'

function Card(props) {
    let {pathname} = window.location
    return (
        <div className="item col col-12 col-sm-6 col-md-4">
            <div className='cont'>
                {props.data.new&&<span>New</span>}
                <img 
                    src={pathname.includes('/works/')
                    ?'../../media/images/'+props.data.img
                    :'media/images/'+props.data.img}
                    alt=""
                />
                <div className="info">
                    <Link 
                        className='islink' 
                        to={'/posts/'+props.data.pathname}
                    >
                        <p className='islink'>
                            <img 
                                src={pathname.includes('/works/')
                                ?'../../media/images/'+props.data.logo
                                :'media/images/'+props.data.logo}
                                className="logo islink"
                                alt=""
                            />
                            {props.data.date}
                        </p>
                        <h3 className='islink'>
                            {props.data.title}
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
        )
}
 
export default Card;