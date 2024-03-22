interface Props {
    item: any
}

export function CarDetails({item}: Props) {
    return (
        <>
            <div className="flex text-xs xl:text-sm gap-8 xl:gap-11 pt-7">
                <p>
                    Transition
                </p>
                <p>
                    Fuel
                </p>
                <p>
                    Passenger
                </p>
            </div>
            <div className="flex text-sm md:text-base gap-6 xl:gap-8 font-semibold pt-3">
                <p>
                    {item.transmition}
                </p>
                <p>
                    {item.fuel}
                </p>
                <p>
                    {item.passenger} Person
                </p>
            </div>
        </>
    );
}