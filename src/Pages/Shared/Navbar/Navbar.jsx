import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AiOutlineLogout, AiOutlineUserAdd, AiOutlineSetting, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { IoCreateOutline } from 'react-icons/io5';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Success!',
                    'User successfully logged Out!!',
                    'success'
                )
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }

    const Menu =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allToys'>All Toys</Link></li>
            {user &&
                <>
                    <li><Link to='/allToys'>My Toys</Link></li>
                    <li><Link to='/addToy'>Add A Toy</Link></li>
                </>

            }
            <li><Link to='/blog'>Blog</Link></li>
        </>

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:text-neutral-content text-primary">
                        {Menu}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl flex gap-1 items-center">
                    <img className='w-10' src={logo} alt="" />
                    <span className='font-bold font-mono'>Toy Utopia</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li> */}
                    {Menu}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div className="tooltip tooltip-left" data-tip={user?.displayName ? user.displayName : 'User Profile'}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ?
                                        <img src={user.photoURL} />
                                        :
                                        <AiOutlineUserAdd className='text-3xl text-secondary' />
                                }
                            </div>
                        </label>
                    </div>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-primary">
                        {user ?

                            <>
                                <li><a><AiOutlineUser /> Profile</a></li>
                                <li><a><AiOutlineSetting /> Settings</a></li>
                                <li onClick={handleLogOut}><a><AiOutlineLogout /> Logout</a></li>
                            </>
                            :
                            <>
                                <li><Link to='/login'><AiOutlineLogin /> Log In</Link></li>
                                <small className='divider m-0'>Or</small>
                                <li><Link to='/register'><IoCreateOutline /> Register</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;