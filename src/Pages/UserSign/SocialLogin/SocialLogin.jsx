import React, { useContext } from 'react';
import { GrGoogle } from 'react-icons/gr'
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Success!',
                    'You are successfully logged In!!',
                    'success'
                )
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
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-accent w-full font-mono flex items-center gap-2">
                Sign In with
                <GrGoogle className='text-primary' />
            </button>
        </div>
    );
};

export default SocialLogin;