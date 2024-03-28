interface Props {
    item: any
}

export function CarFeatures({item}: Props) {
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