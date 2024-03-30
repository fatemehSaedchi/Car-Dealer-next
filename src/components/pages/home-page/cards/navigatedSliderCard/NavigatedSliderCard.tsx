interface Props {
    data: any
}

export function NavigatedSliderCard({data}: Props) {
    return (
        <>
            <img className="rounded-bl-[100px] h-96 lg:h-[700px] w-full"
                 src={data.image} alt=""/>
            <div className="w-9/12 absolute mx-auto left-0 right-0 top-9 sm:top-12 ">
                <div className="flex w-full justify-between">
                    <p className="text-white text-xs sm:text-sm md:text-base xl:text-lg font-semibold">{data.class}</p>
                    <p className="text-white text-xs sm:text-sm md:text-base xl:text-lg font-light">{data.title}</p>
                </div>
                <div className="flex w-full justify-between mt-2.5">
                    <p className="text-white text-base sm:text-xl md:text-3xl xl:text-4xl font-light">
                        {data.model}</p>
                    <p className="text-white text-base sm:text-xl md:text-3xl xl:text-4xl font-bold">$
                        {data.price}</p>
                </div>
            </div>
        </>
    )
}