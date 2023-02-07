import React, {useRef} from 'react'
import Link from 'next/link'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import totast from 'react-hot-toast'

import {useStateContext} from '../context/StateContext'
import {urlFor} from '../lib/client'


const Cart = () => {
  const cartRef = useRef()
  const {totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext()
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={()=>setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Your shopping bag is empty</h3>
              <Link href="/">
                <button
                type="button"
                onClick={()=>setShowCart(false)}
                className="btn">
                  Continue Shopping
                </button>
              </Link>
          </div>
        )}
      </div>

    </div>
  )
}

export default Cart