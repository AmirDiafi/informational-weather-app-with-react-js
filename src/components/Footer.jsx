import React from 'react'
import './stylesheets/footer.css'
import {FaTwitter, FaLinkedin, FaYoutube, FaGithub} from 'react-icons/fa'

function Footer() {
    return(
        <footer className='row'>
            <div className="footer-links col col-12">
            <a 
                href="https://twitter.com/amir_diafiU" 
                target="_blank"
                rel="noopener noreferrer">
                <FaTwitter/>
            </a>
            <a 
                href="https://linkedin.com/amir_diafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a 
                href="https://youtube.com/channel/UCgbqyUzyD2lfqYocORcS2MA" 
                target="_blank"
                rel="noopener noreferrer">
                <FaYoutube/>
            </a>
            <a 
                href="https://github.com/AmirDiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub/>
            </a>
            </div>
            <div className="copy col col-12">
                2020 &copy; Amir Diafi
            </div>
            <div className="footer-line"></div>
        </footer>
    )
}

export default Footer