import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Elevation } from "@blueprintjs/core";

import { detailProductAction } from '../../../store/product';
import { redirect } from '../../../store/route';
import { SampleProductImage } from '../../../assets/image';

export default function ProductListItem({ id, title, filename, price }) {
  const dispatch = useDispatch();

  const onProductClicked = () => {
    dispatch( detailProductAction( id ) );
    dispatch( redirect( 'product-detail' ) );
  };

  return (
    <Card elevation={Elevation.ONE} onClick={ onProductClicked } style={{ width: '300px', margin: '10px', padding: '0' }}>
      <img src={ SampleProductImage } alt="Product" style={{ objectFit: 'contain', width: '100%' }} />
      <div style={{ padding: '12px', borderTop: '1px solid #e0e0e0', background: '#f2f2f2' }}>
        <div className="bp3-text-large" style={{ flex: '1', fontSize: '16px', fontWeight: 'bold' }}>{ title }</div>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'rgba( 0, 0, 0, 0.56 )' }}>${ ( price ).toFixed( 2 ) }</div>
      </div>
    </Card>
  );
}
