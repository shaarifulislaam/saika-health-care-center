import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import details from "../../../images/doctorDetails/doctorDetails.png";
const DoctorDetails = () => {

  const {id} = useParams();

  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("/doctors.json")
    .then(res => res.json())
    .then(data => setData(data))
  },[]);

  const fixedItem = data.filter(dt => dt.id == id);
  console.log(fixedItem)
  return (
    
    <div>
       <h1 className="text-center mt-5">Doctors Name: {fixedItem[0]?.name}</h1>
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
              <h4><span><i class="fas fa-phone"></i> {fixedItem[0]?.phone}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
