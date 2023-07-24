import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    



    return (
        <>
            <div className="min-h-screen bg-base-200">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-5xl font-bold text-center mb-8 pt-5">Please Login!</h1>
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <label className="label">
                                    <a href="#">Forget Password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="ml-8"><small>New Here? <Link className="text-blue-600" to="/signup">Create a New Account</Link> </small></p>
                        <SocialLogin ></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;