import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './list.css';

export default function ManagerViewTurf() {
    
    const [users, setusers] = useState([]);
    const user="user";
    const managerId=localStorage.getItem("managerId")
     const fetchData = async () => {
        const result = await Axios.get(`http://localhost:8080/turf/fetchByManagerId/${managerId}`);
        console.log(result.data);
        setusers(result.data);
    }

    const deleteTurf = async turfId => {
        await Axios.delete(`http://localhost:8080/turf/${turfId}`);
        fetchData();
      };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1 class="display-6 text-center text-white mb-4">Add Turf</h1>
            <React.Fragment>

                        <div>
                            {users.length > 0 ?
                                <table className="jumbotron table shadow-lg table-dark table-striped tb">
                                    <thead>
                                        <tr>
                                            <th>Turf Id</th>
                                            <th>Turf Name</th>
                                            <th>Turf City</th>
                                            <th>Turf Description</th>
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
                                                    <td>                                           
                                                        <Link
                                                            class="btn btn-outline-primary mr-2"
                                                            to={`/turf/edit/${user.turfId}`}
                                                        >
                                                            Edit
                                                        </Link>
                                                        
                                                        <Link     
                                                            class="btn btn-danger"                                               
                                                            onClick={() => {
                                                                const confirmBox = window.confirm(
                                                                "Do you really want to delete this record?"
                                                                )
                                                                if (confirmBox === true) {
                                                                    deleteTurf(user.turfId)                               
                                                                }
                                                            }}
                                                            to={`/viewturf/${user.turfId}`}                                              
                                                        >
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1 class="display-6 text-center text-white mb-4">No Turf List is Available</h1>
                            }
                        </div>
                        <Link className="btn btn-dark mb-4 tb" to="/profile/manager">
                            Back  
                        </Link> &nbsp; &nbsp; &nbsp;
            </React.Fragment>
        </div>
    )
}
