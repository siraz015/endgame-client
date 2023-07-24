import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddAdmission = () => {
    const college = useLoaderData();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const birthday = form.birthday.value;
        const file = form.file.value;

        const admissionInfo = {
            college_name: college.college_name,
            name,
            subject,
            email,
            number,
            address,
            birthday
        };

        fetch('https://endgame-task-server-chi.vercel.app/admissionData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admissionInfo)
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Info has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })


    }

    return (
        <div className="container mx-auto px-4 md:px-10 xl:px-20 py-10">

            <div className='max-w-[700px] mx-auto'>
                <div className='text-center font-semibold text-4xl mb-5'>
                    {
                        college.college_name
                    }
                </div>
                <h2 className='text-center font-semibold text-3xl mb-8 text-red-500'>Please fill out the form for admission</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <input type="text" placeholder="Candidate Name" name='name' className="input input-bordered input-accent w-full " />
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Subject" name='subject' className="input input-bordered input-accent w-full" />
                        <input type="text" placeholder="Email" name='email' className="input input-bordered input-accent w-full" />
                    </div>
                    <div className='flex gap-5'>
                        <input type="text" placeholder="Phone Number" name='number' className="input input-bordered input-accent w-full" />
                        <input type="text" placeholder="Address" name='address' className="input input-bordered input-accent w-full" />
                    </div>
                    <div className='flex gap-5 items-center'>
                        <input type="text" placeholder="Date of birth" name='birthday' className="input input-bordered input-accent w-full" />
                        <input type="file" name='file' className=" input-accent w-full" />
                    </div>
                    <input type="submit" value="Submit" className='btn btn-primary' />
                </form>
            </div>

        </div>
    );
};

export default AddAdmission;