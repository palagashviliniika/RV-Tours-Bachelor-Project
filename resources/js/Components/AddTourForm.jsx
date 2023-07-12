import React, {useState} from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {useForm, usePage} from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton";
import CustomSelect from "@/Components/CustomSelect";
import DateRangeComp from "@/Components/DateRangeComp";

const AddTourForm = ({tour=null, transports}) => {
    const { errors } = usePage().props

    const { data, setData, post, put, processing} = useForm({
        name: tour ? tour.name : "",
        price: tour ? tour.price : "",
        description: tour ? tour.description : "",
        startDate: tour ? tour.startDate : "",
        endDate: tour ? tour.endDate : "",
        days: tour ? tour.days : "",
        transport_id: tour ? tour.transport_id : ""
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
        tour ? put(route("tour.update", { tour: tour.id}), data) : post(route("tour.store"), data)
    }

    const selectOptions = transports.map(transport => {
        return  {
            value: transport.id,
            name: transport.name
        }
    })

    console.log(tour)

    return (
        <form onSubmit={handleSubmit}>
            <InputLabel htmlFor="name" value="ტურის სახელი" />

            <TextInput
                id="name"
                type="text"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={handleChange}
            />

            <p className={"text-red-600"}>
                {errors.name ?? "" }
            </p>

            <InputLabel htmlFor="price" value="ფასი" />

            <TextInput
                id="price"
                type="text"
                name="price"
                value={data.price}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={handleChange}
            />

            <p className={"text-red-600"}>
                {errors.price ?? "" }
            </p>

            <InputLabel htmlFor="description" value="აღწერა" />

            <TextInput
                id="description"
                type="text"
                name="description"
                value={data.description}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={handleChange}
            />

            <p className={"text-red-600"}>
                {errors.description ?? "" }
            </p>

            <DateRangeComp
                data={data}
                setData={setData}
            />

            <p className={"text-red-600"}>
                {errors.startDate ?? "" }
            </p>

            <InputLabel htmlFor="transport_id" value="ტრანსპორტის ტიპი" />

            <CustomSelect
                name={"transport_id"}
                value={data.transport_id}
                onChange={handleChange}
                options={selectOptions}
            />

            <p className={"text-red-600"}>
                {errors.transport_id ?? "" }
            </p>

            <button
                type={"submit"}
                className={"inline-flex items-center mt-4 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}
                >
                Submit
            </button>
        </form>
    );
};

export default AddTourForm;
