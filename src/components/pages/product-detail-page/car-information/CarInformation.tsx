import {CarFeatures, PhoneButton} from "@/components";

interface Props {
    
}

export function CarInformation({}: Props) {
    //Todo add Api for CarFeatures component
    return (
        <>
            <h1 className="font-bold text-xl lg:text-3xl mb-3">SMART GT AA-211</h1>
            <h4 className="text-sm text-secondary-50 mb-3 tracking-[3px] text-secondary-200">SPORT CAR</h4>
            <p className="w-10/12 max-w-md text-sm text-secondary-100 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className={"flex flex-col mb-5 lg:mb-10"}>
                <CarFeatures item={"/"}/>
            </div>
            <div className="mb-5 flex gap-3">
                <span
                    className="bg-primary-100 text-white font-bold text-xs md:text-sm lg:text-base rounded-md px-5 py-2">$ 34,500</span>
                <PhoneButton buttonStyle={"bg-White-200 hover:shadow-lg border border-White-200 hover:border-primary-100"}/>
            </div>
        </>
    );
}