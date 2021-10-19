import React from "react";
import details from "../../../images/doctorDetails/doctorDetails.png";
const DoctorDetails = () => {
  return (
    <div>
      <div className="row container">
        <div className="col-md-6  col-lg-8 col-12">
          <div className="mx-auto ms-5">
            <img width="500px" className="img-fluid" src={details} alt="" />
          </div>
        </div>

        <div className="col-md-6 col-lg-4 col-12">
          <div className="px-sm-5">
            <div className="mt-5 p-5">
              <h1>For Appointment </h1>
              <p>Call 24 hour</p>
              <h2><span><i class="fas fa-phone"></i> 54106</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
