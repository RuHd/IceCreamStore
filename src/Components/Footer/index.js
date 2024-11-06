import React from 'react'
import './Footer.scss'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaCopyright, FaHome, FaPhone } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from '../Logo'

const date = new Date()

const Footer = () => {
  const [year, setyear] = useState(0)

  useEffect(() => {
    setyear(date.getFullYear())
  
    return () => {
      
    }
  }, [year])
  
  return (
    <footer>
        <Logo/>
        <div className='footer--content'>
            <section className='information--list'>
              <ul>
                <li>
                  <h4> <FaPhone style={{transform: 'rotateZ(100deg)'}} size={15}/>
                    <span>
                      Phone
                    </span>
                  </h4>
                  <span>+12-3456-7890</span>
                </li>
                <li>
                  <h4><FaHome size={15}/>
                    <span>
                      Address
                    </span>
                  </h4>
                  <span>Unknown St - Gotham City - 23456 </span>
                </li>
              </ul>
            </section>
            <section className='social--media'>
                <h4>Social Medias</h4>
                <ul>
                  <li>
                    <FaFacebook size={20} className='social--icon' />
                  </li>
                  <li>
                    <FaYoutube size={20} className='social--icon'/>
                  </li>
                  <li>
                    <FaInstagram size={20} className='social--icon'/>
                  </li>
                  <li>
                    <FaTwitter size={20} className='social--icon'/>
                  </li>
                </ul>
            </section>
        </div>
        <p> 
          <span>
          <FaCopyright className='copyright--icon' size={15}/>Tastync - Made By Ruan Mesquita - {year}
          </span>
        </p>
    </footer>
  )
}

export default Footer