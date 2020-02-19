import React from 'react';
import { Checkbox, Button, Card, Elevation } from '@blueprintjs/core';
import { SampleProductImage } from '../../../assets/image';

export default function ShoppingCartListItem({ title, description, price, quantity, selected }) {
  const qty = quantity || 1;

  const onSelect = () => {

  };

  return (
    <Card elevation={Elevation.ONE} style={{ display: 'flex', flexDirection: 'row', margin: '8px 0' }}>
      <Checkbox checked={ selected } onChange={ onSelect } style={{ margin: 'auto 0' }} />
      <div><img src={ SampleProductImage } style={{ width: '180px', objectFit: 'contain' }} /></div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flex: '1', lineHeight: '30px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', flex: '1' }}>{ title }</div>
          <div><Button icon="trash" /></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: '1' }}>{ price }</div>
          <div style={{ display: 'flex', flexDirection: 'row', lineHeight: '30px' }}>
            <Button icon="minus" disabled={ qty <= 1 } style={{ borderRadius: '50%', marginRight: '8px' }} />
            { qty }
            <Button icon="plus" style={{ borderRadius: '50%', marginLeft: '8px' }} />
          </div>
        </div>
      </div>
    </Card>
  );
}
