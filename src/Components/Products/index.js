import React, { useEffect, useState } from 'react'
import './Products.scss'
import gallery from '../../slideGallery'
import cardImg1 from '../../Images/cardImg1.jpg'
import cardImg2 from '../../Images/cardImg2.jpg'
import cardImg3 from '../../Images/cardImg3.jpg'
import cardImg4 from '../../Images/cardImg4.jpg'
import { BsCartPlusFill as StoreIconPlus } from "react-icons/bs";
import { MdClose } from 'react-icons/md'
import Description from '../Description'

const cardImgList = [cardImg1, cardImg2, cardImg3, cardImg4]

const ProductCard = ({cardImg, index, isSelected, selectCard, cardSelected, price, changePurchaseItems, purchaseList}) => {
    const [isAdded, setisAdded] = useState(false)

    const addClick = () => {
      changePurchaseItems(index, "Product Name", 20, cardImg)
      setisAdded(true)
    }
    
    return (
        <button className= {`productCard ${isSelected ? "cardSelected" : ""}  ${(purchaseList.some(item => item.index === index) ) ? "AddedStyle" : ""}` } onClick={() => cardSelected !== index ? selectCard(index) : null} >

            {(purchaseList.some(item => item.index === index)) && <span className='buyChecker luckiest-guy-regular'>On the Cart!</span>}
            {(isSelected) && 
              <>
                
                <button className='closeBtn' onClick={() => selectCard(null)}>
                    <MdClose size={20}></MdClose>
                </button>
                <div className='addRemove--section'>
                    {(!isAdded || !purchaseList.some(item => item.index === index)) && 
                      <button onClick={() => addClick()}>
                        <StoreIconPlus size={30} style={{fill: "#FFFFFF"}} className='addBtn'/>
                      </button>
                    }
          
                </div>
              </>
            }
            <div className='productInfo--section'>
              <img src={cardImg} alt={`ice Cream ${index + 1}`}/>
              <h3>Product Name</h3>
            </div>
            <span className='priceTag'>$19.99</span>
        </button>
    )
}

const Products = ({changePurchaseItems, removeListItem, purchaseList}) => {
  const [currentImg, setcurrentImg] = useState(0)
  const [cardSelected, setCardSelected] = useState(null)

  // Get the current selected Card
  const selectCard = (currentImgIndex) => {
    setCardSelected(currentImgIndex)
  }

  useEffect(() => {
    // Auto Slide effect
    const slideMovement = setInterval(() => {
      setcurrentImg((prevIndex) => 
        prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
      )
     }, 4000)

      return () => {
        clearInterval(slideMovement)
      }
  }, [])
  
  return (
    <main>
        <div className='slideShow' >
            {gallery.map((image,i) => {
              return <img src={image} key={i} className={`${currentImg == i ? "imgActive" : " "}`}/>
            })}
            <Description/>
        </div>
        <h2 className='anton-regular'>Our Products</h2>
        <ul >
           {
             cardImgList.map((img,i) => {
                return (
                    <li>
                        <ProductCard key={i} 
                                     cardImg = {img} 
                                     index = {i} 
                                     isSelected={cardSelected === i ? true : false} 
                                     selectCard = {selectCard} 
                                     cardSelected = {cardSelected}
                                     changePurchaseItems = {changePurchaseItems}
                                     removeListItem = {removeListItem}
                                     purchaseList = {purchaseList}
                        />
                    </li>
                )
             })
           }
        </ul>
    </main>
  )
}

export default Products