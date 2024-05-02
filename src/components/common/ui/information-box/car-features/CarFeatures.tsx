interface Props {
    data: any
    marginBottom?: number
}

export function CarFeatures({data, marginBottom = 0}: Props) {

    return (
        <>
            <ul style={{marginBottom: `${marginBottom}px`}} className="grid grid-cols-3 justify-start text-left text-xs gap-y-3 xl:text-sm gap-x-8 pt-7 max-w-md">
                <li>
                    Transition <br/>
                </li>
                <li>
                    Fuel
                </li>
                <li>
                    Passenger
                </li>
                <li className={'font-bold xl:text-lg'}>
                    {data?.attributes.transitions.data[0].attributes.type}
                </li>
                <li className={'font-bold xl:text-lg'}>
                    {data?.attributes.fuels.data[0].attributes.type}
                </li>
                <li className={'font-bold xl:text-lg'}>
                    {data?.attributes.passenger} Person
                </li>
            </ul>
        </>
    );
}