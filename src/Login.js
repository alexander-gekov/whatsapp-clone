import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
  const [{ }, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      }
      ).catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
        <div>Built by A.Gekov</div>
      </div>
    </div>
  )
}

export default Login
