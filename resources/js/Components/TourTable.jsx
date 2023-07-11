import React from 'react';
import {Link, router} from "@inertiajs/react";

const TourTable = ({tours}) => {
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
                            სახელი
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ფასი
                        </th>
                        <th scope="col" className="px-6 py-3">
                            აღწერა
                        </th>
                        <th scope="col" className="px-6 py-3">
                            დაწყების თარიღი
                        </th>
                        <th scope="col" className="px-6 py-3">
                            დასრულების თარიღი
                        </th>
                        <th scope="col" className="px-6 py-3">
                            დღეების რაოდენობა
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ტრანსპორტის ტიპი
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
                        tours.map(tour=>{
                            return(
                                <tr key={tour.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <th className="px-6 py-4 text-white">
                                        {tour.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {tour.price}
                                    </td>
                                    <td className="px-6 py-4 truncate max-w-[16rem]">
                                        {tour.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tour.startDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tour.endDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tour.days}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tour.transport.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href={route('tour.edit', { id: tour.id})} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user
                                        </Link>
                                    </td>
                                    <th className="w-4 p-4">
                                        <button
                                            onClick={() => handleDelete(tour.id)}
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

export default TourTable;
