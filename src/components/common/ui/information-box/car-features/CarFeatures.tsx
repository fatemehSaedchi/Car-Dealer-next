import {CarsType, EntityType} from "@/types";
interface Props {
    data: EntityType<CarsType>
}

export function CarFeatures({data}: Props) {

    return (
        <>
            <ul className="grid grid-cols-3 justify-center text-center text-xs gap-y-5 xl:text-sm gap-x-8 xl:gap-x-11 pt-7">
                <li>
                    Transition <br/>
                </li>
                <li>
                    Fuel
                </li>
                <li>
                    Passenger
                </li>
                <li>
                    {data?.attributes.transitions.data[0].attributes?.type}
                </li>
                <li>
                    {data?.attributes.fuels.data[0].attributes?.type}
                </li>
                <li>
                    {data?.attributes.passenger} Person
                </li>
            </ul>
        </>
    );
}