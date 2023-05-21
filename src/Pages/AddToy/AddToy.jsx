import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../UserSign/SocialLogin/SocialLogin';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaBasketballBall } from 'react-icons/fa';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import useTitle from '../../Hooks/WebTitle';

const AddToy = () => {

    useTitle('Toy Utopia | Add A Toy');

    const handleAddToy = (e) => {
        e.preventDefault();

        const form = e.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const imgURL = form.imgURL.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const newToy = {
            sellerName,
            sellerEmail,
            toyName,
            category,
            price,
            quantity,
            imgURL,
            rating,
            details
        }
        console.log(newToy)
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d")`, backgroundSize: 'contain' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-4/5 md:w-4/6">
                <div className="card w-4/5 shadow-2xl bg-accent bg-opacity-70">
                    <form onSubmit={handleAddToy} className="card-body w-full">
                        <h2 className='text-4xl my-4 text-primary font-bold font-mono flex items-center justify-center gap-2'> <AiOutlinePlus />Add Your Toys Here! <FaBasketballBall /></h2>
                        <div className="flex gap-2">
                            <input type="text" name='sellerName' placeholder="Seller Full Name" className="input text-black w-1/2" required />
                            <input type="email" name='sellerEmail' placeholder="Seller Email Address" className="input text-black w-1/2" required />
                        </div>
                        <div className="flex gap-2">
                            <input type="text" name="toyName" placeholder="Toy Name" className="input text-black w-1/2" required />
                            <input type="option" name="category" placeholder="Toy Sub Category" className="input text-black w-1/2" required />
                        </div>
                        <div className="flex gap-2">
                            <input type="number" name="price" placeholder="Price of the Toy" className="input text-black w-1/2" required />
                            <input type="number" name="quantity" placeholder="Available Quantity" className="input text-black w-1/2" required />
                        </div>
                        <div className="flex gap-2">
                            <input type="link" name="imgURL" placeholder="URL of the Toy Image" className="input text-black w-2/3" required />
                            <input type="text" name="rating" placeholder="Rating of the Toy" className="input text-black w-1/3" required />
                        </div>
                        <div className="flex gap-2">
                            <textarea type="text" name="details" placeholder="Detailed Description" className="textarea text-black w-full" required />
                        </div>
                        <div className="w-full mt-5">
                            <button className="w-full btn btn-primary font-mono text-xl">A D D <HiOutlineViewGridAdd className='ms-2' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;