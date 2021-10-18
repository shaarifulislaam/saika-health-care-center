import React from 'react';
import img from '../../../images/about/about us.jpg'
const About = () => {
    return (
        <div id="about">
            <h1 className="text-center my-3">About Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <p className="p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, sequi? Blanditiis fuga rerum inventore laudantium, pariatur magnam in vel temporibus. Temporibus quia modi dicta ad necessitatibus eum eos rem delectus!</p>
                </div>

                <div className="col-md-6">
                    <img width="500px" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;