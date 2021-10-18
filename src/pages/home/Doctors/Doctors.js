import React from 'react';
import img from '../../../images/doctors/doctor-1.jpg'
const Doctors = () => {
    return (
        <div id="doctors">
            <h1 className="text-center my-4">Our Doctors </h1>
            <img width="500" src={img} alt="" />
        </div>
    );
};

export default Doctors;