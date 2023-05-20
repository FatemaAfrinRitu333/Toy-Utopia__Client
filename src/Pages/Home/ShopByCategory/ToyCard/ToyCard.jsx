import React from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineArrowRight, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {

    const { _id, rating, price, toyName, toyPicture } = toy;
    

    return (
        <div className="card w-96 bg-accent/50 shadow-xl" data-aos="fade-up" data-aos-delay="100"
            data-aos-duration="1500">
            <figure><img style={{ width: '100%', height: '400px' }} src={toyPicture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toyName}
                </h2>
                <div className="card-actions justify-between flex items-center">
                    <div className='md:flex gap-1'>
                        <div className="badge badge-outline badge-success">$ {price}</div>
                        <div className="badge badge-outline badge-warning flex items-center gap-1">
                            {rating}
                            <Rating readonly
                                placeholderRating={rating}
                                emptySymbol={<AiOutlineStar />}
                                placeholderSymbol={<AiFillStar />}
                                fullSymbol={<AiFillStar />}
                            />
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Link to={`/allToys/${_id}`}>
                            <button className="btn btn-link lowercase"><AiOutlineArrowRight /> View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;