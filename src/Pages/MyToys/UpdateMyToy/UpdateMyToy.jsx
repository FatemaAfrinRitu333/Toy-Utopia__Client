import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/WebTitle';
import Swal from 'sweetalert2'


const UpdateMyToy = () => {

    const { _id, price, quantity, details, toyName } = useLoaderData();
    useTitle(`Toy Utopia | Update ${toyName}`);

    const navigate = useNavigate();

    const handleUpdateToy = (e) => {
        e.preventDefault();

        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updatedMyToy = { price, quantity, details };
        // console.log(updatedMyToy)

        fetch(`https://toy-utopia.onrender.com/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedMyToy)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Success!',
                    'Toy information updated!',
                    'success'
                )
                navigate('/myToys')
            })
    }

    return (

        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d")`, backgroundSize: 'contain' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-4/5 md:w-4/6">
                <div className="card w-4/5 shadow-2xl bg-accent bg-opacity-70">
                    <form onSubmit={handleUpdateToy} className="card-body w-full">
                        <h2 className='text-4xl my-4 text-primary font-bold font-mono flex items-center justify-center gap-2'> Update you {toyName} toy information here!</h2>
                        <div className="form-control">
                            <label className="input-group w-full">
                                <span className='bg-primary text-white'>Price</span>
                                <input name='price' type="number" placeholder="45.55" defaultValue={price} className="input input-bordered w-full text-black" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group w-full">
                                <span className='bg-primary text-white'>Quantity</span>
                                <input name='quantity' type="number" placeholder="500" defaultValue={quantity} className="input input-bordered w-full text-black" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group w-full">
                                <span className='bg-primary text-white'>Details</span>
                                <textarea name='details' type="text" defaultValue={details} placeholder="Product Description Here" className="textarea textarea-bordered w-full h-24 text-black" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-mono">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateMyToy;