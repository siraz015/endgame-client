import React from 'react';

const MyCollegeDetails = ({item}) => {

    return (
        <div className="container mx-auto px-4 md:px-10 xl:px-20 my-10">

            <div>
                <h3 className='text-center font-semibold text-4xl'>{item.college_name}</h3>
                <div className='text-center text-2xl mt-5'>
                    <p className='border py-1'>Subject Name: {item.subject}</p>
                    <p className='border py-1'>Email: {item.email}</p>
                    <p className='border py-1'>Phone Number: {item.number}</p>
                    <p className='border py-1'>Birthday: {item.birthday}</p>
                    <p className='border py-1'>{item.address}</p>
                </div>
            </div>

        </div>
    );
};

export default MyCollegeDetails;