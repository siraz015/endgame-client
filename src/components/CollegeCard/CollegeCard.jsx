import { useEffect, useState } from "react";
import SingleCollege from "./SingleCollege";

const CollegeCard = () => {
    const [collegeData, setCollegeData] = useState();

    useEffect(() => {
        fetch('https://endgame-task-server-chi.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setCollegeData(data))
    }, [])

    return (
        <div>
            <div className="container mx-auto px-4 md:px-10 xl:px-20 mt-8">
                <h2 className="text-center font-bold text-3xl md:text-4xl xl:text-5xl mb-10">Popular College for Admission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        collegeData?.slice(0, 3).map(collegeItem => <SingleCollege key={collegeItem._id} collegeItem={collegeItem}></SingleCollege>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;