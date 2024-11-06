import React from 'react'
import './Heropage.scss'
import image1 from '../../Images/bowlIceCream.png'

const Heropage = () => {
  return (
    <div className='Heropage'>
        <h2 className='kalam-regular'>Experience for your taste!</h2>
        <div className='heropage--image--container'>
            <img src={image1} alt='Ice Cream'/>
        </div>
    </div>
  )
}

export default Heropage