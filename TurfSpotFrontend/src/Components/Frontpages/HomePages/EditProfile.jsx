import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { useState } from 'react';



function EditProfile(props) {

    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [gender, setgender] = useState("");
    const [profession, setprofession] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [edit, setedit] = useState(false);

    const loginState = useSelector(state => state.loginState);
    const {user}  = loginState;


    const editClickHandler = async () => {
        const result = await Axios.put(`http://localhost:8080/api/unauthuser/edit`,
            { email, name, mobileNo, gender, profession, address: { city, state, pincode } });
        setedit(true);
        props.history.push("/profile/home");
        console.log(result);
    }
    const fetchData = async () => {
        const email= user.email;
        const result = await Axios.get(`http://localhost:8080/api/unauthuser/getuser/${email}`);
        const userData = result.data;
        setemail(userData.email);
        setname(userData.name);
        setmobileNo(userData.mobileNo);
        setgender(userData.gender);
        setprofession(userData.profession);
        setcity(userData.address.city);
        setstate(userData.address.state);
        setpincode(userData.address.pincode);

    }
    useEffect(() => {
        if (loginState) {
            
            fetchData();
        } else {
            props.history.push("/login");
        }

    }, [loginState]);


    return (

        
        <div class="container rounded bg-white mt-5 mb-5 form-group">

            <div class="row ">

                <div class="col-md-4 border-right ">
                </div>
                <div class="col-md-5 border-right border border-danger text-danger">

                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <h2 class="text-right text-dark font-weight-bold">Profile Settings</h2>

                        </div>
                        
                        <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter Email ID"
                            disabled={true} onChange={e => setemail(e.target.value)} value={email}
                        /></div>
                            
                                <div class="col-md-12"><label class="labels">Full Name</label><input type="text" class="form-control" placeholder="Full name"
                                    onChange={e => setname(e.target.value)} value={name}
                                /></div>
                            

                            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter Mobile Number"
                                onChange={e => setmobileNo(e.target.value)} value={mobileNo}
                            /></div>

                            <div class="col-md-12"><label class="labels">Gender</label><input type="text" class="form-control" placeholder="enter Gender"
                                onChange={e => setgender(e.target.value)} value={gender}
                            /></div>
                            <div class="col-md-12"><label class="labels"> Profession</label><input type="text" class="form-control" placeholder="Enter Profession"
                                onChange={e => setprofession(e.target.value)} value={profession}
                            /></div>

                            <div class="col-md-12"><label class="labels">City</label><input type="text" class="form-control" placeholder="Enter City"
                                onChange={e => setcity(e.target.value)} value={city}
                            /></div>
                            <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="Enter State"
                                onChange={e => setstate(e.target.value)} value={state}
                            /></div>
                            <div class="col-md-12"><label class="labels">Pincode</label><input type="text" class="form-control" placeholder="Enter Pincode"
                                onChange={e => setpincode(e.target.value)} value={pincode}
                            /></div>
                        </div>

                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={editClickHandler}>Save Profile</button></div>
                    </div>
                </div>

            </div>
        </div>





    )

}
export default EditProfile;



