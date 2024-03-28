import {CarFeatures, PhoneButton} from "@/components";

interface Props {
        name: string,
        model: string,
        information: string
        price: string

}

export function ProductSpecification({name, model, information, price}: Props) {
    //Todo add Api for CarFeatures component
    return (
        <>
            <h1 className="font-bold text-xl lg:text-3xl mb-3">{name}</h1>
            <h4 className="text-sm text-secondary-50 mb-3 tracking-[3px] text-secondary-200">{model}</h4>
            <p className="w-10/12 max-w-md text-sm text-secondary-100 mb-5">{information}</p>
            <div className={"flex flex-col mb-5 lg:mb-10"}>
                <CarFeatures item={"/"}/>
            </div>
            <div className="mb-5 flex gap-3">
                <span className="bg-primary-100 text-white font-bold text-xs md:text-sm lg:text-base rounded-md px-5 py-2">$ {price}</span>
                <PhoneButton buttonStyle={"bg-White-200 hover:shadow-lg border border-White-200 hover:border-primary-100"}/>
            </div>
        </>
    );
}