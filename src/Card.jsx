import React from "react";

function card()
{
    return(
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            {/* <i class="fa fa-users fa-4x"></i> */}
                            <i class="fa fa-user-plus fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Patients</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            {/* <i class="fa fa-list fa-4x"></i> */}
                            <i class="fa fa-calendar-check fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Appointments</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          {/* <i class="fab fa-twitter fa-4x"></i> */}
                          <i class="fa fa-user-md f"></i>
                        </div>
                        <h6 class="text-uppercase">Doctors</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            {/* <i class="fa fa-share fa-4x"></i> */}
                            <i class="fa fa-regular fa-users fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Employees</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default card;