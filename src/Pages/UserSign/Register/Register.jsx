import { IoCreateOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../../../Providers/AuthProvider'
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from 'sweetalert2';
import useTitle from "../../../Hooks/WebTitle";


const Register = () => {
    useTitle('Toy Utopia | Register');

    // const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgURL = form.imgURL.value;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser.user);
                loggedUser.user.displayName = name;
                loggedUser.user.photoURL = imgURL;

                Swal.fire(
                    'Success!',
                    'You are successfully logged In!!',
                    'success'
                )
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error: ', error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-4/5 md:w-4/6">
                <div className="card w-4/5 shadow-2xl bg-accent bg-opacity-70">
                    <form onSubmit={handleLogin} className="card-body w-full">
                        <h2 className='text-4xl my-4 text-primary font-bold font-mono flex items-center justify-center gap-2'> <IoCreateOutline /> Register Here</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-mono">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-mono">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email Address" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-mono">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-mono">Profile Photo URL</span>
                            </label>
                            <input type="link" name="imgURL" placeholder="Please Enter Profile Photo URL" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-mono">Register</button>
                        </div>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </form>
                    <p className="mb-10"><small className="text-black">Already have an account? <Link className="text-primary" to='/login'>Login Here</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;