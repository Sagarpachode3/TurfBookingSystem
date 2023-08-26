//edit//view
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

export default function ViewTurf() {
    const [users, setusers] = useState([]);
    const user="user";
     const fetchData = async () => {
         const result = await Axios.get(`http://localhost:8080/turf/availableturfs`);
        console.log(result.data);
         setusers(result.data);
    }
//
    const deleteUser = async turfId => {
        await Axios.delete(`http://localhost:8080/turf/${turfId}`);
        //loadUsers();
        fetchData();
      };
    useEffect(() => {

        fetchData();
    }, [])
    return (
        <div>

            <h1>Turf List</h1>
            <React.Fragment>

                        <div>
                            {users.length > 0 ?
                                <table className=" jumbotron table table-bordered shadow-lg m-5">
                                    <thead>
                                        <tr>
                                        <th>Turf Id</th>
                                            <th>Turf Name</th>
                                            <th>Turf Address</th>
                                            <th>Turf Description</th>
                                            <th>Action</th>

                                            {/* <th>Manager Id</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user) => (
                                                <tr key={user.turfId}>
                                                    <td>{user.turfId}</td>
                                                    <td>{user.turfName}</td>
                                                    <td>{user.turfAdd}</td>
                                                    <td>{user.turfType}</td>
                                                    {/* <td>{user.managerId}</td> */}
                                                    <td>
                                               
                                                <Link
                                                    class="btn btn-outline-primary mr-2"
                                                    to={`/turf/edit/${user.turfId}`}
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    class="btn btn-danger"
                                                    onClick={() => deleteUser(user.turfId)}
                                                   to={`/profile/admin/${user.turfId}`}
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1>No Turf List is Available</h1>
                            }</div>
                
            </React.Fragment>
        </div>
    )
}
