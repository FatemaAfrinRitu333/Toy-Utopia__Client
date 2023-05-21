import React from 'react';
import useTitle from '../../../Hooks/WebTitle';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineArrowDown, AiOutlineStar } from 'react-icons/ai';
import { FaDollarSign, FaUserTag } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { MdCategory, MdProductionQuantityLimits } from 'react-icons/md';

const AllToyDetail = () => {

    const { toyName, sellerName, sellerEmail, quantity, price, category,imgURL, rating, details } = useLoaderData();

    useTitle(`Toy Utopia | ${toyName}`);

    return (
        <div className='container mx-auto my-9'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-full'><img className='h-full w-full' src={imgURL} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-3xl font-mono">{toyName}</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <tbody className='text-neutral font-mono'>
                                    <tr>
                                        <th className='flex items-center gap-1'><FaUserTag /> Seller:</th>
                                        <td>
                                            <span className='lg:flex gap-2'>
                                                <span className="badge badge-warning badge-outline ">{sellerName}</span>
                                                <span className="badge badge-warning badge-outline">{sellerEmail}</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='flex items-center gap-1'><FaDollarSign /> Price:</th>
                                        <td className='font-bold text-primary'>$ {price}</td>
                                    </tr>
                                    <tr>
                                        <th className='flex items-center gap-1'><MdProductionQuantityLimits /> Available Quantity:</th>
                                        <td>{quantity}</td>
                                    </tr>
                                    <tr>
                                        <th className='flex items-center gap-1'><MdCategory /> Category:</th>
                                        <td>{category}</td>
                                    </tr>
                                    <tr className='flx'>
                                        <th className='flex items-center gap-1'><AiFillStar /> Ratings:</th>
                                        <td className='flex items-center gap-1 text-warning'>
                                            <span>{rating} </span>
                                            <Rating readonly
                                                placeholderRating={rating}
                                                emptySymbol={<AiOutlineStar />}
                                                placeholderSymbol={<AiFillStar />}
                                                fullSymbol={<AiFillStar />}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="collapse w-full">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title text-neutral  peer-checked:text-warning flex items-center w-full">
                                    <AiOutlineArrowDown /><b> Details:</b>
                                </div>
                                <div className="collapse-content  text-neutral peer-checked:text-warning w-full">
                                    <p>{details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToyDetail;