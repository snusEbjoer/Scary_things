import { useState, useEffect } from 'react'
import './App.css'
import Cart from './cart'
import React from 'react'
import Modal from './modal'
import Form from './form'

let tg = window.Telegram.WebApp



function App() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])
  const addToCart = (obj) => {
    setCart([...cart, obj])
  }
  
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(items[0])
  const [isOpenCart, setIsOpenCart] = useState(false)

    
  useEffect(() => {
    fetch("http://127.0.0.1:5000/getAllItems")
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, []);
  return (
    <React.Fragment>
      <div className="parent">
      {items.map(obj => (
        <div className="wrapper">
        <div onClick={() => {setIsOpen(!isOpen); setCurrentItem(obj);}} key={items.item_id} className="product-img">
          <img alt="" src="https://sun9-north.userapi.com/sun9-78/s/v1/ig2/QnZ0OC_yLKyB02Qg1oJBd35r9CAiyoMEMYAQ0ocmSsHXlSeG1ivhH-M4nKlE6EzSuskkwZ8AjEqw_eSFa7p701S-.jpg?size=1200x797&quality=95&type=album" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{obj.title}</h1>
            <p>{obj.price}руб.</p>
          </div>
          <div className="product-price-btn">
            <button onClick={() => {addToCart(obj)}} type="button">В корзину</button>
          </div>
        </div>
      </div>
      ))}
      </div>
      <div onClick={() => {setIsOpenCart(!isOpenCart)}} key={cart.item_id} className='cart-icon'></div>
      {isOpenCart && < Cart cart={cart} setIsOpenCart={setIsOpenCart}/>}
      {isOpen && <Modal currentItem={currentItem} items={items} setIsOpen={setIsOpen}/>}
      <Form/>
    </React.Fragment>
  )}

export default App
