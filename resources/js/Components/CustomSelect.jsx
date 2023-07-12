import React from 'react';

const CustomSelect = (props) => {
    const selectOptions = props.options?.map(opt => {
        return(
            <option key={opt.value} value={opt.value}>{opt.name}</option>
        )
    })

    return (
        <div>
            {/*<label*/}
            {/*    htmlFor={props.name}*/}
            {/*>*/}
            {/*    {props.label}*/}
            {/*</label>*/}

            <select
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={props.onChange}
                className={"my-2"}
            >
                <option value="" disabled hidden>{props.placeholder}</option>
                {selectOptions}
            </select>
        </div>
    );
};

export default CustomSelect;
