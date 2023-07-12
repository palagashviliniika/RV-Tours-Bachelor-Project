import React from 'react';
import {Head, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PopularSingle from "@/Components/PopularSingle";

const ReservedTours = (props) => {
    const { auth } = usePage().props

    // console.log(props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Reserved Tours</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className={"py-3 font-semibold text-xl text-texts"}>
                            Trips History
                        </h1>
                        <div className="pb-6 text-gray-900 grid grid-cols-4 gap-8">
                            {
                                props.reserves && props.reserves.map(reserve => {
                                    return (
                                        <PopularSingle
                                            key={reserve.id}
                                            tour={reserve.tours}
                                            dashboard={true}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className={"py-3 font-semibold text-xl text-texts"}>
                            Your Tours
                        </h1>
                        <div className="pb-6 text-gray-900 grid grid-cols-4 gap-8">
                            {
                                props.customReserves && props.customReserves.map(reserve => {
                                    return (
                                        <PopularSingle
                                            key={reserve.id}
                                            tour={reserve}
                                            dashboard={true}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ReservedTours;
