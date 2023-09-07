import {
    getAuth,
    signOut
} from "firebase/auth";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { clearUser } from "../../core/redux/slice/userSlice";
const Header = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const handleLogout = () =>  {
        const auth = getAuth();
        signOut(auth);
        dispatch(clearUser())
    }
  return (
    <div className="header-wrapper">
        <div className="container">
            <div className='header'>
                <div className="menu">
                    <ul>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        { user?.displayName ? <li><Link to={'/add-recipe'}>Add Recipe</Link></li> : '' }
                    </ul>
                </div>
                <div className='user'>
                    <ul>
                        { user?.displayName ? <li> Name : { user?.displayName } </li> : '' }
                        { user?.displayName ? <li className='logout'><button  onClick={ handleLogout }>Logout</button></li> : '' }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header