import React from 'react';
import { AiFillDelete, AiFillStar } from 'react-icons/ai';

const MyToyRow = ({ toy, handleDelete }) => {

    const { _id, sellerName, sellerEmail, toyName, imgURL, category, price, quantity, rating } = toy;

    return (
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
                <button className="btn btn-outline btn-accent btn-xs">Update</button>
            </th>
        </tr>


    );
};

export default MyToyRow;