import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React from 'react';
import { AuthContext } from '../Context/AuthContext';

import {
    adminLogout

} from '../Features/Admin/action';


export const Navbar = () => {
    const dispatch = useDispatch();

    //handleLogin for ContextAPI
    const { username, isAuth, handleLogin } = React.useContext(AuthContext);

    const { token } = useSelector((state) => ({
        token: state.adminState.token,
    }), function (prev, cur) {
        if (prev.token === cur.token) {
            return true;
        }
        else {
            return false;
        }

    });


    const logoutAdmin = () => {
        // handleLogin(false, "", "");
        dispatch(adminLogout(""));
    }

    const logoutUser = () => {
        handleLogin(false, "", "");
    }

    return (
        <div className="Navbar">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            {token ?
                <a onClick={logoutAdmin}>Logout({token})</a> :
                <Link to="/admin-form">AdminLogin</Link>
            }
            {isAuth ?
                <a onClick={logoutUser}>Logout({username})</a> :
                <Link to="/user-form">UserLogin</Link>
            }

        </div>

    )
}
