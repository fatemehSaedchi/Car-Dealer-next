import {IconBox} from "@/components";

interface Props {
    data: {
        icon: string,
        title: string,
        text: string
    }
}

export function ServicesCard({data}: Props) {
    return (
        <>
            <IconBox icon={`${data.icon} w-1/5 text-3xl text-blue-700`}/>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold pt-6 md:pt-9 lg:pt-12">{data.title}</h2>
            <p className="text-[10px] sm:text-sm lg:text-base mt-3">{data.text}</p>
        </>
    )
        ;
}