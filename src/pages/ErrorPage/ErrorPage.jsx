import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center flex-col items-center mt-5'>

            <img className='max-w-2xl flex' src="error.png" alt="" />
            <Link to="/"><button className='btn btn-primary'>Back to Home</button></Link>

        </div>
    );
};

export default ErrorPage;