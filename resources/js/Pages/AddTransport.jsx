import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import AddTourForm from "@/Components/AddTourForm";
import AddTransportForm from "@/Components/AddTransportForm";

export default function AddTransport(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Transport Type</h2>}
        >
            <Head title="Add Transport Type" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div
                            className="p-6 text-gray-900"
                        >
                            <AddTransportForm />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
