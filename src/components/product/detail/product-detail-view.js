import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Alignment, Button } from "@blueprintjs/core";

//store
import { redirect } from '../../../store/route';

//default image
import { SampleProductImage } from '../../../assets/image';
import { addProductToCartAction } from '../../../store/product';
const imgStyle = { width: '100vw', height: '40vh', objectFit: 'contain' };

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
    dispatch( addProductToCartAction( product.id ) );
  };

  const onBuyNow = () => {
    if( !added ) dispatch( addProductToCartAction( product.id ) );
    dispatch( redirect( 'shopping-cart' ) );
  };

  const renderAddToCartButton = () => {
    if( added ) return <Button disabled>Added</Button>;
    return <Button icon="plus" text="Add to cart" onClick={ onAddToCart } />;
  };

  return (
    <div>
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Button className="bp3-minimal" icon="arrow-left" text="Back to products" onClick={ () => dispatch( redirect( 'product-list' ) ) } />
        </Navbar.Group>
      </Navbar>

      <div>
        <img src={ SampleProductImage } style={ imgStyle } />
        <div style={{ minWidth: '320px', maxWidth: '480px', padding: '10px 16px', margin: '0 auto', borderTop: '1px solid #e0e0e0' }}>
          <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>{ title }</div>

          <div style={{ fontWeight: 'bold', margin: '8px 0' }}>Descriptions</div>
          <div className="bp3-running-text" style={{ color: 'rgba( 0, 0, 0, 0.56 )' }}>{ description }</div>

          <div style={{ display: 'flex', flexDirection: 'flex-row', margin: '8px 0', lineHeight: '30px' }}>
            <div style={{ fontWeight: 'bold', flex: '1' }}>Price</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>${ ( price || 0 ).toFixed( 2 ) }</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            { renderAddToCartButton() }
            <Button icon="shopping-cart" intent="primary" text="Buy Now" onClick={ onBuyNow } style={{ flex: '1', marginLeft: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
