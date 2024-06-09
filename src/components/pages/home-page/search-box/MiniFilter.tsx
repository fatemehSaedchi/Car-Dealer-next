
import {IconBox, PopularBrands} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getAllBrandsApi, getAllClassesApi} from "@/api";
import {ApiResponseType, ModelBrandClassType} from "@/types";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {CarFilterType} from "@/types/carFilter";

interface Props {
    className?: string
}

export function MiniFilter({className}: Props) {

    const {data: popularBrandsData} = useQuery(
        {
            queryKey: [getAllBrandsApi.name + ' popularBrandsData'],
            queryFn: () => getAllBrandsApi({
                pagination: {
                    pageSize: 3
                }
            })
        }
    )


    const {data: brandsData} = useQuery<ApiResponseType<ModelBrandClassType>>({
        queryFn: () => getAllBrandsApi({}),
        queryKey: [getAllBrandsApi.name]
    })

    const {data: classesData} = useQuery<ApiResponseType<ModelBrandClassType>>({
        queryFn: () => getAllClassesApi({}),
        queryKey: [getAllClassesApi.name]
    })

    // const {data: modelsData} = useQuery<ApiResponseType<ModelBrandClassType>>({
    //     queryFn: () => getAllModelsApi({}),
    //     queryKey: [getAllModelsApi.name]
    // })

    const router = useRouter()
    const {register, handleSubmit} = useForm()


    const submitHandler = (data: CarFilterType) => {
        let filter  = {
            carBrand : data.carBrand,
            carClass: data.carClass,
        }
        router.push({pathname:'/products', query: filter})
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)} className={className}>
                <div
                    className="rounded-xl shadow-3xl sm:w-[600px] xl:w-[700px] 2xl:w-[850px] relative z-50 bg-white mt-7">
                    <div className="flex items-center justify-between h-24 xl:h-28 py-4 px-4 lg:px-6">

                        <select {...register("carBrand")}
                                className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg sm:pl-6 2xl:px-12 cursor-pointer relative w-full h-full hover:text-blue-600">
                            <option selected={true} defaultValue={'Brands'} value={''}>
                                {"Brands"}
                            </option>
                            {
                                brandsData &&
                                brandsData.data.map(
                                    (value,index) => {
                                        return (
                                            <option value={value.attributes.title} key={index}>
                                                {value.attributes.title}
                                            </option>
                                        )
                                    }
                                )
                            }
                        </select>

                        <select {...register("carClass")}
                                className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg sm:pl-6 2xl:px-12 cursor-pointer relative w-full h-full hover:text-blue-600">
                            <option selected={true} value={''}>
                                {"Classes"}
                            </option>
                            {
                                classesData &&
                                classesData.data.map(
                                    (value,index) => {
                                        return (
                                            <option value={value.attributes.title} key={index}>
                                                {value.attributes.title}
                                            </option>
                                        )
                                    }
                                )
                            }
                        </select>

                        {/*<select {...register("CarModel")}*/}
                        {/*        className="font-bold text-White-100 text-[10px] sm:text-base xl:text-lg sm:pl-6 2xl:px-12 cursor-pointer relative w-full h-full hover:text-blue-600">*/}
                        {/*    <option selected={true} value={''}>*/}
                        {/*        {"MODEL"}*/}
                        {/*    </option>*/}
                        {/*    {*/}
                        {/*        modelsData &&*/}
                        {/*        modelsData.data.map(*/}
                        {/*            (value) => {*/}
                        {/*                return (*/}
                        {/*                    <option value={value.attributes.title}>*/}
                        {/*                        {value.attributes.title}*/}
                        {/*                    </option>*/}
                        {/*                )*/}
                        {/*            }*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</select>*/}

                        <button type={"submit"}
                                className="bg-primary-100 text-[10px] sm:text-base xl:text-lg text-white font-bold h-full px-5 sm:px-8 rounded-lg hover:bg-gray-400 hover:text-blue-600">
                            FIND
                            <IconBox icon={'icon-rightArrow pl-8 sm:pl-14 '}/>
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <Link href={'/products'}
                      className="text-primary-100 text-sm sm:text-base md:text-lg pt-7">
                    Try advanced search
                    <IconBox icon={"icon-rightArrow pl-6"}/>
                </Link>
                <div>
                    <h3 className="text-xs md:text-base text-secondary-100 pt-8 2xl:pt-14">
                        Popular Brands
                    </h3>
                    {
                        popularBrandsData &&
                        <PopularBrands data={popularBrandsData}/>
                    }
                </div>
            </div>

        </>
    )
}