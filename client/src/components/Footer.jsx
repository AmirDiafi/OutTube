import React from 'react'
import './stylsheets/footer.css'
import {FaTwitter, FaLinkedin, FaYoutube, FaGithub} from 'react-icons/fa'

function Footer() {
    return(
        <footer className='row'>
            <div className="footer-links col col-12">
            <a className='twitter'
                href="https://twitter.com/amir_diafiU" 
                target="_blank"
                rel="noopener noreferrer">
                <FaTwitter/>
            </a>
            <a className='linkedin'
                href="https://www.linkedin.com/in/amirdiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a className='youtube'
                href="https://www.youtube.com/channel/UCgbqyUzyD2IfqYoc0RcS2MA" 
                target="_blank"
                rel="noopener noreferrer">
                <FaYoutube/>
            </a>
            <a className='github'
                href="https://github.com/AmirDiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub/>
            </a>
            </div>
            <div className="copy col col-12">
                2020 &copy; <a href="https://amirdiafi.com">Amir Diafi</a> | OutTube
            </div>
            <div className="copy col col-12">
                Version 1.0.0
            </div>
            <div className="footer-line"></div>
        </footer>
    )
}

export default Footer