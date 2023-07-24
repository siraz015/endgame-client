import { useEffect, useState } from "react";
import SingleCollege from "../CollegeCard/SingleCollege";
import SingleCollegeRoute from "./SingleCollegeRoute";

const CollegeRoute = () => {
    const [collegeData, setCollegeData] = useState();

    useEffect(() => {
        fetch('https://endgame-task-server-chi.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setCollegeData(data))
    }, [])

    return (
        <div>
            <div className="container mx-auto px-4 md:px-10 xl:px-20 my-10">
                <h2 className="text-center font-bold text-5xl mb-8">All Colleges for Admission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        collegeData?.map(collegeItem => <SingleCollegeRoute key={collegeItem._id} collegeItem={collegeItem}></SingleCollegeRoute>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CollegeRoute;