import {IconBox} from "@/components";

interface Props {
    data:{
        icon: string,
        title: string,
        text: string
    }
}

export function ServicesCard({data}: Props) {
    return (
        <div className="basis-1/3 flex flex-col justify-center items-center shadow-Xl rounded-2xl bg-white">
            <div className="w-4/5 py-5 lg:py-8">
                <IconBox icon={`${data.icon} w-1/5`}/>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold pt-6 md:pt-9 lg:pt-12">{data.title}</h2>
                <p className="text-[10px] sm:text-sm lg:text-base mt-3">{data.text}</p>
            </div>
        </div>
    );
}