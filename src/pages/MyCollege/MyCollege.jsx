import React, { useEffect, useState } from 'react';
import MyCollegeDetails from './MyCollegeDetails';

const MyCollege = () => {
    const [myCollege, setMyCollege] = useState();

    useEffect(() => {
        fetch('https://endgame-task-server-chi.vercel.app/mycollege')
            .then(res => res.json())
            .then(data => setMyCollege(data))
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {
                myCollege?.map(item => <MyCollegeDetails  key={myCollege._id} item={item}></MyCollegeDetails>)
            }
        </div>
    );
};

export default MyCollege;