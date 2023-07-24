import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navItem = [
        <li><Link className='text-base' to="/">Home</Link></li>,
        <li><Link className='text-base' to="/allColleges">College</Link></li>,
        <li><Link className='text-base' to="/admissionRoute">Admission</Link></li>,
        <li><Link className='text-base' to="/mycollege" >My College</Link></li>
    ]

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'LogOut Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch()
    }

    return (
        <div className="navbar bg-base-300 h-3">
            <div className="container mx-auto px-4 md:px-10 xl:px-15">
                <div className='navbar font-semibold text-base'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <Link to="/">
                            <h2 className="btn btn-ghost normal-case text-lg text-green-800">College Booking</h2>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </div>
                    {
                        user ? <>
                            <div className="navbar-end flex gap-5">
                                <button className='btn' onClick={handleLogOut}>Log Out</button>
                                <p className='hidden md:block'>{user?.displayName}</p>
                            </div>
                        </> : <>
                            <div className="navbar-end">
                                <Link to="/login">Login</Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;