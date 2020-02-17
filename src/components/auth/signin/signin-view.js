import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Button, Elevation, FormGroup, InputGroup, Callout } from "@blueprintjs/core";
import { redirect } from '../../../store/route';
import { signInAction } from '../../../store/auth';
import { SigninViewBackground } from '../../../assets/images';

const bgstyle = { display: 'flex', width: '100vw', height: '100vh', backgroundSize: 'contain', backgroundImage: `url(${ SigninViewBackground })` }

export default function SigninView() {
  const dispatch = useDispatch();
  const loggedUser = useSelector( state => state.authReducer.user );
  const error = useSelector( state => state.authReducer.error );
  const [validated, setValidated] = React.useState( false );
  const [username, setUsername] = useState( '' );
  const [password, setPassword] = useState( '' );

  if( loggedUser ) dispatch( redirect( 'product' ) );

  const handleSubmit = ( event ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const invalid = !form.checkValidity();

    if( !invalid ) {
      dispatch( signInAction( username, password ) );
    }

    setValidated( true );
  };

  return (
    <div style={ bgstyle }>
      <Card elevation={Elevation.ONE} style={{ width: '350px', margin: 'auto' }}>
        <div>Welcome to E-commerce</div>

        { error ? <Callout intent="warning">{ error }</Callout> : null }

        <form noValidate onSubmit={ handleSubmit }>
          <FormGroup labelFor="username-input" label="Username" labelInfo="(required)" intent="danger" helperText={ validated && !username ? 'This field is required' : ''  }>
            <InputGroup id="username-input" leftIcon="user" placeholder="Username" value={ username } onChange={ event => setUsername( event.target.value ) } required />
          </FormGroup>

          <FormGroup labelFor="password-input" label="Password" labelInfo="(required)" intent="danger" helperText={ validated && !password ? 'This field is required' : ''  }>
            <InputGroup id="password-input" leftIcon="lock" placeholder="Password" type="password" value={ password } onChange={ event => setPassword( event.target.value ) } required />
          </FormGroup>

          <Button type="submit" text="Sign in" />
        </form>


        <Button text="Signup" onClick={ () => dispatch( redirect( 'signup' ) ) } />
        <Button text="Recover" onClick={ () => dispatch( redirect( 'recover' ) ) } />
      </Card>
    </div>
  );
}
