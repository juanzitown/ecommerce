import React from 'react';
import { useSelector } from 'react-redux';

//views
import ProductHome from '../product/containers/ProductHome';
import ShoppingCartHome from '../shopping-cart/ShoppingCartHome';

//auth views
import { LoginView, SignupView, RecoverView } from '../auth';

export default function App() {
  const route = useSelector( state => state.routeReducer.route );
  console.log( route );

  switch( route ) {
    case 'product': return <ProductHome />;
    case 'shopping-cart': return <ShoppingCartHome />;

    //auth views
    case 'login': return <LoginView />;
    case 'signup': return <SignupView />;
    case 'recover': return <RecoverView />;
  }

  return;
}
