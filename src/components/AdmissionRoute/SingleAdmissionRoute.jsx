import React from 'react';
import { Link } from 'react-router-dom';

const SingleAdmissionRoute = ({ itemcollege }) => {

    return (
        <div>
            <Link to={`/addAdmission/${itemcollege._id}`}>
                <div className='hover:bg-slate-200 rounded'>
                    <div className='xl:w-2/3 mx-auto'>
                        <p className='py-3 px-5 md:ml-5 xl:ml-10 text-lg md:text-3xl xl:text-4xl font-semibold text-gray-600'>{itemcollege.college_name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleAdmissionRoute;