//edit//view
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './list.css';

export default function ViewTurfAdmin() {
    const [users, setusers] = useState([]);
    const user="user";
    
    const fetchData = async () => {
        const result = await Axios.get(`http://localhost:8080/admin/turfs`);
        console.log(result.data); 
        setusers(result.data);
    }

    const deleteUser = async turfId => {
        await Axios.delete(`http://localhost:8080/admin/turf/${turfId}`);
        //loadUsers();
        alert(`${turfId} is deleted`)
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1 class="display-6 text-center text-white mb-4">Turf List</h1>
            <React.Fragment>
                        <div>
                            {users.length > 0 ?
                                <table className="jumbotron table shadow-lg table-dark table-striped tb">
                                    <thead>
                                        <tr>
                                        <th>Turf Id</th>
                                            <th>Turf Name</th>
                                            <th>Turf Address</th>
                                            <th>Turf Description</th>
                                            <th>Amount</th>
                                            <th>Action</th>
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
                                                    <td>{user.turfAmount}</td>
                                                    <td>                      
                                               
                                                <Link     
                                                    class="btn btn-danger"                                               
                                                    onClick={() => {
                                                        const confirmBox = window.confirm(
                                                            "Do you really want to delete this record?"
                                                        )
                                                        if (confirmBox === true) {
                                                            deleteUser(user.turfId)                               
                                                        }
                                                    }}
                                                    to={`/turflist/${user.turfId}`}                                             
                                                >
                                                    Delete
                                                </Link>

                                            </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1 class="display-6 text-center text-white mb-4">No Turf List is Available!</h1>
                            }</div>
                            <Link className="btn btn-primary btn-dark mb-4 tb" to="/profile/admin">
                                Back  
                            </Link> &nbsp; &nbsp; &nbsp;
                
            </React.Fragment>
        </div>
    )
}
