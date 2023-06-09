import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar";
import LandingSlider from "@/Components/LandingSlider";
import PopularContainer from "@/Components/PopularContainer";
import CustomizeContainer from "@/Components/CustomizeContainer";
import Footer from "@/Components/Footer";

export default function Welcome(props) {
    console.log(props)
    return (
        <>
            <Head title="Welcome" />
            <div>
                {/*<Link*/}
                {/*    href={route('login')}*/}
                {/*    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"*/}
                {/*>*/}
                {/*    Log in*/}
                {/*</Link>*/}

                {/*<Link*/}
                {/*    href={route('register')}*/}
                {/*    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"*/}
                {/*>*/}
                {/*    Register*/}
                {/*</Link>*/}

            </div>

            {/*<Link href={route('test')}>Test Page</Link>*/}
            <Navbar
                auth={props.auth}
                errors={props.errors}
            />
            <LandingSlider />
            <PopularContainer />
            <CustomizeContainer
                auth={props.auth}
                errors={props.errors}
            />
            <Footer />
        </>
    );
}
