import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Navbar, Alignment } from "@blueprintjs/core";

import ProductList from '../ProductList';
import { goToShoppingCartHomeAction } from '../../../../store/product';

export default function ProductHome() {
  const dispatch = useDispatch();
  const cartproducts = useSelector( state => state.cartproducts );
  const counter = cartproducts.length ? '(' + cartproducts.length + ')' : '';

  const onGoToShoppingCartHome = ( event ) => {
    dispatch( goToShoppingCartHomeAction() );
  }

  return (
      <div>
        <Navbar className="bp3-dark">
            <Navbar.Group align={Alignment.RIGHT}>
                <Navbar.Heading>E-commerce</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="shopping-cart" text={ 'Shopping cart' + counter } onClick={ onGoToShoppingCartHome } />
            </Navbar.Group>
        </Navbar>

        <ProductList />
      </div>
  );
}
