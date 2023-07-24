import React from 'react';
import { Link } from 'react-router-dom';
import './ResearchPaper.css';

const ResearchPaper = () => {
    return (
        <div className="container mx-auto px-4 md:px-10 xl:px-20">
            <h2 className='text-center font-semibold text-2xl md:text-4xl xl:text-5xl mb-8'>Here Some Research Paper Links</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[200px] w-full' src="https://i.ibb.co/VpD7vq1/res1.jpg" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">CHEMISTRY AND BIOCHEMISTRY Research Paper</h2>
                        <div className="card-actions justify-center">
                            <Link to='https://scholarworks.uni.edu/che/' target='_blank'><button className="btn btn-secondary">Click to View full Research</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[200px] w-full' src="https://i.ibb.co/ftzcYhW/res2.jpg" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">COMMUNICATION SCIENCES AND DISORDERS Research Paper</h2>
                        <div className="card-actions justify-center">
                            <Link to='https://scholarworks.uni.edu/cds/' target='_blank'><button className="btn btn-secondary">Click to View full Research</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[200px] w-full' src="https://i.ibb.co/b6T84RJ/res3.jpg" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">HEALTH, RECREATION, AND COMMUNITY SERVICES Research Paper</h2>
                        <div className="card-actions justify-center">
                            <Link to='https://scholarworks.uni.edu/hrc/' target='_blank'><button className="btn btn-secondary">Click to View full Research</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchPaper;