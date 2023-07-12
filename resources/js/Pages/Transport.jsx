import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import TourTable from "@/Components/TourTable";
import TransportTable from "@/Components/TransportTable";

export default function Transport(props) {
    console.log(props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Transport</h2>}
        >
            <Head title="Tour" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto ">
                    <div className="overflow-hidden">
                        <div
                            className="p-6 text-gray-900"
                        >
                            <div className={"flex justify-end"}>
                                <button
                                    className={"inline-flex items-center mt-4 px-4 py-2 mb-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-rust hover:bg-rust-hover focus:bg-rust-hover active:bg-rust focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}
                                >
                                    <Link href={route('transport.create')}>
                                        სატრანსპორტო საშუალების დამატება
                                    </Link>
                                </button>
                            </div>

                            <TransportTable transports={props.transports}/>
                            {/*<TourTable tours={props.tours}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
