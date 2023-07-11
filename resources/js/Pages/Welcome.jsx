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

            <Navbar
                auth={props.auth}
                errors={props.errors}
            />
            <LandingSlider />
            <PopularContainer
                tours={props.tours}
            />
            <CustomizeContainer
                auth={props.auth}
                errors={props.errors}
            />
            <Footer />
        </>
    );
}
