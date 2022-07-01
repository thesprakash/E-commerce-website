import React from 'react';
import "./Wishlist.css";
import Button from '@material-ui/core/Button';

const Wishlist = ({ wishlistItems, handleAddProduct, productItems }) => {
  return (
    <div className='wishlist'>
      <div className='wishlist__name'>Wishlist</div>
      <div >
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist__allinfo">
            <img className='wishlist__image'
              src={item.image}
              alt={item.title}
            />
            <div className='wishlist__name__price'>
              <div className='wishlist__title'>{item.title}</div>
              <div>Rs:  {item.price}</div>
            </div>
            <div className='wishlist__move__button' >
              <Button variant="contained" color="primary" onClick={() => handleAddProduct(item) }>
                Add to cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Wishlist;