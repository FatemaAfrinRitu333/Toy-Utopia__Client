import React from 'react';

const AllToys = () => {
    return (
        <div className='my-14 container mx-auto'>
            <h2 className='text-4xl font-mono font-bold text-center uppercase my-8'>all toys added by the sellers</h2>
            <div className='flex justify-end my-8'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-full mx-auto">
                <table className="table mx-auto w-screen text-center">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className='w-full text-center'>
                                            <div className="font-bold">Seller Name</div>
                                            <div className="text-sm opacity-50">Seller Email</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Toy Name
                                    <br />
                                    <div className='inline-block lg:flex justify-center gap-1 my-1'>
                                        <span className="badge badge-primary badge-outline badge-sm">Category</span>
                                        <span className="badge badge-primary badge-outline badge-sm">Price</span>
                                        <span className="badge badge-primary badge-outline badge-sm">Quantity</span>
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-outline btn-primary btn-xs">view details</button>
                                </th>
                            </tr>

                        </tbody>
                    }
                    <tfoot>
                        <tr>
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Description</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default AllToys;