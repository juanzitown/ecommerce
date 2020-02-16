import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from "@blueprintjs/core";

export default function ShoppingCartList() {
  const products = useSelector( state => state.products );
  const dispatch = useDispatch();

  return (
    <div>
        { products.map( product => <div key={ product.id }>{ product.name }</div> ) }
    </div>
  );
}
