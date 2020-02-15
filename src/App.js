import React from 'react';
import { useSelector } from 'react-redux';
import ProductHome from './product/containers/ProductHome';
import ShoppingCartHome from './shopping-cart/ShoppingCartHome';

function App() {
  const route = useSelector( state => state.route );
  const isProductRoute = route === 'product';
  const isShoppingCartRoute = route === 'shopping-cart';

  if( isProductRoute ) return <ProductHome />;
  if( isShoppingCartRoute ) return <ShoppingCartHome />;

  return;
}

export default App;
