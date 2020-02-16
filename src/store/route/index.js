//localStorage asserts
const route = localStorage.getItem( 'route' );
if( !route ) localStorage.setItem( 'route', 'login' );

//reducer
const INITIAL_STATE = {
  route: localStorage.getItem( 'route' ),
};

export default function RouteReducer( state = INITIAL_STATE, action ) {
  const currentRoute = localStorage.getItem( 'route' );

  switch (action.type) {

    case 'GO_TO':
      localStorage.setItem( 'route', action.route );
      return { ...state, route: action.route };

    default:
      return state;
  }
};

export const redirect = ( route ) => {
  return { type: 'GO_TO', route: route };
};