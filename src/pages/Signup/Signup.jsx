import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";


const Signup = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });

                updateUserProfile(name)
                    .then()
                    .catch()

            })
            .catch(error => {
                console.log(error.message)
            })
        form.reset()
        navigate('/')
    }


    return (
        <>
            <div className="max-w-lg mx-auto">
                <div className="my-10">
                    <h1 className="text-5xl font-bold text-center mb-8">SignUp now!</h1>
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5 mb-0">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className="ml-8"><small>Already have an account? <Link className="text-blue-600" to="/login">Login Now</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;