import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {

    const collegeDetails = useLoaderData();

    const { college_image, college_name, admission_dates, events, research_history, sports, _id } = collegeDetails;



    return (
        <div className="container mx-auto px-4 md:px-10 xl:px-15">
            <h3 className='text-center font-semibold text-5xl mt-10'>{college_name}</h3>
            <div className='flex flex-col md:flex-row gap-10 my-10'>
                <div className='w-full'>
                    <img src={college_image} alt="" />
                </div>
                <div className='w-full'>
                    <div className='mb-5'>
                        <div className="divider text-2xl font-semibold">Admission Dates</div>
                        <div className='text-center text-2xl'>
                            <p>Start: {admission_dates.start}</p>
                            <p>End: {admission_dates.end}</p>
                        </div>
                    </div>

                    <div>
                        <div className="divider text-2xl font-semibold">Events</div>
                        <div className='md:ml-5 xl:ml-10 grid grid-cols-2 font-semibold '>
                            <p>{events[0]}</p>
                            <p>{events[1]}</p>
                            <p>{events[2]}</p>
                            <p>{events[3]}</p>
                        </div>
                    </div>

                    <div>
                        <div className="divider text-2xl font-semibold">Research History</div>
                        <div className='md:ml-5 xl:ml-10 flex gap-10 justify-between'>
                            <p className='font-semibold'>Founded: {research_history.founded}</p>
                            <div>
                                <p className='font-semibold'>Notable Discoveries: </p>
                                <div className='ml-2 md:5 xl:ml-10'>
                                    <p>{research_history.notable_discoveries[0]}</p>
                                    <p>{research_history.notable_discoveries[1]}</p>
                                    <p>{research_history.notable_discoveries[2]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="divider text-2xl font-semibold">Sports</div>
                        <div className='md:ml-5 xl:ml-10 grid grid-cols-2 '>
                            <p>{sports[0]}</p>
                            <p>{sports[1]}</p>
                            <p>{sports[2]}</p>
                            <p>{sports[3]}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CollegeDetails;