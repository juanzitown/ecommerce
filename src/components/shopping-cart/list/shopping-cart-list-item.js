import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Button, Card, Elevation } from '@blueprintjs/core';
import { SampleProductImage } from '../../../assets/image';
import { cartProductUpdateAction, toggleCartProductAction, deleteCartProductAction } from '../../../store/product';

export default function ShoppingCartListItem({ id, title, description, price, quantity, selected }) {
  const dispatch = useDispatch();
  const total = ( price * ( quantity || 1 ) ).toFixed( 2 );

  const onUpdateQuantity = ( newQuantity ) => {
    dispatch( cartProductUpdateAction( id, newQuantity ) );
  }

  const onToggle = () => {
    dispatch( toggleCartProductAction( id ) );
  }

  const onDelete = () => {
    dispatch( deleteCartProductAction( id ) );
  }

  return (
    <Card elevation={Elevation.ONE} style={{ display: 'flex', flexDirection: 'row', margin: '8px 0' }}>
      <Checkbox checked={ selected } onChange={ onToggle } style={{ margin: 'auto 0' }} />
      <div><img src={ SampleProductImage } alt="Product" style={{ width: '180px', objectFit: 'contain' }} /></div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flex: '1', lineHeight: '30px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', flex: '1' }}>{ title }</div>
          <div><Button icon="trash" onClick={ onDelete } /></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: '1' }}>{ total }</div>
          <div style={{ display: 'flex', flexDirection: 'row', lineHeight: '30px' }}>
            <Button icon="minus" disabled={ quantity <= 1 } onClick={ () => onUpdateQuantity( quantity - 1 ) } style={{ borderRadius: '50%', marginRight: '8px' }} />
            { quantity }
            <Button icon="plus" onClick={ () => onUpdateQuantity( quantity + 1 ) } style={{ borderRadius: '50%', marginLeft: '8px' }} />
          </div>
        </div>
      </div>
    </Card>
  );
}
