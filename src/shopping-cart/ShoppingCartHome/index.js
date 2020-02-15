import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Navbar, Alignment } from "@blueprintjs/core";

import ShoppingCartList from '../ShoppingCartList';
import { goToProductHomeAction } from '../../store/product';



export default function ShoppingCartHome() {
    const dispatch = useDispatch();
    const onGoToProductHome = ( event ) => {
    dispatch( goToProductHomeAction() );
    }

  return (
      <div>
        <Navbar className="bp3-dark">
            <Navbar.Group align={Alignment.RIGHT}>
                <Navbar.Heading>Shopping Cart</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="shopping-cart" text="Buying..." onClick={ onGoToProductHome } />
            </Navbar.Group>
        </Navbar>

        <ShoppingCartList />
      </div>
  );
}
