import React from 'react';
import { AiFillDelete, AiFillStar } from 'react-icons/ai';
import Swal from 'sweetalert2';

const MyToyRow = ({ toy, handleDelete }) => {

    const { _id, sellerName, sellerEmail, toyName, imgURL, category, price, quantity, rating } = toy;

    const handleUpdateToy = (e) => {
        e.preventDefault();

        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updatedMyToy = { price, quantity, details };

        fetch(``, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedMyToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Success!',
                        'You are successfully logged In!!',
                        'success'
                    )
                    form.reset();
                }
            })
    }

    return (
        <>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-circle btn-outline btn-error'><AiFillDelete className='text-xl' /> </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imgURL} alt="" />
                            </div>
                        </div>
                        <div className='w-full text-center'>
                            <div className="font-bold">{sellerName}</div>
                            <div className="text-sm opacity-50">{sellerEmail}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {toyName}
                    <span className="badge badge-warning badge-sm ms-1"><AiFillStar />{rating}</span>
                    <br />
                    <div className='inline-block lg:flex justify-center lg:gap-1 my-1'>
                        <span className="badge badge-primary badge-outline badge-sm">{category}</span>
                        <span className="badge badge-primary badge-outline badge-sm">$ {price}</span>
                        <span className="badge badge-primary badge-outline badge-sm">{quantity} qty</span>
                    </div>
                </td>
                <th>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="btn btn-outline btn-accent btn-xs">Update</label>

                    {/* Put this part before </body> tag */}
                </th>
            </tr>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg capitalize text-primary">Update your toy information</h3>
                    <div className="py-4">
                        <form onSubmit={handleUpdateToy} className='space-y-5'>
                            <div className="form-control">
                                <label className="input-group w-full">
                                    <span className='bg-accent text-primary'>Price</span>
                                    <input name='price' type="number" placeholder="45.55" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group w-full">
                                    <span className='bg-accent text-primary'>Quantity</span>
                                    <input name='quantity' type="number" placeholder="500" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group w-full">
                                    <span className='bg-accent text-primary'>Details</span>
                                    <textarea name='details' type="text" placeholder="Product Description Here" className="textarea input-bordered w-full" />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <button type='submit' htmlFor="my-modal" className="btn">Update</button>
                    </div>
                </div>
            </div>
        </>


    );
};

export default MyToyRow;