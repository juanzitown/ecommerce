import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from "@blueprintjs/core";
import { redirect } from '../../../store/route';

export default function LoginView() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>Login View</div>

      <Button text="Product" onClick={ () => dispatch( redirect( 'product' ) ) } />
      <Button text="Signup" onClick={ () => dispatch( redirect( 'signup' ) ) } />
      <Button text="Recover" onClick={ () => dispatch( redirect( 'recover' ) ) } />
    </div>
  );
}
