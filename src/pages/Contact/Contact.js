import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="row container ">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mt-5">
            <h3 className="text-secondary">Saika Health Care Center , Motobi.</h3>
            <p>
            xyz-1200 Dhaka Dhaka-1209 +88 02 0000115270-2, +88
              99 481114040-1, +88 18 12314-2, +88 33 77-5, +88 66
              88111231
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div>
            <h2>Location Map</h2>
           <div className="pe-lg-0 pe-md-0  pe-5">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8682.211006717662!2d90.36759455731124!3d23.80365757355116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634640638080!5m2!1sen!2sbd"
              
              style={{ width: "600px", height: "400px", style: "border:0;" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
