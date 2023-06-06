import React, {useState} from 'react';
import CustomSelect from "@/Components/CustomSelect";

const CustomizeForm = () => {
    const [formData, setFormData] = useState({
        location:"",
        vehicle:""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div>
            <div className={"flex flex-col"}>
                <h1 className={"text-rust text-3xl font-semibold"}>Georgia Awaits</h1>
                <p className={"text-texts text-lg "}>Plan your trip now and here!</p>
            </div>

            <form action="">
                <CustomSelect
                    name={"location"}
                    label={"Where to?"}
                    value={formData.location}
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

                <CustomSelect
                    name={"vehicle"}
                    label={"Choose wheels"}
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder={"Buckle up the wheels!"}
                    options={[
                        {
                            value: "bus",
                            name: "Vintage Bus"
                        },
                        {
                            value: "rv",
                            name: "RV Van"
                        }
                    ]}
                />
            </form>
        </div>
    );
};

export default CustomizeForm;
