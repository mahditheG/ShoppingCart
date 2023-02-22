import axios from "axios"

const BASE_URL = 'https://fakestoreapi.com'

export const getProducts = async () => {
     const responsive = await axios.get(`${BASE_URL}/products`);
     return responsive.data
}

export { getProducts }


