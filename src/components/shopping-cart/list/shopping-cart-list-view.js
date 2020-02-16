import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Navbar, Alignment } from "@blueprintjs/core";

//store
import { redirect } from '../../../store/route';


export default function ShoppingCartListView() {
  const dispatch = useDispatch();
  const cartproducts = useSelector( state => state.productReducer.cartproducts );

  return (
    <div>
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading>Shopping Cart</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="shopping-cart" text="Buy more" onClick={ () => dispatch( redirect( 'product' ) ) } />
        </Navbar.Group>
      </Navbar>

        <div>
          { cartproducts.map( product => <div key={ product.id }>{ product.name }</div> ) }
      </div>
    </div>
  );
}
