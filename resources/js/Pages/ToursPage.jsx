import React from 'react';
import {Head} from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ToursContainer from "@/Components/ToursContainer";

const ToursPage = (props) => {
    console.log(props)
    return (
        <>
            <Head title="Tours" />

            <Navbar
                auth={props.auth}
                errors={props.errors}
            />

            <ToursContainer
                tours={props.tours}
            />

            <Footer />
        </>
    );
};

export default ToursPage;
