
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import bg_1 from '../../images/bg_1.jpg';


export default function UserViewTurfList() {
    const [users, setusers] = useState([]);
    const user = "user";
    const fetchData = async () => {
        const result = await Axios.get(`http://localhost:8080/turf/availableturfs`);
        console.log(result.data);
        setusers(result.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1 class="display-6 text-center text-white mb-4">Turf List</h1>
            {
                <div className="container profile-page bg-transparent">
                    {users.length > 0 ?
                        <div>
                            {
                                users.map((user) => (
                                    <div className="row">

                                        <div className="card profile-header">
                                            <div className="body">

                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="profile-image float-md-center"> <img src={bg_1} alt="" /> </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-7 col-12">
                                                    <table className=" table">
                                                        <thead>
                                                            <tr>
                                                                <th>Turf Id</th>
                                                                <th>Turf Name</th>
                                                                <th>Turf Address</th>
                                                                <th>Turf Description</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr key={user.turfId}>
                                                                <td>{user.turfId}</td>
                                                                <td>{user.turfName}</td>
                                                                <td>{user.turfAdd}</td>
                                                                <td>{user.turfType}</td>
                                                                <td><Link class="btn btn-primary mr-2" to={`/turf/viewsingleturf/${user.turfId}`}>
                                                                View
                                                            </Link></td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>))}
                        </div>
                        : 
                        <h1 class="display-6 text-center text-white mb-4">No Turf List is Available</h1>
                    }
                </div>
            }

        </div>
        
    );
}
