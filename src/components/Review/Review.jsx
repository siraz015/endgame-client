import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviewData, setReviewData] = useState();

    useEffect(() => {
        fetch('https://endgame-task-server-chi.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [])

    return (
        <div className="container mx-auto px-4 md:px-10 xl:px-20 py-16">
            <h2 className='font-semibold text-2xl md:text-3xl xl:text-5xl text-center mb-8'> Reviews and Feedback about Specific Colleges.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {
                    reviewData?.slice(0, 3).map(item => <SingleReview key={item._id} reviewData={item}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;