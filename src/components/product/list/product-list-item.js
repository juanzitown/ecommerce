import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Elevation } from "@blueprintjs/core";

import { detailProductAction } from '../../../store/product';
import { redirect } from '../../../store/route';
import { SampleProductImage } from '../../../assets/image';

export default function ProductListItem({ id, title, filename, price }) {
  const dispatch = useDispatch();
  const [source, setSource] = React.useState( '' );

  const onProductClicked = () => {
    dispatch( detailProductAction( id ) );
    dispatch( redirect( 'product-detail' ) );
  };

  return (
    <Card elevation={Elevation.ONE} onClick={ onProductClicked } style={{ width: '350px', margin: '12px' }}>
      <img src={ SampleProductImage } />
      <div className="bp3-text-large" style={{ flex: '1' }}>{ title }</div>
      <h5>{ price }</h5>
    </Card>
  );
}
