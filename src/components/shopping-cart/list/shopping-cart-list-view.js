import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Navbar, Alignment, Checkbox } from "@blueprintjs/core";

//store
import { redirect } from '../../../store/route';
import { ShoppingCartListItem } from '../';


export default function ShoppingCartListView() {
  const dispatch = useDispatch();
  const total = 100;
  const cartproducts = useSelector( state => state.productReducer.cartproducts );

  return (
    <div>
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading>Shopping Cart</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="shopping-cart" text="Buy more" onClick={ () => dispatch( redirect( 'product-list' ) ) } />
        </Navbar.Group>
      </Navbar>

      <div style={{ minWidth: '320px', maxWidth: '480px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '12px 8px' }}>
          <div style={{ flex: '1', alignSelf: 'center' }}><Checkbox label={ 'Select all products' } style={{ margin: '0' }} /></div>
          <Button icon="trash" text="Delete" />
        </div>

        <div style={{ margin: '8px' }}>
          { cartproducts.map( product => <ShoppingCartListItem key={ product.id } { ...product } /> ) }
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', padding: '12px 8px' }}>
          <div style={{ flex: '1' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'rgba( 0, 0, 0, 0.56 )' }}>Total price</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>${ total }</div>
          </div>

          <div><Button icon="shopping-cart" text="Checkout" /></div>
        </div>
      </div>
    </div>
  );
}
