import {ImageView} from "@/components";

interface Props {
    data: any
}

export function VerticalSliderCard({data}: Props) {
    return (
        <>
            <ImageView height={1920} width={1280} classname="object-cover object-center h-full"
                       src={data} alt=""/>
        </>
    )
}