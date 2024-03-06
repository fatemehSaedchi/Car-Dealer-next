import {IconBox, SearchList} from "@/components";
import Link from "next/link";
import {carModels} from "@/mock/carModels";
import {carClasses} from "@/mock/carClasses";
import {carModel} from "@/mock/carModel";

interface Props {

}

export function SearchBox({}: Props) {
    return (
        <div>
            <div className="rounded-xl shadow-3xl sm:w-[600px] xl:w-[700px] 2xl:w-[850px] relative z-50 bg-white mt-7">
                <div className="flex items-center justify-between h-24 xl:h-28 py-4 px-4 lg:px-6">
                    <div className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg sm:pl-6 2xl:px-12 cursor-pointer relative">BRAND
                        <IconBox icon={'icon-chevron-down'}/>
                        <SearchList searchData={carModels}/>
                    </div>
                    <div
                        className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg pl-4 sm:pl-6 2xl:px-12 cursor-pointer border-l-2 relative">CLASS
                        <IconBox icon={'icon-chevron-down'}/>
                        <SearchList searchData={carClasses}/>
                    </div>
                    <div className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg pl-4 sm:pl-6 2xl:px-12 cursor-pointer border-l-2 relative">MODEL
                        <IconBox icon={'icon-chevron-down'}/>
                        <SearchList searchData={carModel}/>
                    </div>
                    <button className="bg-primary-100 text-[10px] sm:text-base xl:text-lg text-white font-bold h-full px-5 sm:px-8 rounded-lg ">FIND
                        <IconBox icon={'icon-arrow-right pl-8 sm:pl-14 '}/>
                    </button>
                </div>
            </div>
        </div>
    );
}