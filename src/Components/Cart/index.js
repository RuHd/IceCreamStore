import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import './Cart.scss'


const ProductDetail = ({item, settotalPrice, removeListItem}) => {
    const [productQtd, setproductQtd] = useState(1)
    const [productHovered, setproductHovered] = useState(false)

    // Add/Remove amount of the target product
    const changeQtd = (op) => {
        if (op === "+") {
            setproductQtd(prev => prev + 1)
            settotalPrice (total => total + 20)

        } else {
            setproductQtd(prev => prev > 1 ? prev - 1 : 1)
            settotalPrice (total => total > 80 ? total - 20 : 80)
        }
    }
    return (
        <article className='productDetail' onMouseOver={() => setproductHovered(true)} onMouseOut={() => setproductHovered(false)} >
            {productHovered && <button className='removeBtn' onClick={() => removeListItem(item.index)}><IoMdClose size='70' fill='white'/></button>}
            <img src={item.photo} style={{marginLeft: "0"}}/>
            <h3>{item.productName}</h3>
            <span>${item.price * productQtd}</span>
            <section className='quantityBtns'>
                <button onClick={() => changeQtd("+")}>
                    <IoAdd size={20}/>
                </button>
                <button onClick={() => changeQtd("-")}>
                     <IoRemoveOutline size={20}/>
                 </button>
            </section>
            <span className='quantity'>x{productQtd} </span>
        </article>
    )
}

// Cart Page 
const Cart = ({purchaseList, setcartClicked, cartClicked, removeListItem, screenSize}) => {
    const [totalPrice, settotalPrice] = useState(purchaseList.length * 20)
    
  return (
    <article className= {`CartComponent ${(cartClicked & screenSize.width >= 500) ? "fullWidth" : "MobileWidth"}`} >
        <button onClick={() => setcartClicked(false)} className='closeCart'>
            <IoIosClose size={40} fill='white'/>
        </button>
        <h2 className='roboto-bold'>Purchase List</h2>
        <ul>
            {
                purchaseList.map((item, i) => {
                    return (
                        <li>
                            <ProductDetail item = {item} settotalPrice = {settotalPrice} removeListItem = {removeListItem}/>
                        </li>
                    )
                })
            }
        </ul>
        <section className='totalPrice'>
            <span className='roboto-bold'>Total: </span> 
            <span className='roboto-bold'> ${totalPrice}</span>
        </section>
    </article>
  )
}

export default Cart