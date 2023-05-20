import React from 'react';

const Donate = () => {
    return (
        <div className='container mx-auto my-12'>
            <div className="w-full block lg:flex bg-base-100 shadow-xl rounded-xl">
                <div className='rounded-l-xl'>
                    <div className="hero min-h-screen rounded-l-xl" style={{ backgroundImage: `url("https://th.bing.com/th/id/OIP.vvEPhbdnULigelswzNYk1wHaHa?pid=ImgDet&rs=1")`, borderRadius: '12px 0px 0px 12px' }}>
                        <div className="hero-overlay bg-neutral bg-opacity-60 rounded-l-xl"></div>
                        <div className="hero-content text-center text-primary font-mono">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Donate your toys!</h1>
                                <p className="mb-5">We accept donation of old and new toys here. We donate your given toys to the poor children. If you want, you can host a toy donation campaign with our help or join one of our ongoing campaign and help us spread happiness!</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='divider divider-horizontal'></div> */}
                <div className="card w-1/3 min-h-screen text-primary rounded-none font-mono">
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl font-bold">Dropping Location</h2>
                        <p>You can directly come/ send toys to our dropping location!</p>
                        <div className="card-actions">
                            <div className="overflow-x-auto">
                                <table className="table bg-blue w-full">
                                    <tbody className='text-sm space-y-0'>
                                        <tr className='hover'>
                                            <th>House</th>
                                            <td>17/13</td>
                                        </tr>
                                        <tr className='hover'>
                                            <th>Street</th>
                                            <td>West Utopia Avenue</td>
                                        </tr>
                                        <tr className='hover'>
                                            <th>City</th>
                                            <td>Utopia West</td>
                                        </tr>
                                        <tr className='hover'>
                                            <th>Call us at</th>
                                            <td>+88014842184512</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='divider divider-horizontal'></div> */}
                <div className='w-1/3'>
                    <div className="w-full shadow-2xl bg-accent bg-opacity-70 rounded-r-xl">
                        <form className="card-body w-full min-h-screen">
                            <h2 className='text-4xl my-4 text-primary font-bold font-mono flex items-center justify-center gap-2'> Login Here</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-mono">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email Address" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-mono">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-mono">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;