import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../../../Providers/AuthProvider'
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from 'sweetalert2';
import useTitle from "../../../Hooks/WebTitle";


const Login = () => {
    useTitle('Toy Utopia | Login');

    // const [error, setError] = useState('');
    const { UserLogIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        UserLogIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire(
                    'Success!',
                    'You are successfully logged In!!',
                    'success'
                  )
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error: ' ,error.message)
                if(error.message === 'Firebase: Error (auth/user-not-found).'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `User not registered. Please <a href='/'>register</a> first!`,
                    })
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.message}`,
                    })
                }
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d")`, backgroundSize: 'contain' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-4/5 md:w-4/6">
                <div className="card w-4/5 shadow-2xl bg-accent bg-opacity-70">
                    <form onSubmit={handleLogin} className="card-body w-full">
                        <h2 className='text-4xl my-4 text-primary font-bold font-mono flex items-center justify-center gap-2'> <AiOutlineLogin /> Login Here</h2>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-mono">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-mono">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </form>
                    <p className="mb-10"><small className="text-black">Don't have an account? <Link className="text-primary" to='/register'>Register Here</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;