import {ImageView} from "@/components";

interface Props {
    data: any
    key: number
    first: boolean
    last: boolean
}

export function TeamCard({data, key, first, last}: Props) {
    return (
        <>
            <div
                className={`h-fit px-1 lg:px-3 2xl:px-6 relative ${key === data.length - 1 ? "col-end-4 sm:col-end-5" : ""}`}>
                {
                    first &&
                    <ImageView height={66} width={50} src="/assets/images/circleElement.svg" alt=""
                               classname="w-10 lg:w-16 absolute -left-2.5 -top-3 lg:-top-5"/>
                }
                {
                    last &&
                    <ImageView height={66} width={50} src="/assets/images/circleElement.svg" alt=""
                               classname="w-10 lg:w-16 absolute -left-2.5 bottom-16 lg:bottom-20"/>
                }
                <ImageView height={640} width={931} src={data.thumbNail}
                           alt=""
                           classname="w-full max-h-72 object-cover object-center rounded-xl"/>
                <h4 className="text-center font-bold text-xs lg:text-base pt-4">
                    {data.title}
                </h4>
            </div>
        </>
    )
}