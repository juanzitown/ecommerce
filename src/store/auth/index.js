
//localStorage asserts
const auths = localStorage.getItem( 'auths' );
if( !auths ) localStorage.setItem( 'auths', JSON.stringify( [{ username: 'admin', passowrd: 'admin' }] ) );

//reducer
const INITIAL_STATE = {
  route: 'login',
  user: JSON.parse( localStorage.getItem( 'loggedUser' ) ),
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  const auths = JSON.parse( localStorage.getItem( 'auths' ) );

  switch (action.type) {
    case 'LOG_IN':
      const user = auths.find( auth => auth.username === action.user.username && auth.password === action.user.password );
      if( user ) localStorage.setItem( 'loggedUser', JSON.stringify({ username: user.username, password: user.password }) );
      return { ...state, user: user };

    default:
      return state;
  }
};

export const logInAction = ( user ) => {
  return { type: 'LOG_IN', user: user };
};