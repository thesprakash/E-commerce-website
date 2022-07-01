import { Button } from '@material-ui/core';
import React from 'react';
import "./Cart.css";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='cart__items'>
      <div className='cart__items__header'>Cart Items</div>

      {cartItems.length === 0 && (
        <div className='cart__items__empty'>No items are added in the cart</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cat__items__list">
            <img className="cart__item__image"
              src={item.image}
              alt={item.name}
            />

            <div className='cart__item_name'>{item.title}</div>
            <div className='cart__item__function'>

              <button className='cart__items__add' onClick={() => handleAddProduct(item)}>+</button>
              <button className='cart__items__remove' onClick={() => handleRemoveProduct(item)}>-</button>

            </div>
            <div className='cart__item__price'>
              {item.quantity} * {item.price}
            </div>
          </div>
        ))}
      </div>
      <div className='cart__item__total__price__name'>
        Total price
        <div className='cart__item__total__price'>
          Rs: {totalPrice}
        </div>
        <Button variant='contained' color='primary' style={{marginLeft:"10%"}}>
           Checkout
        </Button>

      </div>
    </div>
  )
}

export default Cart;