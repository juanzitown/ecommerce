import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from "@blueprintjs/core";
import { redirect } from '../../../store/route';

export default function RecoverView() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>Recover View</div>

      <Button text="Login" onClick={ () => dispatch( redirect( 'login' ) ) } />
      <Button text="Signup" onClick={ () => dispatch( redirect( 'signup' ) ) } />
    </div>
  );
}
