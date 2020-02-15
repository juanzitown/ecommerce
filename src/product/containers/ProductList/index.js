import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from "@blueprintjs/core";
import ProductListItem from '../ProductListItem';

import { addProductAction } from '../../../store/product';

export default function ProductList() {
  const products = useSelector( state => state.products );
  const dispatch = useDispatch();

  const onAddProduct = () => {
    dispatch( addProductAction( { name: 'teste' } ) );
  }

  return (
    <div>
      <Button intent="success" text="button content" onClick={ onAddProduct } />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { products.map( product => <ProductListItem key={ product.id } { ...product } /> ) }
      </div>
    </div>
  );
}
