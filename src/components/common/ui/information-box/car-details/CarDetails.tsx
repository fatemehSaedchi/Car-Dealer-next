interface Props {
    item: any
}

export function CarDetails({item}: Props) {
    return (
        <>
            <ul className="flex text-xs xl:text-sm gap-8 xl:gap-11 pt-7">
                <li>
                    Transition
                </li>
                <li>
                    Fuel
                </li>
                <li>
                    Passenger
                </li>
            </ul>
            <ul className="flex text-sm md:text-base gap-6 xl:gap-8 font-semibold pt-3">
                <li>
                    {item.transmition}
                </li>
                <li>
                    {item.fuel}
                </li>
                <li>
                    {item.passenger} Person
                </li>
            </ul>
        </>
    );
}