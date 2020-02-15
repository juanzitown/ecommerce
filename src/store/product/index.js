
//localStorage asserts
const products = localStorage.getItem( 'products' );
const cartproducts = localStorage.getItem( 'cartproducts' );
if( !products ) localStorage.setItem( 'products', JSON.stringify( [ { id: 1, name: 'Product 01' }, { id: 2, name: 'Product 02' } ] ) );
if( !cartproducts ) localStorage.setItem( 'cartproducts', JSON.stringify( [] ) );

//reducer
const INITIAL_STATE = {
  route: 'product',
  products: JSON.parse( localStorage.getItem( 'products' ) ),
  cartproducts: JSON.parse( localStorage.getItem( 'cartproducts' ) ),
};

export default function ProductReducer(state = INITIAL_STATE, action) {
  const products = JSON.parse( localStorage.getItem( 'products' ) );
  const cartproducts = JSON.parse( localStorage.getItem( 'cartproducts' ) );

  switch (action.type) {
    case 'GO_TO_PRODUCT_HOME':
      return { ...state, route: 'product' };

    case 'GO_TO_SHOPPING_CART_HOME':
      return { ...state, route: 'shopping-cart' };

    case 'ADD_PRODUCT':
      products.push( { id: new Date().getTime(), ...action.product } );
      localStorage.setItem( 'products', JSON.stringify( products ) );
      return { ...state, products: products };

    case 'ADD_PRODUCT_TO_CART':
      const added = cartproducts.find( product => product.id === action.id );
      if( !added ) {
        const product = products.find( product => product.id === action.id );
        if( product ) cartproducts.push( product );
        localStorage.setItem( 'cartproducts', JSON.stringify( cartproducts ) );
      }
      return { ...state, cartproducts: cartproducts };

    default:
      return state;
  }
};

export const goToProductHomeAction = () => {
  return { type: 'GO_TO_PRODUCT_HOME' };
};

export const goToShoppingCartHomeAction = () => {
  return { type: 'GO_TO_SHOPPING_CART_HOME' };
};

export const addProductAction = ( product ) => {
  return { type: 'ADD_PRODUCT', product: product };
};

export const addProductToCartAction = ( id ) => {
  return { type: 'ADD_PRODUCT_TO_CART', id: id };
};