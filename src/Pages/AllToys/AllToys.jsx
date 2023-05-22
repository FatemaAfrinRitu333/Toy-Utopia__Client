import React, { useEffect } from 'react';
import { useState } from "react";
import ToyRow from './ToyRow';
import SubBanner from '../SubBanner/SubBanner';
import useTitle from '../../Hooks/WebTitle';
import Swal from 'sweetalert2';

const AllToys = () => {
    useTitle('Toy Utopia | Add A Toy');
    const subHeader = 'all toys added by the sellers';

    const [allToys, setAllToys] = useState([]);
    const [searchToyName, setSearchToyName] = useState('');

    useEffect(() => {
        fetch('https://toy-utopia-server-production.up.railway.app/allToys')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllToys(data)
            })
    }, [])

    const handleSearch = () => {
        fetch(`https://toy-utopia-server-production.up.railway.app/allToys?toyName=${searchToyName}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            // body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    console.log(data);
                    setAllToys(data);
                }
                else{
                    return Swal.fire(
                        'Oops!',
                        `No toy(s) found with the name ${searchToyName}`,
                        'error'
                      )
                }
            });
    };

    return (
        <div className='mb-14'>
            <SubBanner subHeader={subHeader}></SubBanner>
            <div className=' container mx-auto flex justify-end my-8'>
                <div className="form-control">
                    <div className="input-group">
                        <input onChange={(e) => setSearchToyName(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} type='submit' className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto overflow-x-auto w-full">
                <table className="table mx-auto w-screen text-center">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map(toy => <ToyRow
                            key={toy._id}
                            toy={toy}
                        ></ToyRow>)}
                    </tbody>
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