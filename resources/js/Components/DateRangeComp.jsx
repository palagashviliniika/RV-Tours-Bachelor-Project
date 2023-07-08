import React, {useState, useEffect, useRef} from 'react';
import {DateRange} from "react-date-range";
import format from "date-fns/format";
import {addDays} from "date-fns";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRangeComp = (props) => {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])
    const [open, setOpen] = useState(false)
    const refOne = useRef(null)

    useEffect(() => {
        // setRange(format(new Date(), 'MM/dd/yyyy'))
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)

    },[])

    // const handleChange = (date) => {
    //     setRange(format(date, 'MM/dd/yyyy'))
    // }

    const hideOnEscape = (e) => {
        // console.log(e.key)
        e.key === "Escape" && setOpen(false)
    }

    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    console.log(range)

    return (
        <div>
            <label
                htmlFor="dates"
            >
                Select trip dates
            </label>
            <input
                value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
                readOnly
                name={"dates"}
                id={"dates"}
                onClick={() => setOpen(prevOpen => !prevOpen)}
            />

            <div ref={refOne}>
                {
                    open &&
                    <DateRange
                        onChange={item => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction={"horizontal"}
                        // className={"calendarElement"}
                    />
                }
            </div>

        </div>
    );
};

export default DateRangeComp;
