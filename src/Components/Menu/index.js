import React, { useState } from 'react'
import './Menu.scss'
import Logo from '../Logo'
import { FaCartShopping } from "react-icons/fa6";
import { FaHome, FaPhoneAlt  } from "react-icons/fa";
import { IoIosClose, IoIosMenu, IoMdIceCream } from "react-icons/io";


const iconsSize = 30
const iconsColor = "white"





const MobileMenu = ({menuClicked,handleClick, setcartClicked, purchaseList, screenPosition}) => {
    return (
        <ul className={`mobileMenu ${menuClicked ? "menu-Active" : ""} ${screenPosition.y > 50 ? "mobileMenu-darkMode" : ""}`}>
                <li>
                    <button style={{animationDelay: ".1s"}}>
                        <FaHome fill= {iconsColor} size={iconsSize}/>
                        <span className='iconDescription'></span>
                    </button>
                </li>
                <li>
                    <button style={{animationDelay: ".3s"}} onClick={() => handleClick(800)}> 
                        <IoMdIceCream fill = {iconsColor} size={iconsSize}/> 
                        <span className='iconDescription'></span>
                    </button>
                </li>
                <li>
                    <button style={{animationDelay: ".5s"}} onClick={() => handleClick(window.outerHeight)}>
                        <FaPhoneAlt fill = {iconsColor} size={iconsSize}/>
                        <span className='iconDescription'></span>
                    </button>
                </li>
                <li>
                    
                    <button style={{animationDelay: ".7s"}} onClick={() => setcartClicked(prev => !prev)}>
                        {purchaseList.length > 0 && <span className='listLength'>{purchaseList.length}</span>}
                        <FaCartShopping  size={iconsSize} className={`whiteMode ${screenPosition.y > 1 ? "darkModeCart" : ""}`}/>
                    </button>
                </li>
        </ul>
    )
}

const Menu = ({purchaseList, setcartClicked, screenPosition, screenSize, setmenuClicked, menuClicked}) => {
       
    const handleClick = (y) => {
        window.scrollTo({
            top: y,
            behavior: "smooth"
        })
    }

  return (
    <header className={`${screenPosition.y > 1 ? "isScrolled" : ""}`}>
        <Logo/>
        {screenSize.width <= 500 &&
                <>
                    <button onClick={() => setmenuClicked(!menuClicked)}>
                        {menuClicked && <IoIosClose  size={50} fill='white'/>}
                        {!menuClicked && <IoIosMenu size={50} fill='white'/>} 
                    </button>
                    <MobileMenu setmenuClicked = {setmenuClicked} handleClick = {handleClick} setcartClicked = {setcartClicked} purchaseList = {purchaseList} screenPosition={screenPosition} menuClicked= {menuClicked}/>
                </>
        }

        {
            screenSize.width > 500 && 
            <ul className="roboto-bold " >
                <li>
                    <button className='Home'>
                        <FaHome fill= {iconsColor} size={iconsSize} className="Home"/>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(960)} className='Products'>
                        <IoMdIceCream fill = {iconsColor} size={iconsSize}/>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(1276)} className='Contact'>
                        <FaPhoneAlt fill = {iconsColor} size={iconsSize}/>
                    </button>
                </li>
                <li>
                    {purchaseList.length > 0 && <span className='listLength'>{purchaseList.length}</span>}
                    <button onClick={() => setcartClicked(prev => !prev)} className='Cart'><FaCartShopping  size={30} className={`whiteMode ${screenPosition.y > 1 ? "darkModeCart" : ""}`}/></button>
                </li>
            </ul>
        }

    </header>
  )
}

export default Menu