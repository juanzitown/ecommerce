import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from "@blueprintjs/core";

import { addProductAction } from '../../../store/product';

export default function ProductList() {
  const products = useSelector( state => state.data );
  const dispatch = useDispatch();

  const onAddProduct = () => {
    dispatch( addProductAction( { name: 'teste' } ) );
  }

  return (
    <div>
      <Button intent="success" text="button content" onClick={ onAddProduct } />
      { products.map( product => <div>{ product.name }</div> ) }
    </div>
  );
}
