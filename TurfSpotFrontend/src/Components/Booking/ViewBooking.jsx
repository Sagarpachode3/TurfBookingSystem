import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './list.css';

export default function ViewBooking() {
    const [users, setusers] = useState([]);
    const user="user";
     const fetchData = async () => {
        const userId=localStorage.getItem("userId");
        const result = await Axios.get(`http://localhost:8080/booking/user/${userId}`);
        console.log(result.data);
        setusers(result.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1 class="display-6 text-center text-white mb-4">Booking List</h1>
            <React.Fragment>
                        <div>
                            {users.length > 0 ?
                                <table className="jumbotron table shadow-lg table-dark table-striped tb">
                                    <thead>
                                        <tr>
                                            <th>Booking Id</th>
                                            <th>Booking Date</th>  
                                            <th>Slot</th>
                                            <th>Turf Name</th>
                                            <th>Amount</th>
                                            <th>User Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user) => (
                                                <tr key={user.bookingId}>
                                                    <td>{user.bookingId}</td>
                                                    <td>{user.date}</td>
                                                    <td>{user.slot.description}</td>
                                                    <td>{user.turf.turfName}</td>
                                                    <td>{user.payment.paymentAmount}</td>
                                                    <td>{user.user.firstName}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1 class="display-6 text-center text-white mb-4">No booking List is Available</h1>
                            }
                        </div>
                        <Link className="btn btn-dark mb-4 tb" to="/profile/user">
                            Back  
                        </Link>
                
            </React.Fragment>
        </div>
    )
}
