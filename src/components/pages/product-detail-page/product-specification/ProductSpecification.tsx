import {CarFeatures, PhoneButton} from "@/components"
import {CarsType, EntityType} from "@/types";

interface Props {
   data: EntityType<CarsType>
}

export function ProductSpecification({data}: Props) {

    return (
        <>
            <h1 className="font-bold text-xl lg:text-3xl mb-3">{data.attributes?.car_model?.data?.attributes?.title}</h1>
            <h4 className="text-sm text-secondary-50 mb-3 tracking-[3px] text-secondary-200">{data.attributes?.car_class?.data?.attributes?.title}</h4>
            <p className="w-10/12 max-w-md text-sm text-secondary-100 mb-5">{data.attributes?.excerpt}</p>
            <div className={"flex flex-col mb-5 lg:mb-10"}>
                <CarFeatures data={data}/>
            </div>
            <div className="mb-5 flex gap-3">
                <span className="bg-primary-100 text-white font-bold text-xs md:text-sm lg:text-base rounded-md px-5 py-2">$ {data.attributes?.price}</span>
                <PhoneButton buttonStyle={"bg-White-200 hover:shadow-lg border border-White-200 hover:border-primary-100"}/>
            </div>
        </>
    );
}