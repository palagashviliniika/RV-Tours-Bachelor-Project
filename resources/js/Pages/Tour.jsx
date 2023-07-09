import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import TourTable from "@/Components/TourTable";

export default function Tour(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tour</h2>}
        >
            <Head title="Tour" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div
                            className="p-6 text-gray-900"
                        >
                            <div className={"flex justify-between"}>
                                <button>
                                    <Link href={route('tour.create')}>
                                        ტურის დამატება
                                    </Link>
                                </button>

                                <button
                                    form={"deleteForm"}
                                >
                                    ტურის წაშლა
                                </button>
                            </div>

                            <TourTable tours={props.tours}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
