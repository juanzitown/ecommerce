import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from "@blueprintjs/core";
import { redirect } from '../../../store/route';

export default function RecoverView() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>Recover View</div>

      <Button text="Signin" onClick={ () => dispatch( redirect( 'signin' ) ) } />
      <Button text="Signup" onClick={ () => dispatch( redirect( 'signup' ) ) } />
    </div>
  );
}
