import { ProductsJson } from '../../assets/json';

//localStorage asserts
const products = localStorage.getItem( 'products' );
const cartproducts = localStorage.getItem( 'cartproducts' );
const history = localStorage.getItem( 'history' );
if( !products ) localStorage.setItem( 'products', JSON.stringify( ProductsJson ) );
if( !cartproducts ) localStorage.setItem( 'cartproducts', JSON.stringify( [] ) );
if( !history ) localStorage.setItem( 'history', JSON.stringify( [] ) );

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

    case 'DETAIL_PRODUCT':
      var product = products.find( product => product.id === action.id );
      return { ...state, currentProduct: product };

    //shopping cart
    case 'ADD_PRODUCT_TO_CART':
      var added = cartproducts.find( product => product.id === action.id );
      if( !added ) {
        var product = products.find( product => product.id === action.id );
        if( product ) {
          var cartproduct = { ...product, quantity: 1, selected: false };
          cartproducts.push( cartproduct );
          localStorage.setItem( 'cartproducts', JSON.stringify( cartproducts ) );
        }
      }
      return { ...state, cartproducts: cartproducts };

    case 'UPDATE_CART_PRODUCT':
      var cartproduct = cartproducts.find( product => product.id === action.cartproduct.id );
      if( cartproduct ) {
        cartproduct.quantity = action.cartproduct.quantity || 1;
        localStorage.setItem( 'cartproducts', JSON.stringify( cartproducts ) );
      }
      return { ...state, cartproducts: cartproducts };

    case 'TOGGLE_CART_PRODUCT':
      var cartproduct = cartproducts.find( product => product.id === action.cartproduct.id );
      if( cartproduct ) {
        cartproduct.selected = !cartproduct.selected;
        localStorage.setItem( 'cartproducts', JSON.stringify( cartproducts ) );
      }
      return { ...state, cartproducts: cartproducts };

    case 'TOGGLE_ALL_CART_PRODUCTS':
      cartproducts.map( product => product.selected = action.toggle );
      localStorage.setItem( 'cartproducts', JSON.stringify( cartproducts ) );
      return { ...state, cartproducts: cartproducts };

    case 'DELETE_CART_PRODUCT':
      var newCartproducts = cartproducts.filter( product => product.id !== action.id );
      localStorage.setItem( 'cartproducts', JSON.stringify( newCartproducts ) );
      return { ...state, cartproducts: newCartproducts };

    case 'DELETE_ALL_SELECTED_CART_PRODUCT':
      var newCartproducts = cartproducts.filter( product => !product.selected );
      localStorage.setItem( 'cartproducts', JSON.stringify( newCartproducts ) );
      return { ...state, cartproducts: newCartproducts };

    case 'CHECKOUT_CART_PRODUCTS':
      var loggedUser = JSON.parse( localStorage.getItem( 'loggedUser' ) );
      var history = JSON.parse( localStorage.getItem( 'history' ) );
      localStorage.setItem( 'cartproducts', JSON.stringify( [] ) );
      history.push( { timestamp: new Date().getTime(), username: loggedUser.username, products: cartproducts } );
      localStorage.setItem( 'history', JSON.stringify( history ) );
      return { ...state, cartproducts: [] };

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

//cart

export const cartProductUpdateAction = ( id, quantity ) => {
  return { type: 'UPDATE_CART_PRODUCT', cartproduct: { id: id, quantity: quantity } };
};

export const toggleAllCartProductsAction = ( toggle ) => {
  return { type: 'TOGGLE_ALL_CART_PRODUCTS', toggle: toggle };
};

export const toggleCartProductAction = ( id ) => {
  return { type: 'TOGGLE_CART_PRODUCT', cartproduct: { id: id } };
};

export const deleteCartProductAction = ( id ) => {
  return { type: 'DELETE_CART_PRODUCT', id: id };
};

export const deleteAllSelectedCartProductsAction = () => {
  return { type: 'DELETE_ALL_SELECTED_CART_PRODUCT' };
};

//checkout
export const checkoutCartProductsAction = () => {
  return { type: 'CHECKOUT_CART_PRODUCTS' };
};
