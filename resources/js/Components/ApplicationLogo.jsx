import {GiSurferVan} from "react-icons/gi";

export default function ApplicationLogo(props) {
    return (
        <div className={"flex flex-row gap-2 items-center justify-between "}>
            <GiSurferVan size={"2.5rem"}/>
            <h1 className={"font-black pt-2 text-2xl"}>NomadRoamGeorgia</h1>
        </div>
    );
}
