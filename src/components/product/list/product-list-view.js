import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Alignment, Button, InputGroup } from "@blueprintjs/core";

//views
import { ProductListItem } from '../';

//store
import { redirect } from '../../../store/route';
import { signOutAction } from '../../../store/auth';
import { addProductAction, filterProductAction } from '../../../store/product';

export default function ProductListView() {
  const dispatch = useDispatch();
  const loggedUser = useSelector( state => state.authReducer.user );
  const products = useSelector( state => state.productReducer.products );
  const cartproducts = useSelector( state => state.productReducer.cartproducts );
  const counter = cartproducts.length ? '(' + cartproducts.length + ')' : '';

  const [filter, setFilter] = React.useState( '' );

  const onSignOut = () => {
    dispatch( signOutAction() );
    dispatch( redirect( 'signin' ) )
  }

  const onAddProduct = () => {
    dispatch( addProductAction( { name: 'teste' } ) );
  }

  const onFilterProduct = ( filter ) => {
    setFilter( filter );
    dispatch( filterProductAction( filter ) );
  }

  return (
    <div>
      <Navbar className="bp3-dark">
          <Navbar.Group align={Alignment.RIGHT}>
            <InputGroup leftIcon="search" placeholder="Search products" type="search" value={ filter } onChange={ event => onFilterProduct( event.target.value ) } />
            <Navbar.Heading>Hello, { loggedUser.username } <a onClick={ onSignOut }>(Sign out)</a></Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="shopping-cart" text={ 'Shopping cart' + counter } onClick={ () => dispatch( redirect( 'shopping-cart' ) ) } />
          </Navbar.Group>
      </Navbar>

      <div>
        <Button intent="success" text="Add product (debug)" onClick={ onAddProduct } />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          { products.map( product => <ProductListItem key={ product.id } { ...product } /> ) }
        </div>
      </div>
    </div>
  );
}
