// todo replace mock data with api

import {IconBox, SearchList} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getAllBrandsApi, getAllClassesApi, getAllModelsApi} from "@/api";
import {ApiResponseType, ModelBrandClassType} from "@/types";

interface Props {
    className?: string
}

export function SearchBox({className}: Props) {

    const {data: brandsData} = useQuery<ApiResponseType<ModelBrandClassType>>({
        queryFn: () => getAllBrandsApi({}),
        queryKey: [getAllBrandsApi.name]
    })

    const {data: classesData} = useQuery<ApiResponseType<ModelBrandClassType>>({
        queryFn: () => getAllClassesApi({}),
        queryKey: [getAllClassesApi.name]
    })

    const {data: modelsData} = useQuery<ApiResponseType<ModelBrandClassType>>({
        queryFn: () => getAllModelsApi({}),
        queryKey: [getAllModelsApi.name]
    })
    // todo complete the component to send filters

    return (
        <form className={className}>
            <div className="rounded-xl shadow-3xl sm:w-[600px] xl:w-[700px] 2xl:w-[850px] relative z-50 bg-white mt-7">
                <div className="flex items-center justify-between h-24 xl:h-28 py-4 px-4 lg:px-6">
                    {
                        brandsData &&
                        <SearchList searchData={brandsData} defaultValue={"Brands"}/>
                    }
                        {
                            classesData &&
                            <SearchList searchData={classesData} defaultValue={'Classes'}/>
                        }
                        {
                            modelsData &&
                            <SearchList searchData={modelsData} defaultValue={"MODEL"}/>
                        }
                    <button type={"submit"}
                        className="bg-primary-100 text-[10px] sm:text-base xl:text-lg text-white font-bold h-full px-5 sm:px-8 rounded-lg hover:bg-gray-400 hover:text-blue-600">
                        FIND
                        <IconBox icon={'icon-rightArrow pl-8 sm:pl-14 '}/>
                    </button>
                </div>
            </div>
        </form>
    )
}