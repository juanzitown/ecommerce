import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tag, Button, Card, Elevation } from "@blueprintjs/core";

import { addProductToCartAction } from '../../../store/product';

export default function ProductListItem({ id, name, description, value, discount }) {
  const dispatch = useDispatch();
  const cartproducts = useSelector( state => state.cartproducts );
  const added = useSelector( state => state.cartproducts.find( product => product.id === id ), [cartproducts] ); 

  const onAddToCard = ( event ) => {
    dispatch( addProductToCartAction( id ) );
  };

  const renderActionButton = () => {
    if( added ) return <Button disabled>Added</Button>;
    return <Button onClick={ onAddToCard }>Add to cart</Button>;
  }

  return (
    <Card elevation={Elevation.ONE} style={{ width: '350px', margin: '12px' }}>
      <div style={{ display: 'flex' }}>
        <div className="bp3-text-large" style={{ flex: '1' }}>{ name }</div>
        <Tag>{ discount || 0 }% off</Tag>
      </div>
      <p>{ description }</p>
      <h5><a href="#">{ value }</a></h5>
      
      { renderActionButton() }
    </Card>
  );
}
