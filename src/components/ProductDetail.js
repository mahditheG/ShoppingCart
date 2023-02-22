import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { ProductContext } from '../context/ProductContextProvider';
//css
import styles from './ProductDetail.module.css'

const ProductDetail = (props) => {
     const id = props.match.params.id
     const data = useContext(ProductContext)
     const product = data[id - 1];
     const { image, title, description, price, category } = product
     return (
          <div className={styles.container}>
               <img src={image} alt='product' className={styles.image} />
               <div className={styles.textContainer}>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.category}> <span>Category: </span>{category}</p>
                    <div className={styles.buttonContainer}>
                         <span className={styles.price}>{price} $</span>
                         <Link to='/products'>Back to shop</Link>
                    </div>
               </div>
          </div>
     );
};

export default ProductDetail;