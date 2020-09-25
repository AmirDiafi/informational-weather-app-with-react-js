import React from "react"
import './stylesheets/nav.css'
import Img from '../assets/me.jpg'
import Audio from '../assets/audio/RP4_KICK_1.mp3'
import {Link} from 'react-router-dom'
import {FiShare2, FiTwitter, FiFacebook, FiCopy, FiCheck} from "react-icons/fi"

class Nav extends React.Component {
    constructor() {
        super()
        this.href=React.createRef()
        this.isOpen=React.createRef()
        this.state = { 
            isDisplay: false,
            isCopied: false,
            href:window.location.href,
            pathname: window.location.pathname
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', (event) => {
            this.state.isDisplay
            &&this.setState({
                isDisplay: false,
                isCopied: false
            })
            if (event.target.matches('.islink')) {
                setTimeout(() => {
                    this.setState({
                        href: window.location.href,
                        pathname: window.location.pathname
                    })
                },0)
            }
	        if (event.target.matches('.isButton')) {
                const ripple = document.createElement('span')
                ripple.classList.add('ripple')
                ripple.style.width = ripple.style.height = event.target.clientWidth  + 'px'
                ripple.style.top = event.clientY - event.target.offsetTop - event.target.clientWidth/2 + 'px'
                ripple.style.left = event.clientX - event.target.offsetLeft - event.target.clientWidth/2 +'px'
                event.target.appendChild(ripple)
                setTimeout(() => {
                        event.target.removeChild(ripple)
                    },500)
                }
        })
    }

    handleDisplay = () => {
        !this.state.isDisplay
        &&this.isOpen.current.play()
        this.setState({isDisplay: !this.state.isDisplay})
    }

    handleShare = (event) => {
        this.isOpen.current.play();
        try {
            if(event.currentTarget.dataset.uri==='copyuri') {
                this.href.current.focus()
                this.href.current.select()
                document.execCommand('copy')
                this.setState({
                    isCopied: true,
                    isDisplay: true
                })
            } else if(event.currentTarget.dataset.uri==='twitter') {
                const url=window.location.href
                const user_id='amir_diafiU'
                const hash_tags='JS,JavaScript,React,Portfolio,Programming,Jobs,Development,Developer,Front-End'
                const text=encodeURIComponent('This is a React Developer Portfolio - Amir Diafi')
                const params='menubar=no,toolbar=no,status=no,width=570,height=570'
                const shareurl = `https://twitter.com/intent/tweet?uri=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`
                window.open(shareurl,'NewWindow',params)
            } else if(event.currentTarget.dataset.uri==='facebook') {
                const params='menubar=no,toolbar=no,status=no,width=570,height=570'
                const url=window.location.href
                const shareurl=`https://www.facebook.com/sharer/sharer.phpu=${url}`
                window.open(shareurl,'NewWindow',params)
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleValue = () => {
        this.setState({
            href: this.state.href
        })
    }

    render() {
        return (
            <React.Fragment>
                <nav>
                    <input 
                        style={
                            {
                                opacity:0,
                                position:'absolute'
                            }
                        }
                        type="text"
                        onChange={this.handleValue}
                        ref={this.href} 
                        value={this.state.href}
                    />
                    <audio 
                        ref={this.isOpen} 
                        src={Audio}
                    >
                    </audio>
                    <header>
                        <div className="image">
                            <img 
				loading="lazy"
				src={Img} 
				alt=""
			    />
                        </div>
                        <ul className="info list-unstyled">
                            <li>Amir Diafi</li>
                            <li>Ninja JavaScript Engineer</li>
                        </ul>
                        <h3 className='hi'>
                            Hi <span 
                                    role='img' 
                                    aria-label='aria-label'>
                                    &#128144;
                                </span>
                        </h3>
                        <button 
                            className='btn-share isButton'
                            onClick={this.handleDisplay}>
                            Share <FiShare2/>
                        </button>
                        <div 
                            className={
                                this.state.isDisplay
                                ?"share-options"
                                :"share-options hidden"}
                        >
                            <button 
                                className='btn'
                                data-uri='twitter'
                                onClick={this.handleShare}
                            ><FiTwitter/>
                            </button>
                            <button
                                className='btn'
                                data-uri='facebook'
                                onClick={this.handleShare}
                            ><FiFacebook/>
                            </button>
                            <button
                                className='btn'
                                data-uri='copyuri'
                                data-href={window.location.href}
                                onClick={this.handleShare}
                            >
                                <span 
                                    className={
                                        this.state.isCopied
                                        ?"copied-msg":"hidden"}
                                >Copied
                                </span>
                                {this.state.isCopied
                                ?<FiCheck/>
                                :<FiCopy/>}
                            </button>
                        </div>
                    </header>
                    <hr/>
                    <div className='main-routers'>
                        <Link 
                            className={this.state.pathname==='/'
                            ?'active islink isButton'
                            :'islink isButton'}
                            to='/'
                            >Recent
                        </Link>
                        <Link 
                            className={
                                this.state.pathname.includes('/works/')
                                ?'active islink isButton'
                                :'islink isButton'} 
                                to='/works/javascript'
                            >Works
                        </Link>
                        <Link 
                            className={this.state.pathname==='/about'
                            ?'active islink isButton':'islink isButton'} 
                            to='/about'
                            >About
                        </Link>
                    </div>
                </nav>
                <div 
                    className={
                        this.state.pathname.includes('/works/')
                        ?'links'
                        :'hidden'}>
                    <Link 
                        className={
                            this.state.pathname==='/works/javascript'
                            ?'active islink isButton'
                            :'islink isButton'}
                        to='/works/javascript'
                        >JavaScript
                    </Link>
                    <Link 
                        className={
                            this.state.pathname==='/works/react'
                            ?'active islink isButton'
                            :'islink isButton'} 
                        to='/works/react'
                        >ReactJS
                    </Link>
                    <Link 
                        className={
                            this.state.pathname==='/works/jquery'
                            ?'active islink isButton'
                            :'islink isButton'}
                        to='/works/jquery'
                        >JQuery
                    </Link>
                    <Link 
                        className={
                            this.state.pathname==='/works/nodejs'
                            ?'active islink isButton'
                            :'islink isButton'}
                        to='/works/nodejs'
                        >NodeJS
                    </Link>
                    <Link 
                        className={
                            this.state.pathname==='/works/css'
                            ?'active islink isButton'
                            :'islink isButton'}
                        to='/works/css'
                        >CSS
                    </Link>
                </div>
        </React.Fragment>
        )
    }
}
 
export default Nav;