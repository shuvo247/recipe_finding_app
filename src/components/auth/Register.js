import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from "firebase/auth";
import React, { useState } from 'react';
import { Form, useActionData } from 'react-router-dom';
import '../../core/firebase';

const Register = () => {
  const registerData = useActionData();
  const [currentUser, setCurrentUser] = useState();
  // signup function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }
  
  if( registerData !== undefined ) {
    signup( registerData.email,registerData.password,registerData.name )
  }
  console.log('current-user',currentUser);
  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <Form method="POST" action="/register" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                <input type="text" name="name" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                <input type="email" name="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                <input type="password" name="password" id="pass" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
              </div>
            </Form>
          </div>
          <div className="signup-image">
            <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Register