import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollege = ({ collegeItem }) => {
    const { college_image, college_name, admission_dates, events, research_history, sports, _id } = collegeItem;


    return (
        <div>
            <div className="card card-compact max-w-96 bg-base-100 shadow-lg mx-auto">
                <figure><img className='h-[260px] w-full' src={college_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                    <div>
                        <div className="divider text-lg font-semibold">Admission Dates</div>
                        <p>Start: {admission_dates.start}</p>
                        <p>End: {admission_dates.end}</p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Events --</h3>
                        <div className='md:ml-5 xl:ml-10'>
                            <p>{events[0]}</p>
                            <p>{events[1]}</p>
                            <p>{events[2]}</p>
                            <p>{events[3]}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Research History--</h3>
                        <div className='md:ml-5 xl:ml-10'>
                            <p className='font-semibold'>Founded: {research_history.founded}</p>
                            <p className='font-semibold'>Notable Discoveries: </p>
                            <div className='ml-2 md:5 xl:ml-10'>
                                <p>{research_history.notable_discoveries[0]}</p>
                                <p>{research_history.notable_discoveries[1]}</p>
                                <p>{research_history.notable_discoveries[2]}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Sports--</h3>
                        <div className='md:ml-5 xl:ml-10 grid grid-cols-2 '>
                            <p>{sports[0]}</p>
                            <p>{sports[1]}</p>
                            <p>{sports[2]}</p>
                            <p>{sports[3]}</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Link to={`/collegeDetails/${_id}`}><button className="btn btn-secondary w-full">Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCollege;