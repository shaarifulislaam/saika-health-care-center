import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import img from '../../../images/doctors/doctor-1.jpg'
import Doctor from '../doctor/Doctor';
const Doctors = () => {
    const [doctors , setDoctors] = useState([]);
    useEffect(()=>{
fetch('./doctors.json')
.then(res => res.json())
.then(data => setDoctors(data))
    },[])
    return (
        <div id="doctors">
            <h1 className="text-center my-4">Our Doctors </h1>
           
           <Row xs={1} md={2} xl={3} className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0">
           {
               doctors.map(doctor => <Doctor
               key={doctor.id}
               doctor={doctor}
               ></Doctor>)
           }
          
        </Row>
           
        </div>
    );
};

export default Doctors;