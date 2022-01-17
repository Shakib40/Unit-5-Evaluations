import React from 'react';

import { AuthContext } from '../Context/AuthContext';

export const Login = () => {

    const { handleLogin } = React.useContext(AuthContext);

    const [form, setForm] = React.useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        const token = Date.now() + form.username;
        handleLogin(true, token, form.username);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={handleChange} type="text" name="username" placeholder="Username" />
                <input onChange={handleChange} type="text" name="password" placeholder="Password" />
                <input value="submit" type="submit" />
            </form>
        </div>
    )
};