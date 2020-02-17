//localStorage asserts
const auths = localStorage.getItem( 'auths' );
if( !auths ) localStorage.setItem( 'auths', JSON.stringify( [{ username: 'admin', passowrd: 'admin' }] ) );

//reducer
const INITIAL_STATE = {
  user: JSON.parse( localStorage.getItem( 'loggedUser' ) ),
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  const auths = JSON.parse( localStorage.getItem( 'auths' ) );

  switch (action.type) {
    case 'SIGN_IN':
      var user = auths.find( auth => auth.username === action.user.username && auth.password === action.user.password );
      if( user ) localStorage.setItem( 'loggedUser', JSON.stringify({ username: user.username, password: user.password }) );
      return { ...state, user: user };

    case 'SIGN_UP':
      var user = action.user;
      const auths = JSON.parse( localStorage.getItem( 'auths' ) );
      auths.push( user );
      localStorage.setItem( 'auths', JSON.stringify( auths ) );
      localStorage.setItem( 'loggedUser', JSON.stringify({ username: user.username, password: user.password }) );
      return { ...state, user: user };

    case 'SIGN_OUT':
        localStorage.setItem( 'loggedUser', '' );
        return { ...state, user: undefined };

    default:
      return state;
  }
};

export const signInAction = ( user ) => {
  return { type: 'SIGN_IN', user: user };
};

export const signOutAction = ( user ) => {
  return { type: 'SIGN_OUT' };
};

export const signUpAction = ( username, password ) => {
  const user = { username: username, password: password };
  return { type: 'SIGN_UP', user: user };
};