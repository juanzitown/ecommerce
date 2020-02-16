import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from "@blueprintjs/core";
import { redirect } from '../../../store/route';

export default function SignupView() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>Signup View</div>

      <Button text="Login" onClick={ () => dispatch( redirect( 'login' ) ) } />
      <Button text="Recover" onClick={ () => dispatch( redirect( 'recover' ) ) } />
    </div>
  );
}
