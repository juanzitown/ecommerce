import React from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from '../../../store/route';
import { Button, Icon } from '@blueprintjs/core';

// import { Container } from './styles';

export default function CheckoutDoneView() {
  const dispatch = useDispatch();

  return (
    <div style={{ minWidth: '320px', maxWidth: '480px', minHeight: '480px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
        <div><Icon icon="tick-circle" iconSize="100" intent="success" /></div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '12px 0' }}>Thank you for your purchase!</div>
        <div style={{ margin: '12px 0px' }}>You order number is: { new Date().getTime() }</div>
        <Button icon="shopping-cart" text="See other products" onClick={ () => dispatch( redirect( 'product-list' ) ) } />
      </div>
    </div>
  );
}
