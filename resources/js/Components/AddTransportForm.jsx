import React, {useState} from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {useForm, usePage} from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton";

const AddTransportForm = ({tour=null}) => {
    const { errors } = usePage().props

    const { data, setData, post, put, processing} = useForm({
        name: tour ? tour.name : ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        tour ? put(route("tour.update", { tour: tour.id}), data) : post(route("transport.store"), data)
    }

    // console.log(tour)
    console.log(data)

    return (
        <form onSubmit={handleSubmit}>
            <InputLabel htmlFor="name" value="სატრანსპორტო საშუალების ტიპი" />

            <TextInput
                id="name"
                type="text"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={handleChange}
            />

            {/*<p className={"text-red-600"}>*/}
            {/*    {errors.name ?? "" }*/}
            {/*</p>*/}

            <button
                type={"submit"}
                className={"inline-flex items-center mt-4 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}
            >
                Submit
            </button>
        </form>
    );
};

export default AddTransportForm;
