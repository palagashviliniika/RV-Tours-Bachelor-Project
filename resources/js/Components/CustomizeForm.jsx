import React, {useEffect} from 'react';
import CustomSelect from "@/Components/CustomSelect";
import DateRangeComp from "@/Components/DateRangeComp";
import {router, useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";

const CustomizeForm = ({transports}) => {
    const { auth, errors } = usePage().props
    // console.log(errors)

    const { data, setData, post, put, processing } = useForm({
        name: "",
        price: "",
        startDate: "",
        endDate: "",
        days: "",
        // user_id: auth.user.id ? auth.user.id : "",
        transport_id: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(data, transports)
        // console.log(auth.user.id)
        auth.user ? post(route("reserveCustomTour"), data) : router.visit(route('login'))
    }

    const selectOptions = transports.map(transport => {
        return  {
            value: transport.id,
            name: transport.name
        }
    })

    useEffect(() => {
        const price = data.days*150 + 200
        setData(prevFormData => {
            return {
                ...prevFormData,
                price: price
            }
        })
    }, [data.days])

    return (
        <div>
            <div className={"flex flex-col pb-10"}>
                <h1 className={"text-rust text-3xl font-semibold"}>Georgia Awaits</h1>
                <p className={"text-texts text-lg "}>Plan your trip now and here!</p>
            </div>

            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="name" value="მოგზაურობის ადგილი" />

                <CustomSelect
                    name={"name"}
                    label={"Where to?"}
                    value={data.name}
                    onChange={handleChange}
                    placeholder={"Please choose the trip location"}
                    options={[
                        {
                            value: "svaneti",
                            name: "Svaneti"
                        },
                        {
                            value: "samegrelo",
                            name: "Samegrelo"
                        },
                        {
                            value: "adjara",
                            name: "Adjara"
                        }
                    ]}
                />

                <p className={"text-red-600"}>
                    {errors.name ?? "" }
                </p>

                <InputLabel htmlFor="transport_id" value="სატრანსპორტო საშუალება" />

                <CustomSelect
                    name={"transport_id"}
                    label={"Choose wheels"}
                    value={data.transport_id}
                    onChange={handleChange}
                    placeholder={"Buckle up the wheels!"}
                    options={selectOptions}
                />

                <p className={"text-red-600"}>
                    {errors.transport_id ?? "" }
                </p>

                <DateRangeComp
                    data={data}
                    setData={setData}
                />

                <p className={"text-red-600"}>
                    {errors.startDate ?? "" }
                </p>

                <div className={"flex items-center mt-4 gap-4"}>
                    <button
                        type={"submit"}
                        className={"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}
                    >
                        Submit
                    </button>

                    <h1 className={"font-medium text-lg text-texts"}>
                        Price: {data.price}₾
                    </h1>
                </div>

            </form>
        </div>
    );
};

export default CustomizeForm;
