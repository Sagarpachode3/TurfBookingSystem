//edit//view
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

export default function ViewBookingByManager() {
    
    const [users, setusers] = useState([]);
    const user="user";
     const fetchData = async () => {
        const managerId= localStorage.getItem("manager");
        const result = await Axios.get(`http://localhost:8080/booking/user/${managerId}`);
        console.log(result.data);
        setusers(result.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1 class="display-6 text-center text-white mb-4">Booking List</h1>
            <h1>Booking List</h1>
            <React.Fragment> 
                        <div>
                            {users.length > 0 ?
                                <table className=" jumbotron table table-bordered shadow-lg m-5">
                                    <thead>
                                        <tr>
                                            <th>Booking Id</th>
                                            <th>Booking Date</th>                                           
                                            <th>Slot Id</th>
                                            <th>Turf Id</th>
                                            <th>User Id</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user) => (
                                                <tr key={user.bookingId}>
                                                    <td>{user.bookingId}</td>
                                                    <td>{user.date}</td>
                                                    <td>{user.slotId}</td>
                                                    <td>{user.turfId}</td>
                                                    <td>{user.userId}</td>

                                                    {/* <td>{user.managerId}</td> */}
                                                    <td>
                                               
                                               
                                            </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1>No booking List is Available</h1>
                            }</div>
                
            </React.Fragment>
        </div>
    )
}
