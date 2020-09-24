import React from 'react'
import ImgResume from '../assets/resume.png'
import Resume from '../assets/amir_diafi_resume.pdf'
import {FiDownload} from 'react-icons/fi'
import {FaTimes, FaRegImage, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'
import './stylesheets/about.css'
class About extends React.Component {
    state = { 
        isDisplay: false
     }

    handleDispaly = () => {
        this.setState({
            isDisplay: !this.state.isDisplay
        })
    }

    render() { 
        return (
            <div className='about'>
                <div 
                    className={
                        this.state.isDisplay
                        ?"display"
                        :"hidden"
                    }
                >
                    <div className='img'>
                        <span 
                            className='close'
                            onClick={this.handleDispaly}
                        ><FaTimes/>
                        </span>
                            <img src={ImgResume} alt=""/>
                    </div>
                </div>
		        <div className='article'>
		        <h4>About Me</h4>
                <p>
                    I'm Amir Diafi, a JavaScript Engineer
                    <span 
                        role='img' 
                        aria-label='aria-label'
                    > 👨‍💻 </span> from Algeria.
                    Good to know about me is that I love 
                    to solve problem with turn it into a program 
                    that solves this problem; I also love fitness, 
                    meditation and sometimes I also cooking 
                    (to be accurate trying) and sometimes it 
                    turns out to be awesome 
                    <span 
                        role='img' 
                        aria-label='aria-label'
                    >&#128523;
                    </span>,
                    and lastly I'm minimalist guy
                    <span 
                        role='img' 
                        aria-label='aria-label'
                    >&#128715;</span>.
		    I code 10 hrs 🕗 a day, sometimes 15-16 hrs 🕔.
                    <br/>
                    <br/>
                    I enjoy make sometimes some video about JavaScript 
                    it's all free; and this is happen on my 
                     <a className='youtube' href="http://">
                        <FaYoutube/> Arabic YouTube channel
                    </a>,
                    writing some cheatsheets about JavaScript too.
                </p>
                <hr/>
                <div className="info">
                    <h2>
                        Find me on: 
                    </h2>
                    <hr/>
                    <div className='item'> E-mail: 
                        <a href="mailto:amirdiafi2@gmail.com">
                            amirdiafi2@gmail.com
                        </a>
                    </div>
                    <hr/>
                    <div className='item'> Mobile: 
                        <a href="tel:+213665868409">
                            +213665868409
                        </a>
                    </div>
                    <hr/>
                    <div className='item'>
                        <a 
                            href="https://twitter.com/amir_diafiU" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaTwitter/> Amir Diafi
                        </a>
                    </div>
                    <hr/>
                    <div className='item'>
                        <a 
                            href="https://linkedin.com/amir_diafi" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin/> Amir Diafi
                        </a>
                    </div>
                </div>
            </div>
            <div className="resume">
                <div className='img' onClick={this.handleDispaly}>
                    <img src={ImgResume} alt=""/>
                    <span className='fullscreen'>
                        <FaRegImage/>
                    </span>
                </div>
                <h3 className='text-center'>
                    My Updated Resume
                </h3>
                <a 
                    href={Resume} 
                    download='Amir_Diafi_Resume'>
                    Download  <FiDownload/>
                </a>
            </div>
        </div>
        )
    }
}
 
export default About;