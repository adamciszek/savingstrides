import React from 'react';
import homesfirst from '../images/homes-first-logo.png';
import runfor from '../images/run-for.png';
import mvm from '../images/mvm-logo.png';
import dixon from '../images/dixon-hall-logo.jpg';
import goodshepherd from '../images/good-shepherd.png';

const Partners = () => {
    return (
        <div id="partners" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">Partners</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-black'></div>
                    </div>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

                        {/* Homes First */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl p-3 group flex flex-col h-full">
                            <div className="flex-1 flex justify-center items-center">
                                <img alt="Homes First" className="rounded-t group-hover:scale-[1.50] transition duration-1000 ease-in-out max-h-[50%]" src={homesfirst} />
                            </div>
                            <div className="flex-none text-center p-4 h-30">
                                <h2 className="font-semibold my-4 text-2xl">Homes First</h2>
                                <p className="text-md font-medium">
                                    Homes First is a homeless shelter in Toronto. We collaborate with them to provide running shoes for individuals experiencing homelessness, ensuring they have access to quality footwear.
                                </p>
                            </div>
                        </div>

                        {/* Run for Newmarket and Run for Bradford */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl p-3 group flex flex-col h-full">
                            <div className="flex-1 flex justify-center items-center">
                                <img alt="Run for Newmarket and Run for Bradford" className="rounded-t group-hover:scale-[1.50] transition duration-1000 ease-in-out max-h-[50%]" src={runfor} />
                            </div>
                            <div className="flex-none text-center p-4 h-30">
                                <h2 className="font-semibold my-4 text-2xl">Run for Newmarket & Bradford</h2>
                                <p className="text-md font-medium">
                                    These community running events allowed us to collect shoe donations while bringing people together for a cause. We are grateful for the contributions from participants.
                                </p>
                            </div>
                        </div>

                        {/* Me Versus Me (MVM) */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl p-3 group flex flex-col h-full">
                            <div className="flex-1 flex justify-center items-center">
                                <img alt="Me Versus Me" className="rounded-t group-hover:scale-[1.30] transition duration-1000 ease-in-out max-h-[50%]" src={mvm} />
                            </div>
                            <div className="flex-none text-center p-4 h-30">
                                <h2 className="font-semibold my-4 text-2xl">Me Versus Me (MVM)</h2>
                                <p className="text-md font-medium">
                                    MVM is a run club dedicated to empowering individuals through fitness. They support our mission by collecting shoes within their community and promoting our cause.
                                </p>
                            </div>
                        </div>

                        {/* Placeholder for future partners */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl p-3 group flex flex-col h-full">
                            <div className="flex-1 flex justify-center items-center">
                                <img alt="Placeholder for Future Partners" className="rounded-t group-hover:scale-[1.50] transition duration-1000 ease-in-out max-h-[50%]" src={dixon} />
                            </div>
                            <div className="flex-none text-center p-4 h-30">
                                <h2 className="font-semibold my-4 text-2xl">Dixon Hall Neighbourhood Services</h2>
                                <p className="text-md font-medium">
                                    Dixon Hall supports Toronto's downtown east with housing, employment, and community services. We help by providing shoes to individuals in their programs, ensuring they have essential footwear while accessing support.
                                </p>
                            </div>
                        </div>
                        {/* Placeholder for future partners */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl p-3 group flex flex-col h-full">
                            <div className="flex-1 flex justify-center items-center">
                                <img alt="Placeholder for Future Partners" className="rounded-t group-hover:scale-[1.50] transition duration-1000 ease-in-out max-h-[50%]" src={goodshepherd} />
                            </div>
                            <div className="flex-none text-center p-4 h-30">
                                <h2 className="font-semibold my-4 text-2xl">Good Shepherd</h2>
                                <p className="text-md font-medium">
                                    Good Shepherd offers shelter and support for those facing homelessness and poverty. We assist by donating shoes, helping individuals regain stability while receiving critical services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
