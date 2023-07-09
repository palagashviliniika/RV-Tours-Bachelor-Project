import React from 'react';
import {Link} from "@inertiajs/react";

const TourTable = ({tours}) => {
    console.log(tours)
    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tours.map(tour=>{
                            return(
                                <tr key={tour.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th className="w-4 p-4">
                                        <form action={route('tour.destroy', { id: tour.id})}>
                                            <button type="submit" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete
                                            </button>
                                        </form>

                                        {/*<form action={route('tour.destroy', { id: tour.id})} id={"deleteForm"}>*/}
                                        {/*    <div className="flex items-center">*/}
                                        {/*        <input id="checkbox-table-search-1" type="checkbox"*/}
                                        {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"*/}
                                        {/*        />*/}
                                        {/*        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>*/}
                                        {/*    </div>*/}
                                        {/*</form>*/}
                                    </th>
                                    <th className="px-6 py-4 text-white">
                                        {tour.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {tour.price}
                                    </td>
                                    <td className="px-6 py-4">
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
                                        {/*Modal toggle*/}
                                        <Link href={route('tour.edit', { id: tour.id})} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user
                                        </Link>
                                    </td>
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
