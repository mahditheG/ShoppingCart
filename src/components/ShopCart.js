import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../context/CartContextProvider';
//Component
import Cart from './shared/Cart';
//css
import styles from './ShopCart.module.css'

const ShopCart = () => {
     const { state, dispatch } = useContext(CartContext)
     return (
          <div className={styles.container}>
               <div className={styles.cartContainer}>
                    {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
               </div>

               {
                    state.itemsCounter > 0 && <div className={styles.payments}>
                         <p><span>Total Items: </span>{state.itemsCounter}</p>
                         <p><span>Total Payments: </span>{state.total} $</p>
                         <div className={styles.buttonContainer}>
                              <button onClick={() => dispatch({ type: "CLEAR" })} className={styles.clear}>Clear</button>
                              <button onClick={() => dispatch({ type: "CHECKOUT" })} className={styles.checkout}>Checkout</button>
                         </div>
                    </div>
               }

               {
                    state.checkout && <div className={styles.complete}>
                         <h3>Checked Out Successfully </h3>
                         <Link to='/products'>Buy More</Link>
                    </div>
               }

               {
                    !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                         <h3>Want to Buy?</h3>
                         <Link to='/products'>Back to Shop</Link>
                    </div>
               }
          </div >
     );
};

export default ShopCart;