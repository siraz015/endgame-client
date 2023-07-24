import React from 'react';
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ResearchPaper from '../../components/ResearchPaper/ResearchPaper';
import Review from '../../components/Review/Review';

const Home = () => {
    return (
        <div>
            <CollegeCard></CollegeCard>
            <ImageGallery></ImageGallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Home;