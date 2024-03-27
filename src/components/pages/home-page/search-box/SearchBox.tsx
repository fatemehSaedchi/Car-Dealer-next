// todo replace mock data with api

import {IconBox, SearchList} from "@/components";
import {CarClassesMock, CarModelsMock} from "@/mock";

interface Props {
    className?: string
}

export function SearchBox({className}: Props) {
    return (
        <div className={className}>
            <div className="rounded-xl shadow-3xl sm:w-[600px] xl:w-[700px] 2xl:w-[850px] relative z-50 bg-white mt-7">
                <div className="flex items-center justify-between h-24 xl:h-28 py-4 px-4 lg:px-6">
                    <div className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg sm:pl-6 2xl:px-12 cursor-pointer relative hover:text-blue-600">
                        BRAND
                        <IconBox icon={'icon-angleDown'}/>
                        <SearchList searchData={CarModelsMock}/>
                    </div>
                    <div
                        className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg pl-4 sm:pl-6 2xl:px-12 cursor-pointer border-l-2 relative hover:text-blue-600">
                        CLASS
                        <IconBox icon={'icon-angleDown'}/>
                        <SearchList searchData={CarClassesMock}/>
                    </div>
                    <div className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg pl-4 sm:pl-6 2xl:px-12 cursor-pointer border-l-2 relative hover:text-blue-600">
                        MODEL
                        <IconBox icon={'icon-angleDown'}/>
                        <SearchList searchData={CarModelsMock}/>
                    </div>
                    <button className="bg-primary-100 text-[10px] sm:text-base xl:text-lg text-white font-bold h-full px-5 sm:px-8 rounded-lg hover:bg-gray-400 hover:text-blue-600">
                        FIND
                        <IconBox icon={'icon-rightArrow pl-8 sm:pl-14 '}/>
                    </button>
                </div>
            </div>
        </div>
    )
}