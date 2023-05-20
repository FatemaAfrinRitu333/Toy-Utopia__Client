import { Link, useRouteError } from 'react-router-dom';
import errorGif from '../../assets/404.gif';
import useTitle from '../../Hooks/WebTitle';

const Error = () => {

    useTitle('Error | 404')

    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d")`, backgroundSize: 'contain' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <img src={errorGif} className='' alt="" />
                        <h1 className="mb-5 text-5xl font-bold font-mono text-primary">OOpps!</h1>
                        <div className="mb-5 font-mono text-primary">
                            <p>Sorry, an unexpected error has occurred.</p>
                            <p className='font-bold text-2xl'>
                                <i>{error.statusText || error.message}</i>
                            </p>
                        </div>
                        <Link to='/'>
                            <button className="btn btn-primary">Go back home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;