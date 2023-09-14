import React from 'react';


function ViewProfileUser() {
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
                                <div class="col-md-12"><label class="labels">Full Name</label><input type="text" class="form-control" placeholder="Full name" value="" /></div>
                               
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value="" /></div>
                                <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value="" /></div>
                                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" /></div>
                            <div class="col-md-12"><label class="labels">Old Password</label><input type="text" class="form-control" placeholder="Old Password" value="" /></div>
                            <div class="col-md-12"><label class="labels">New Password</label><input type="text" class="form-control" placeholder="New Password" value="" /></div>
                            </div>
                            
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>

                </div>
            </div>
           

       


        )

    }
    export default ViewProfileUser;

