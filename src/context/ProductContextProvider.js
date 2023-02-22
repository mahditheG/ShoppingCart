import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

export const ProductContext = React.createContext()

const ProductContextProvider = (props) => {

     const [products, setProducts] = useState([])


     useEffect(() => {
          const fetchAPI = async () => {
               setProducts(await getProducts())
          }

          fetchAPI()
     }, [])


     return (
          <ProductContext.Provider value={products}>
               {props.children}
          </ProductContext.Provider>
     );
};

export default ProductContextProvider;