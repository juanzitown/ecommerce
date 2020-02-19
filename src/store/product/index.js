import { ProductsJson } from '../../assets/json';

//localStorage asserts
const products = localStorage.getItem( 'products' );
const cartproducts = localStorage.getItem( 'cartproducts' );
if( !products ) localStorage.setItem( 'products', JSON.stringify( ProductsJson ) );
if( !cartproducts ) localStorage.setItem( 'cartproducts', JSON.stringify( [] ) );

//reducer
const INITIAL_STATE = {
  route: 'product',
  products: JSON.parse( localStorage.getItem( 'products' ) ),
  cartproducts: JSON.parse( localStorage.getItem( 'cartproducts' ) ),
  currentProduct: localStorage.getItem( 'currentProduct' ) ? JSON.parse( localStorage.getItem( 'currentProduct' ) ) : {},
};

export default function ProductReducer(state = INITIAL_STATE, action) {
  const products = JSON.parse( localStorage.getItem( 'products' ) );
  const cartproducts = JSON.parse( localStorage.getItem( 'cartproducts' ) );

  switch (action.type) {
    case 'ADD_PRODUCT':
      products.push( { id: new Date().getTime(), ...action.product } );
      localStorage.setItem( 'products', JSON.stringify( products ) );
      return { ...state, products: products };

    case 'FILTER_PRODUCT':
      var filter = action.filter || '';
      return { ...state, products: products.filter( product => !filter || ( product.title.includes( filter ) || product.description.includes( filter ) ) ) };

    case 'ADD_PRODUCT_TO_CART':
      var added = cartproducts.find( product => product.id === action.id );
      if( !added ) {
        var product = products.find( product => product.id === action.id );
        if( product ) cartproducts.push( product );
        localStorage.setItem( 'cartproducts', JSON.stringify( cartproducts ) );
      }
      return { ...state, cartproducts: cartproducts };

    case 'DETAIL_PRODUCT':
      var product = products.find( product => product.id === action.id );
      return { ...state, currentProduct: product };

    default:
      return state;
  }
};

export const addProductAction = ( product ) => {
  return { type: 'ADD_PRODUCT', product: product };
};

export const filterProductAction = ( filter ) => {
  return { type: 'FILTER_PRODUCT', filter: filter };
};

export const detailProductAction = ( id ) => {
  return { type: 'DETAIL_PRODUCT', id: id };
};

export const addProductToCartAction = ( id ) => {
  return { type: 'ADD_PRODUCT_TO_CART', id: id };
};