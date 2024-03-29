import {ServicesCard} from "@/components";
import {twMerge} from "tailwind-merge";

interface Props {
    data: Array<any>
    cardNumber?: number
    start?: number
    className?: string
    topBar?: boolean
}

export function ServicesList({data, cardNumber = 3, start = 0, className, topBar = false}: Props) {
    return (
        <>
            {
                data.slice(start, cardNumber).map((service, index) => {
                    return (
                        <div
                            className={twMerge("basis-1/3 flex flex-col justify-center items-center shadow-Xl rounded-2xl bg-white", className)}>

                            {
                                topBar ?
                                    <>
                                        <div
                                            style={{background: `linear-gradient(90deg, rgba(13,61,229,${(1/cardNumber)*index}), rgba(13,61,229,${(1/cardNumber)*(index+1)}))`}}
                                            className="w-[90%] h-[4px] mb-[30px] md:mb-[50px] xl:mb-[70px] relative">
                                            <div style={{backgroundColor: `rgba(13,61,229,${(1/cardNumber)*(index+1)})`}}
                                                className="absolute top-[-5px] right-[-15px] w-[15px] h-[15px] rounded-full"></div>
                                        </div>
                                        <ServicesCard key={index} data={service}/>
                                    </>
                                    :
                                    <div className={"w-4/5 py-5 lg:py-8"}>
                                        <ServicesCard key={index} data={service}/>
                                    </div>
                            }

                        </div>
                    )
                })
            }

        </>
    )
}