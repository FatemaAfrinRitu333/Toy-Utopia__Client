import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../../assets/logo.png';
import { AiOutlineSend } from 'react-icons/ai';


AOS.init();

const Banner = () => {
    return (
        <div data-aos="zoom-in-up">
            <div className="hero" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=740&t=st=1684579314~exp=1684579914~hmac=d435b333158d808e46cb9e1156a3941db02532e1caa5be26a147838c2da59466")`, backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:w-2/3 text-white bg-gradient-to-b from-neutral/70 to-accent/60 rounded-md p-9">
                        <h2 className='text-5xl font-bold font-mono'>
                            TOY UTOPIA
                        </h2>
                        <h1 className="mb-5 text-4xl font-bold font-mono">Everything is Fun</h1>
                        <p className="mb-5 font-mono">Get ready for a world of fun and active adventures with our fantastic selection of kids' sports toys. From colorful soccer balls to pint-sized basketball hoops, we have everything your little athletes need to ignite their imagination and get moving. Our toys are designed to promote healthy activity, improve coordination, and create endless hours of entertainment. Join us as we embark on a journey of active play, skill development, and boundless joy.</p>
                        <div className='flex items-center justify-center'>
                            <input type="text" className='input rounded-r-sm text-black' placeholder='Subscribe to our newsletter' />
                            <button className="btn btn-primary rounded-l-sm"> <AiOutlineSend /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;