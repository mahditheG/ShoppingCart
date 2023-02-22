import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
//Components
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';


function App() {
  
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path='/products/:id' component={ProductDetail} />
          <Route path='/products' component={Store} />
          <Route path='/cart' component={ShopCart} />
          <Redirect to='/products' />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
