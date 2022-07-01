import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Header from './Header';
import ProductItems from './ProductItems';
import Cart from './Cart';
import Wishlist from './Wishlist';
import data from "./Data";
import { useState } from 'react';


function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      )
    }


  };
  const handleAddtoWishlist = (product) => {
    const ProductExist = wishlistItems.find((item) => item.id === product.id)
    if (ProductExist) {
      setWishlistItems(wishlistItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );
    }
    else {
      setWishlistItems([...wishlistItems, { ...product, quantity: 1 }])
    }
  };

  return (
    <div className='app'>
      
      <Router>
        <Routes>
          <Route path="/" exact element={<>
          < Header
              cartItems={cartItems}
              wishlistItems={wishlistItems}
            />
            <ProductItems
              productItems={productItems}
              handleAddProduct={handleAddProduct}
              handleAddtoWishlist={handleAddtoWishlist}

            />
          </>}>
          </Route>

          <Route path="/cart" element={<>
            < Header
              cartItems={cartItems}
              wishlistItems={wishlistItems}
            />
            < Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          </>
          }>
          </Route>

          <Route path="/wishlist" element={<>
            < Header cartItems={cartItems}
              wishlistItems={wishlistItems}
            />
            < Wishlist
              wishlistItems={wishlistItems}
              handleAddProduct={handleAddProduct}
            />
          </>}>
          </Route>

        </Routes>
      </Router>

    </div>

  )
}

export default App;