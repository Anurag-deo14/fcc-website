import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer >
      <a href='#' className='footer__logo'><img src={logo} alt='logo' className='w-29 h-12 object-contain' /></a>
      
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#sponsors'>Sponsors</a></li>
        <li><a href='#events'>Events</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/company/finance-nitrr/'><AiFillLinkedin  size={35}/></a>
        <a href='https://www.instagram.com/fccnitrr/'><AiOutlineInstagram size={35}/></a>
        <a href='https://github.com/FCC-NITRR'><AiOutlineGithub size={35}/></a>
        <a href='https://discord.com/invite/B3pk6UdQ88'><BsDiscord size={35}/></a>
      </div>

      
      <div className='footer__copyright'>
        <medium>Made with 💜 by Tech Team.</medium>
      </div>
    </footer>
  )
}

export default Footer