import React from "react";
import img from "../../../images/about/about us.jpg";
const About = () => {
  return (
    <div id="about">
      <h1 className="text-center my-3">About Us</h1>
      <div className="row">
        <div className="col-md-12  col-lg-6 col-12">
          <div className="m-2 px-5">
            <h3 className="text-info ">Our Mission</h3>
            <p>
              To participate in the creation of healthier lives within the
              community. To provide healthcare services in a fiscally
              responsible manner which contribute to the physical,
              psychological, social and spiritual well being of the patients and
              community which it serves.
            </p>
          </div>
          <div className="m-2 px-5">
            <h3 className="text-info">Our Vision</h3>
            <p>
            Vision Saika Health Care Center will Create healthier communities by creatively challenging individuals to be more responsible for their personal health status. Relentlessly pursue unparalleled quality, value, patient, customer and staff satisfaction. 
            </p>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-12">
         <div className="px-sm-5">
         <img className="img-fluid" width="500px" src={img} alt="" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;
