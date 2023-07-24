import React, { useEffect, useState } from 'react';
import SingleAdmissionRoute from './SingleAdmissionRoute';

const AdmissionRoute = () => {
    const [collegeData, setCollegeData] = useState();

    useEffect(() => {
        fetch('https://endgame-task-server-chi.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setCollegeData(data))
    }, [])

    return (
        <div className="container mx-auto px-4 md:px-10 xl:px-20">
            <h2 className='text-center my-5 text-2xl md:text-3xl xl:text-5xl font-semibold border-b-2 pb-4 w-1/2 mx-auto'>Admission Open Colleges</h2>
            {
                collegeData?.map(itemcollege => <SingleAdmissionRoute key={itemcollege._id} itemcollege={itemcollege}></SingleAdmissionRoute>)
            }

        </div>
    );
};

export default AdmissionRoute;