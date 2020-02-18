import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Alignment, Button } from "@blueprintjs/core";

//store
import { redirect } from '../../../store/route';

//default image
import { SampleProductImage } from '../../../assets/image';
const imgStyle = { width: '100vw', height: '40vh', objectFit: 'cover' };

export default function ProductDetailView() {
  const dispatch = useDispatch();
  const product = useSelector( state => state.productReducer.currentProduct );
  if( !product.id ) dispatch( redirect( 'product-list' ) );
  const cartproducts = useSelector( state => state.productReducer.cartproducts );
  const added = useSelector( state => state.productReducer.cartproducts.find( p => p.id === product.id ), [cartproducts] ); 

  //attributes
  const id = product.id;
  const title = product.title || '';
  const description = product.description || '';
  const price = product.price || '';

  const onAddToCart = () => {
    
  };

  const onBuyNow = () => {

  };

  const renderAddToCartButton = () => {
    if( added ) return <Button disabled>Added</Button>;
    return <Button className="bp3-minimal" icon="plus" text="Add to cart" onClick={ onAddToCart } />;
  };

  return (
    <div>
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Button className="bp3-minimal" icon="left-arrow" text="Back" onClick={ () => dispatch( redirect( 'shopping-cart' ) ) } />
        </Navbar.Group>
      </Navbar>

      <div>
        <img src={ SampleProductImage } style={ imgStyle } />
        <div>{ title }</div>
        <div>{ description }</div>
        <div>{ price }</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          { renderAddToCartButton() }
          <Button className="bp3-minimal" icon="money" text="Buy Now" onClick={ onBuyNow } />
        </div>
      </div>
    </div>
  );
}
