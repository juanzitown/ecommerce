import React from 'react';
import { useSelector } from 'react-redux';

//views
import { ProductListView } from '../product';
import { ShoppingCartListView } from '../shopping-cart';

//auth views
import { SigninView, SignupView, RecoverView } from '../auth';

export default function App() {
  const route = useSelector( state => state.routeReducer.route );

  switch( route ) {
    case 'product': return <ProductListView />;
    case 'shopping-cart': return <ShoppingCartListView />;

    //auth views
    case 'signin': return <SigninView />;
    case 'signup': return <SignupView />;
    case 'recover': return <RecoverView />;
    default: return <SigninView />;
  }
}
