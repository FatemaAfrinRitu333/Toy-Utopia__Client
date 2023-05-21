import React from 'react';
import { Link } from 'react-router-dom';


const ToyRow = ({toy}) => {
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className='w-full text-center'>
                        <div className="font-bold">{toy.sellerName}</div>
                        <div className="text-sm opacity-50">{toy.sellerEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                {toy.toyName}
                <br />
                <div className='inline-block lg:flex justify-center lg:gap-1 my-1'>
                    <span className="badge badge-primary badge-outline badge-sm">{toy.category}</span>
                    <span className="badge badge-primary badge-outline badge-sm">$ {toy.price}</span>
                    <span className="badge badge-primary badge-outline badge-sm">{toy.quantity} qty</span>
                </div>
            </td>
            <th>
                <Link to={`/seller-added-toy-details/${toy._id}`}>
                <button className="btn btn-outline btn-primary btn-xs">view details</button>
                </Link>
            </th>
        </tr>
    );
};

export default ToyRow;