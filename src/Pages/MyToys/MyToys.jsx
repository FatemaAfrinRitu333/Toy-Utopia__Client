import React, { useContext, useEffect, useState } from 'react';
import MyToyRow from './MyToyRow';
import { AuthContext } from '../../Providers/AuthProvider';
import SubBanner from '../SubBanner/SubBanner';
import useTitle from '../../Hooks/WebTitle';
import { GrUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle('Toy Utopia | My Toys')

    const { user, loading } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);

    useEffect(() => {
        fetch(`https://toy-utopia-server-production.up.railway.app/myToys?sellerEmail=${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((data) => {
                setMyToy(data)
            });
    }, [user]);

    const handleDelete = (_id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-warning',
                cancelButton: 'btn btn-accent'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure you want to delete this toy?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-utopia-server-production.up.railway.app/myToys/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'This service is deleted',
                                'success'
                            )
                        }
                        const remaining = myToy.filter(toy => toy._id !== _id);
                        setMyToy(remaining);
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your service request is safe with us!)',
                    'error'
                )
            }
        })
    }

    if (loading) {
        return <>
            <div className='w-full flex mx-auto justify-center items-center h-screen'>
                <progress className="progress w-4/5 bg-primary"></progress>
            </div>
        </>
    }
    return (
        <div>
            <SubBanner subHeader={`Toys Added By ${user?.email}`}></SubBanner>
            <div className="container mx-auto overflow-x-auto w-full">
                <table className="table mx-auto w-screen text-center">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" disabled />
                                </label>
                            </th>
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToy.map(toy => <MyToyRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToyRow>)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Update</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyToys;