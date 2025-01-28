import React from 'react';
import img from '../images/about-shoes.JPG';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about'>
                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        {/* Adjusted the width of the image */}
                        <img alt="Saving Strides logo" className="rounded-t float-right w-full max-w-sm mx-auto" src={img} />
                    </div>
                    <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-center w-full lg:w-1/2 px-8 py-8" data-aos="zoom-in" data-aos-delay="500">
                        <h3 className="text-3xl text-black font-bold">
                            Saving Strides: Making a Difference, One Step at a Time
                        </h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>
                                At Saving Strides, our mission is to provide running shoes and other footwear to individuals and communities in need.
                            </p>
                        </div>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>
                                We partner with local run clubs across the GTA to collect gently used running shoes, supporting those who need them most.
                            </p>
                        </div>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>
                                Working together as a community for the community, we make strides toward a brighter future for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;
