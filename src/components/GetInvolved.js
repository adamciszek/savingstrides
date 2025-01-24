import React from 'react';

const EventCard = ({ title, date, location, itemsToBring }) => (
    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-black rounded-lg shadow-2xl p-3 group flex flex-col h-full hover:bg-gray-200">
        <div className="flex-none text-center p-4">
            <h2 className="font-semibold my-4 text-2xl">{title}</h2>
            <p className="text-md font-medium mb-2">{date}</p>
            <p className="text-lg font-medium">{location}</p>
            <h4 className="font-semibold my-2">What to Bring:</h4>
            <ul className="list-disc pl-[35%] mx-auto text-left">
                {itemsToBring.map((item, index) => (
                    <li key={index} className="text-md">{item}</li>
                ))}
            </ul>
        </div>
    </div>
);


const GetInvolved = () => {
    const events = [
        {
            title: "Run for Newmarket",
            date: "October 13, 2024",
            location: "Newmarket, ON",
            itemsToBring: ["Running shoes", "Donation of used shoes"]
        },
        {
            title: "Saving Strides Shoe Drive",
            date: "November 5, 2024",
            location: "Toronto, ON",
            itemsToBring: ["Used running shoes", "Volunteer support"]
        },
        {
            title: "Annual Charity Run",
            date: "December 1, 2024",
            location: "Scarborough, ON",
            itemsToBring: ["Running gear", "Shoes for donation"]
        }
    ];

    return (
        <div className="mt-8 bg-gray-100 py-12" id="GetInvolved">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">Get Involved</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-black'></div>
                    </div>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10">
                        {events.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                date={event.date}
                                location={event.location}
                                itemsToBring={event.itemsToBring}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GetInvolved;
