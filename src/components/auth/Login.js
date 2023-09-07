import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Link, useActionData } from 'react-router-dom';
import '../../core/firebase';
import { setUser } from '../../core/redux/slice/userSlice';

const Login = () => {
  let loginData = useActionData();
  const dispatch = useDispatch();
  // login function
  async function login(email, password) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    console.log('user',user);
    dispatch(setUser(user))
  }

  useEffect(() => {
    if( loginData !== undefined ) {
      login( loginData.email,loginData.password )
    }
    return () => {
      loginData = undefined;
    }
  }, [loginData])
  
  return (
    <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure><img src="images/signin-image.jpg" alt="" /></figure>
            <Link to={'/register'} className="signup-image-link">Create an account</Link>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Sign up</h2>
            <Form method="POST" action="/login" className="register-form" id="login-form">
              <div className="form-group">
                <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name" /></label>
                <input type="text" name="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password"><i className="zmdi zmdi-lock" /></label>
                <input type="password" name="password" id="password" placeholder="Password" />
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" />
              </div>
            </Form>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Login