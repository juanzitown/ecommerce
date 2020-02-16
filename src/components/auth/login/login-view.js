import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Card, Button, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
import { redirect } from '../../../store/route';
import { LoginViewBackground } from '../../../assets/images';

const bgstyle = { display: 'flex', width: '100vw', height: '100vh', backgroundSize: 'contain', backgroundImage: `url(${ LoginViewBackground })` }

export default function LoginView() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState( '' );
  const [password, setPassword] = useState( '' );

  return (
    <div style={ bgstyle }>
      <Card elevation={Elevation.ONE} style={{ width: '350px', margin: 'auto' }}>
        <div>E-commerce</div>

        <FormGroup helperText="Helper text with details...">
          <InputGroup id="username-input" leftIcon="user" placeholder="Username" value={ username } onChange={ event => setUsername( event.target.value ) } />
        </FormGroup>

        <FormGroup helperText="Helper text with details...">
          <InputGroup id="password-input" leftIcon="lock" placeholder="Password" type="password" value={ password } onChange={ event => setPassword( event.target.value ) } />
        </FormGroup>


        <Button text="Product" onClick={ () => dispatch( redirect( 'product' ) ) } />
        <Button text="Signup" onClick={ () => dispatch( redirect( 'signup' ) ) } />
        <Button text="Recover" onClick={ () => dispatch( redirect( 'recover' ) ) } />
      </Card>
    </div>
  );
}
