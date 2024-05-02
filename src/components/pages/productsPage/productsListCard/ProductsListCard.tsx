import {CarFeatures, IconBox, ImageView} from "@/components";
import {Daum} from "@/mock";
import {twMerge} from "tailwind-merge";

interface Props {
data: Daum
    className?: string
}

export function ProductsListCard({data, className}: Props) {
    return (
        <>
            <div
                className={twMerge("w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-7xl hover:shadow-8xl hover:transition-shadow hover:duration-500 duration-500 cursor-pointer relative", className) }>
                <div className={'relative'}>
                    <ImageView classname="h-48 w-full object-cover object-center"
                               src={data.attributes.thumbnail.data.attributes.formats.thumbnail.url} height={data.attributes.thumbnail.data.attributes.height} width={data.attributes.thumbnail.data.attributes.width} alt=""/>
                    <div className={'flex items-center justify-center opacity-0 w-full h-full absolute z-50 backdrop-blur-sm mx-auto top-0 hover:opacity-100 hover:transition-opacity hover:duration-500 duration-500 '}>
                        <IconBox icon={'icon-search text-5xl text-white'}/>
                    </div>
                </div>
                <div className="flex flex-col items-start py-8 px-5">
                    <h3 className="text-2xl font-bold">
                        {data.attributes.title}
                    </h3>
                    <h4 className="text-secondary-50 text-xs font-semibold pt-1">
                        {data.attributes.car_class.data.attributes.title} CAR
                    </h4>
                    <span
                        className="px-4 py-2 bg-primary-100 rounded-[30px] text-base font-semibold text-white absolute top-[45%] right-5 z-50">
                        $ {data.attributes.price}
                    </span>
                    <CarFeatures data={data.attributes}/>
                </div>
            </div>
        </>
    )
}