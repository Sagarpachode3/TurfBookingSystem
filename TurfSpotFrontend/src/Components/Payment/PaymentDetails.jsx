//edit//view
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

export default function PaymentDetails() {
    const [users, setusers] = useState([]);
    const user="user";
     const fetchData = async () => {
         const result = await Axios.get(`http://localhost:8080/payment`);
        console.log(result.data);
         setusers(result.data);
    }
//
    useEffect(() => {

        fetchData();
    }, [])
    return (
        <div>
            <h1>Payment List</h1>
            <React.Fragment>

                        <div>
                            {users.length > 0 ?
                                <table className=" jumbotron table table-bordered shadow-lg m-5">
                                    <thead>
                                        <tr>
                                        <th>Payment Id</th>
                                            <th>Payment Date</th>
                                            <th>Payment Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user) => (
                                                <tr key={user.paymentId}>
                                                    <td>{user.paymentId}</td>
                                                    <td>{user.paymentDate}</td>
                                                    <td>{user.paymentAmount}</td>
                                                    
                                                    <td>
                                         
                                            </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1>No Payment List is Available</h1>
                            }</div>
                
            </React.Fragment>
        </div>
    )
}
