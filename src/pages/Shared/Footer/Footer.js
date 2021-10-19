import React from 'react';
import logo from '../../../images/logo/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark mt-3 text-white">



<div className="row container">
        <div className="col-md-12  col-lg-4 col-12">
       <div>
       <img className="img fluid my-3" src={logo} alt="" />
              <p>To serve the humanity as a whole with this noble vision the Saika Health Care Center started its journey in January 2021</p>
            </div>
            <div>
              <p>Address: xyz-1200 Dhaka</p>
              <p>Hotline: 64-4444555</p>
              <p>info : info@shhc.com</p>
       </div>
        </div>

        <div className="col-md-12 col-lg-4 col-12">
         <div className="px-sm-5">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, illum possimus! Quidem, molestias nulla autem est modi culpa quo consectetur illum quod delectus repellat dicta, magnam quam nesciunt molestiae maiores?</p>
         </div>
        </div>

        <div className="col-md-12 col-lg-4 col-12">
         <div className="px-sm-5">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, illum possimus! Quidem, molestias nulla autem est modi culpa quo consectetur illum quod delectus repellat dicta, magnam quam nesciunt molestiae maiores?</p>
         </div>
        </div>
      </div>
         
       
        </div>
    );
};

export default Footer;