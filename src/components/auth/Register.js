import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, useActionData, useNavigate } from 'react-router-dom';
import '../../core/firebase';
import { setUser } from '../../core/redux/slice/userSlice';

const Register = () => {
  let registerData = useActionData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error,setError] = useState();
  
  // signup function
  async function signup(email, password, username) {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      // update profile
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      const user = auth.currentUser;
      dispatch(setUser(user))
      setError("");
      navigate('/recipe-list');
    } catch (error) {
      setError( error.message );
    }

  }
  

  useEffect(() => {
    if( registerData !== undefined ) {
      signup( registerData.email,registerData.password,registerData.name )
    }
    return () => {
      registerData = undefined;
    }
  }, [registerData])
  
  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-image">
            <figure><img src="images/signup-image.jpg" alt="" /></figure>
          </div>
          <div className="signup-form signin-form">
            <h2 className="form-title">Sign up</h2>
            { error }
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
              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
              </div>
            </Form>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Register