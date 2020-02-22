import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Alignment, Button, InputGroup, NonIdealState } from "@blueprintjs/core";

//views
import { ProductListItem } from '../';

//store
import { redirect } from '../../../store/route';
import { signOutAction } from '../../../store/auth';
import { filterProductAction } from '../../../store/product';

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

  const onFilterProduct = ( filter ) => {
    setFilter( filter );
    dispatch( filterProductAction( filter ) );
  }

  return (
    <div>
      <Navbar className="bp3-dark">
          <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Heading>{ loggedUser.username } <a onClick={ onSignOut }>(Sign out)</a></Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="shopping-cart" text={ 'Shopping cart' + counter } onClick={ () => dispatch( redirect( 'shopping-cart' ) ) } />
          </Navbar.Group>
      </Navbar>

      <div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
          <div style={{ lineHeight: '26px', fontSize: '16px', fontWeight: 'bold', marginRight: '16px' }}>{ 'Products (' + products.length + ')' }</div>
          <div style={{ flex: '1' }}><InputGroup leftIcon="search" placeholder="Search products" type="search" value={ filter } onChange={ event => onFilterProduct( event.target.value ) } /></div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          { products.map( product => <ProductListItem key={ product.id } { ...product } /> ) }
          { !products.length ? <NonIdealState icon="search" title="No search results" description={ [<div key={ 1 }>Your search didn't match any files.</div>, <div key={ 2 }>Try searching for something else.</div>] } /> : null }
        </div>
      </div>
    </div>
  );
}
