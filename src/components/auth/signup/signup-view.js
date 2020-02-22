import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Card, Button, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
import { redirect } from '../../../store/route';
import { signUpAction } from '../../../store/auth';
import { SigninViewBackground } from '../../../assets/image';

const bgstyle = { display: 'flex', width: '100vw', height: '100vh', backgroundSize: 'contain', backgroundImage: `url(${ SigninViewBackground })` }

export default function SignupView() {
  const dispatch = useDispatch();
  const [validated, setValidated] = React.useState( false );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState( '' );
  const [repeatPassword, setRepeatPassword] = useState( '' );

  const handleSubmit = ( event ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const invalid = !form.checkValidity();
    const passwordMatch = password === repeatPassword;

    if( !invalid && passwordMatch ) {
      dispatch( signUpAction( username, password ) );
      dispatch( redirect( 'product-list' ) );
    }

    setValidated( true );
  };

  return (
    <div style={ bgstyle }>
      <Card elevation={Elevation.ONE} style={{ width: '350px', margin: 'auto' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>Create a new account</div>

        <form noValidate onSubmit={ handleSubmit }>
          <FormGroup labelFor="username-input" label="Username" labelInfo="(required)" intent="danger" helperText={ validated && !username ? 'This field is required' : ''  }>
            <InputGroup id="username-input" leftIcon="user" placeholder="Password" value={ username } onChange={ event => setUsername( event.target.value ) } required />
          </FormGroup>

          <FormGroup labelFor="password-input" label="Password" labelInfo="(required)" intent="danger" helperText={ validated && !password ? 'This field is required' : ''  }>
            <InputGroup id="password-input" leftIcon="lock" placeholder="Password" type="password" value={ password } onChange={ event => setPassword( event.target.value ) } required />
          </FormGroup>

          <FormGroup labelFor="password-repeat-input" label="Repeat password" labelInfo="(required)" intent="danger" helperText={ validated ? !repeatPassword ? 'This field is required' : repeatPassword !== password ? 'Password should match' : '' : ''  }>
            <InputGroup id="password-repeat-input" leftIcon="lock" placeholder="Repeat password" type="password" value={ repeatPassword } onChange={ event => setRepeatPassword( event.target.value ) } required />
          </FormGroup>

          <Button type="submit" text="Create" style={{ width: '100%', marginBottom: '24px' }} />
        </form>

        <div style={{ display: 'flex', justifyContent: 'center' }}><a onClick={ () => dispatch( redirect( 'signin' ) ) }>I already have an account</a></div>
      </Card>
    </div>
  );
}
