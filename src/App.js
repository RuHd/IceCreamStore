import { useEffect, useState } from 'react';
import './App.css';
import Heropage from './Components/Heropage';
import Menu from './Components/Menu';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Cart from './Components/Cart';




function App() {
  const [screenPosition, setscreenPosition] = useState({x: 0, y: 0})
  const [screenSize, setscreenSize] = useState({width: window.innerWidth, height: window.innerHeight})
  const [purchaseList, setPurchaseList] = useState([])
  const [cartClicked, setcartClicked] = useState(false)
  const [menuClicked, setmenuClicked] = useState(false)

  

  // Add or Remove items from the purchase List
  const changePurchaseItems = (idx, name, priceItem, cardImg) => {
        if(purchaseList.some(item => item.index === idx)) { 
          let itemsQtd = purchaseList[idx].qtd + 1
          setPurchaseList((prev) => prev.map(obj => obj.index === idx ? {...obj, qtd: itemsQtd} : obj)) // Change the quantity of the existing item based on Index property
        } else setPurchaseList((prev) => [...prev, {index: idx, productName: name, price: priceItem, qtd: 1, photo: cardImg}])       
  }  
  
  // Remove an item or decrease quantity from an existing one
  const removeListItem = (idx) => {
    setPurchaseList(prev => prev.filter(item => item.index !== idx))
    
  }

  useEffect(() => {
    const handleResize = () => setscreenSize({width: window.innerWidth, height: window.innerHeight})
    const handleScroll = (xParameter = window.scrollX,yParameter = window.scrollY) => setscreenPosition({x: xParameter,y: yParameter})
    
    window.addEventListener("scroll",handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll",handleScroll)
      window.removeEventListener("resize",handleResize)
    }
  }, [])

  return (
    <div className={`App ${((cartClicked && purchaseList.length>0) || (menuClicked)) ? "darkMode" : ""}`} >
        {cartClicked && <Cart screenSize = {screenSize} purchaseList = {purchaseList} setcartClicked = {setcartClicked} cartClicked = {cartClicked} removeListItem = {removeListItem}/>}
        <Menu purchaseList = {purchaseList} 
              setcartClicked = {setcartClicked} 
              screenPosition = {screenPosition} 
              screenSize = {screenSize}
              setmenuClicked = {setmenuClicked}
              menuClicked = {menuClicked}
        />
        <Heropage/>
        <Products screenPosition = {screenPosition} changePurchaseItems = {changePurchaseItems} removeListItem = {removeListItem} purchaseList={purchaseList}/>
        <Footer/>
    </div>
  );
}

export default App;
