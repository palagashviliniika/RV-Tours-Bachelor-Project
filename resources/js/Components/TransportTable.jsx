import React from 'react';
import {Link, router} from "@inertiajs/react";

const TransportTable = ({transports}) => {
    // console.log(tours)

    const handleDelete = (id) => {
        router.delete(route('tour.destroy', { id: id}))
    }

    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            სატრანსპორტო საშუალება
                        </th>
                        <th scope="col" className="px-6 py-3">
                            რედაქტირება
                        </th>
                        <th scope="col" className="px-6 py-3">
                            წაშლა
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        transports.map(transport=>{
                            return(
                                <tr key={transport.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <th className="px-6 py-4 text-white">
                                        {transport.name}
                                    </th>

                                    <td className="px-6 py-4">
                                        <Link href={route('tour.edit', { id: transport.id})} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user
                                        </Link>
                                    </td>
                                    <th className="w-4 p-4">
                                        <button
                                            onClick={() => handleDelete(transport.id)}
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete
                                        </button>
                                    </th>

                                </tr>
                            )
                        })
                    }


                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default TransportTable;
