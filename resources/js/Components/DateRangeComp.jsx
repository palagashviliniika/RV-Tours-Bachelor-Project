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

    useEffect(() => {
        const startDate = range[0].startDate
        const endDate = range[0].endDate
        const Difference_In_Time = endDate.getTime() - startDate.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        props.setData &&
            props.setData(prevFormData => {
            return {
                ...prevFormData,
                endDate:format(endDate, "yyyy-MM-dd"),
                startDate:format(startDate, "yyyy-MM-dd"),
                days: Difference_In_Days
            }
        })
    }, [range])

    const handleChange = (item) => {
        setRange([item.selection])
    }
    // console.log(format(range[0].startDate, "yyyy-MM-dd"), format(range[0].endDate, "yyyy-MM-dd"))
    // console.log(props.startDate, props.endDate)
    return (
        <div>
            <label
                htmlFor="dates"
                className={`block font-medium text-sm text-gray-700`}
            >
                მოგზაურობის პერიოდი
            </label>
            <input
                value={`${format(range[0].startDate, "yyyy-MM-dd")} - ${format(range[0].endDate, "yyyy-MM-dd")}`}
                readOnly
                name={"dates"}
                id={"dates"}
                onClick={() => setOpen(prevOpen => !prevOpen)}
            />

            <div ref={refOne}>
                {
                    open &&
                    <DateRange
                        onChange={handleChange}
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
