
//localStorage asserts
const products = localStorage.getItem( 'products' );
if( !products ) localStorage.setItem( 'products', JSON.stringify( [ { name: 'Product 01' }, { name: 'Product 02' } ] ) );

//reducer
const INITIAL_STATE = {
  data: JSON.parse( localStorage.getItem( 'products' ) ),
};

export default function ProductReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      //add to localStorage
      const products = JSON.parse( localStorage.getItem( 'products' ) );
      products.push( action.product );
      localStorage.setItem( 'products', JSON.stringify( products ) );
      return { ...state, data: products };
    default:
      return state;
  }
}

export const addProductAction = ( product ) => {
  return { type: 'ADD_PRODUCT', product: product };
}