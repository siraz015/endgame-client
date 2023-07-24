import React from 'react';

const SingleReview = ({ reviewData }) => {

    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl h-[700px]">
                <figure><img className='w-full h-[180px]' src={reviewData.college_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{reviewData.college_name}</h2>
                    <div>
                        <div className='divider'>Review</div>
                        <p>{reviewData.review}</p>
                    </div>
                    <div>
                        <div className='divider'>Feedback</div>
                        <p>{reviewData.feedback}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleReview;