import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './list.css';

export default function Userlist() {
    const [users, setusers] = useState([]);
    const user = "user";

    const fetchData = async () => {
        const result = await Axios.get("http://localhost:8080/managers/users");
        console.log(result.data);
        setusers(result.data);
    }

    const deleteUser = async userId => {
        await Axios.delete(`http://localhost:8080/managers/users/${userId}`);
        alert(`${userId} is inactive now `);
        //loadUsers();
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1 class="display-6 text-center text-white mb-4">User List</h1>
            <React.Fragment>
                <div>
                    {users.length > 0 ?
                        <table className="jumbotron table shadow-lg table-dark table-striped tb">
                            <thead>
                                <tr>
                                    <th>UserId</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>ContactNo</th>
                                    <th>EmailId</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => (
                                        <tr key={user.userId}>
                                            <td>{user.userId}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.contactNo}</td>
                                            <td>{user.emailId}</td>
                                            <td>
                                                <Link     
                                                    class="btn btn-danger"                                               
                                                    onClick={() => {
                                                        const confirmBox = window.confirm(
                                                        "Do you really want to delete this record?"
                                                        )
                                                        if (confirmBox === true) {
                                                            deleteUser(user.userId)                               
                                                        }
                                                    }}
                                                    to={`/profile/userlist/${user.userId}`}                                              
                                                >
                                                    Delete
                                                </Link>
                                                
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        : <h1 class="display-6 text-center text-white mb-4">No User List is Available!</h1>
                    }</div>
                    <Link className="btn btn-dark mb-4 tb" to="/profile/admin">
                        Back  
                    </Link> &nbsp; &nbsp; &nbsp;

            </React.Fragment>
        </div>
    )
}
