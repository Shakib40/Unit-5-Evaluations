import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';

import {
    adminSignIn,
    adminLogin,
    loginSuccess,

} from '../Features/Admin/action';

import { addJobs } from '../Features/Jobs/action';

const AdminForm = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const dispatch = useDispatch();

    const handleAdd = () => {

        fetch("http://localhost:3001/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    id: uuid(),
                    username: username,
                    email: email,
                    password: password,
                    status: false,
                }),
        })
            .then((data) => {
                data.json()
            })

            .then((res) => {
                dispatch(adminSignIn(res))
            })

            .catch((err) => {
                console.log("error", err);
            })
    }

    async function handleLogin() {

        fetch("http://localhost:3001/admin")
            .then(res => res.json())
            .then((out) => dispatch(loginSuccess(user)))
            .catch(err => console.log(err))
    }


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

    const [comapanyName, setCompany] = useState("");
    const [jobstitle, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");



    const handleAddJob = () => {

        fetch("http://localhost:3001/companyJob", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    id: uuid(),
                    companyname: comapanyName,
                    jobtitle: jobstitle,
                    salary: salary,
                    description: description,
                    location: location,
                    status: false,
                }),
        })
            .then((data) => {
                data.json()
            })

            .then((res) => {
                dispatch(addJobs(res))
            })

            .catch((err) => {
                console.log("error", err);
            })
    }

    return (
        <section>
            {token ? null :
                <div>
                    <h2>Admin Sign in</h2>
                    <input value={username} type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Comapny Name" /><br />

                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Set Email" /><br />

                    <input value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Set Password" /><br />


                    <button onClick={handleAdd}>Add</button>

                </div>
            }

            <div>
                <h2>Admin Login</h2>
                <input value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Username" /><br />

                <input value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password" /><br />

                <button onClick={handleLogin}>Login</button>

            </div>

            <hr />

            {
                token ? <div>
                    <h2>Add Jobs</h2>
                    <input value={comapanyName} type="text"
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Comapny Name" /><br />

                    <input value={jobstitle}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Job Title" /><br />

                    <input value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Salary" /><br />

                    <input value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description" /><br />

                    <input value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location" /><br />

                    <button onClick={handleAddJob}>Add</button>

                </div> : null
            }

        </section>

    )
}

export { AdminForm }
