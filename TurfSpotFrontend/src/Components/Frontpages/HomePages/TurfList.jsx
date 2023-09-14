import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

export default function TurfList() {
    const [users, setusers] = useState([]);
    const user = "user";
    const fetchData = async () => {
        const result = await Axios.get("http://localhost:8080/managers/users");
        console.log(result.data);
        setusers(result.data);
    }
    const deleteUser = async userId => {
        await Axios.delete(`http://localhost:8080/managers/users/${userId}`);
        fetchData();
      };
    useEffect(() => {

        fetchData();
    }, [])
    return (
        <div>
            <h1 class="display-6 text-center text-white mb-4">Turf List</h1>
            <h1>User List</h1>
            <React.Fragment>

                <div>
                    {users.length > 0 ?
                        <table className=" jumbotron table table-bordered shadow-lg m-5">
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
                                                    class="btn btn-outline-primary mr-2"
                                                    to={`/profile/edit/${user.userId}`}
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    class="btn btn-danger"
                                                    onClick={() => deleteUser(user.userId)}
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
                        : <h1>No User List is Available</h1>
                    }</div>

            </React.Fragment>
        </div>
    )
}
