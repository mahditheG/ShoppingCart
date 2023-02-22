import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { isInCart, quantityCounter, shorten } from '../../helper/functions';
//Context
import { CartContext } from '../../context/CartContextProvider';
//Icon
import trash from "../../assets/icons/trash.svg"
//css
import styles from './Product.module.css'


const Product = ({ productData }) => {
     const { state, dispatch } = useContext(CartContext)
     return (
          <div className={styles.container}>
               <img src={productData.image} alt='product' style={{ width: "200px" }} className={styles.cardImage} />
               <h3>{shorten(productData.title)}</h3>
               <p>{productData.price} $</p>
               <div className={styles.linkContainer}>
                    <Link to={`/products/${productData.id}`}>Details</Link>
                    <div className={styles.buttonContainer}>
                         {quantityCounter(state, productData.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })} className={styles.smallButton}><img src={trash} alt="trash" /></button>}
                         {quantityCounter(state, productData.id) > 1 && <button onClick={() => dispatch({ type: "DECREASE", payload: productData })} className={styles.smallButton}>-</button>}

                         {
                              quantityCounter(state, productData.id) > 0 && <span className={styles.counter}>{quantityCounter(state, productData.id)}</span>
                         }

                         {
                              isInCart(state, productData.id) ?
                                   <button onClick={() => dispatch({ type: "INCREASE", payload: productData })} className={styles.smallButton}>+</button> :
                                   <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add To Cart</button>
                         }
                    </div>
               </div>
          </div>
     );
};

export default Product;