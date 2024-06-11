import {IconBox} from "@/components";
import {useMutation, useQuery} from "@tanstack/react-query";
import {ApiResponseType, CarsType, EntityType, fuelType, ModelBrandClassType} from "@/types";
import {getAllBrandsApi, getAllCarsApi, getAllClassesApi} from "@/api";
import {useForm} from "react-hook-form";
import {getAllFuelsApi} from "@/api/fuels";
import {getAllTransitionsApi} from "@/api/transitions";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import useDebounce from "@/hooks/use-debounce";
import Link from "next/link";

interface Props {

}

interface FormInput {
    carSearch: string
}

interface FilterData {
    title: {
        $containsi: string
    }
}


export function Filter({}: Props) {

    const [searchData, setSearchData] = useState<Array<EntityType<CarsType>>>()

    const router = useRouter()

    const {mutate} = useMutation({
        mutationFn: (data: FilterData) => getAllCarsApi({
            filters: data
        })
    })

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

    const {data: fuelsData} = useQuery<ApiResponseType<fuelType>>({
        queryFn: () => getAllFuelsApi({}),
        queryKey: [getAllFuelsApi.name]
    })

    const {data: transitionsData} = useQuery<ApiResponseType<fuelType>>({
        queryFn: () => getAllTransitionsApi({}),
        queryKey: [getAllTransitionsApi.name]
    })

    const searchForm = useForm<FormInput>()

    const filterForm = useForm()

    const submitHandler = (filterData: any) => {
        let filter = {
            carBrand: filterData.carBrand,
            carClass: filterData.carClass,
            carFuel: filterData.carFuel,
            carTransmission: filterData.carTransmission
        }
        router.replace({pathname: '/products', query: filter}, undefined, {scroll: false})
    }

    const onsubmit = (searchData: FormInput) => {

        if (searchData.carSearch.length <= 1)
            return

        mutate({
            title: {
                '$containsi': searchData.carSearch
            }
        }, {
            'onSuccess': (response) => setSearchData(response.data)
        })
    }

    const carSearch = searchForm.watch('carSearch')

    useEffect(() => {
        if (carSearch) {
            delay()
        } else {
            setSearchData([])
        }

    }, [carSearch])

    const delay = useDebounce(searchForm.handleSubmit(onsubmit), 1000)


    return (
        <>
            <aside>
                <nav className="pt-5 lg:pt-20">
                    <button className="border-2 border-White-200 py-[5px] px-4 rounded-lg text-center
                    hover:bg-White-200 hover:shadow-lg
                    md:hidden">
                        <IconBox icon={'icon-menu text-xl text-secondary-400'}/>
                    </button>

                    <div
                        className="absolute bg-White-200 font-semibold z-50 left-0 top-0 w-fit py-5 px-4 -translate-x-full sm:w-8/12 md:h-fit md:translate-x-0 md:relative md:bg-transparent md:w-fit md:gap-4 md:p-0 2xl:gap-7 h-screen">
                        <div className="md:hidden">
                            <button className="px-3 py-1 rounded-md relative -top-2 -left-2 border hover:shadow-lg">
                                X
                            </button>
                        </div>
                        <div className="max-w-xs">
                            <h2 className="uppercase font-bold text-4xl pt-32 md:pt-5">
                                Filter
                            </h2>
                            <h3 className="text-secondary-50 pt-1">
                                Search your car
                            </h3>

                            <div className={'relative'}>
                                <form action="" /* onSubmit={searchForm.handleSubmit(onsubmit)} */
                                      className={'className="flex items-center'}>
                                    <div
                                        className="h-12 relative mt-10 bg-White-50 rounded-lg hover:border border-secondary-50 px-5">
                                        <input className="h-full w-full outline-none  bg-transparent font-normal"
                                               type="text"
                                               placeholder="Search here..." {...searchForm.register('carSearch')}/>
                                        <IconBox icon={'icon-search text-xl text-secondary-10 absolute right-5 top-2'}/>
                                    </div>
                                </form>

                                {
                                    searchData &&
                                    <div className={'absolute rounded-lg bg-gray-500 w-max z-50 left-full ml-1 top-0 text-center'}>
                                        <ul>
                                            {
                                                searchData.map((item: EntityType<CarsType>) => {
                                                    return <li
                                                        className={'p-4 m-2 bg-gray-200 rounded-2xl hover:bg-green-200 hover:text-white hover:cursor-pointer'}>
                                                        <Link href={`/product/${item.id}`}>
                                                            {item.attributes.title}
                                                        </Link>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                }

                            </div>

                            <form action="" onSubmit={filterForm.handleSubmit(submitHandler)}>
                                <div>
                                    <select
                                        className="h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"
                                        {...filterForm.register('carBrand')}>
                                        <option value={''} className="text-secondary-50">
                                            Choose Brand
                                        </option>

                                        {
                                            brandsData &&
                                            brandsData.data.map((item) => {
                                                return (
                                                    item.attributes.title == router.query.carBrand ?

                                                        <option value={item.attributes.title} selected={true}
                                                                className="text-secondary-50">
                                                            {item.attributes.title}
                                                        </option>
                                                        :
                                                        <option value={item.attributes.title}
                                                                className="text-secondary-50">
                                                            {item.attributes.title}
                                                        </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div>
                                    <select
                                        className="h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"
                                        {...filterForm.register('carClass')}>
                                        <option value={''} className="text-secondary-50">
                                            Choose Class
                                        </option>

                                        {
                                            classesData &&
                                            classesData.data.map((item) => {
                                                return (
                                                    item.attributes.title == router.query.carClass ?

                                                        <option value={item.attributes.title} selected={true}
                                                                className="text-secondary-50">
                                                            {item.attributes.title}
                                                        </option>
                                                        :
                                                        <option value={item.attributes.title}
                                                                className="text-secondary-50">
                                                            {item.attributes.title}
                                                        </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div>
                                    <select
                                        className="h-12 w-full relative mt-12 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"
                                        {...filterForm.register('carFuel')}>
                                        <option value={''} className="text-secondary-50">
                                            Any fuel
                                        </option>

                                        {
                                            fuelsData &&
                                            fuelsData.data.map((item) => {
                                                return (
                                                    item.attributes.type == router.query.carFuel ?

                                                        <option value={item.attributes.type} selected={true}
                                                                className="text-secondary-50">
                                                            {item.attributes.type}
                                                        </option>
                                                        :
                                                        <option value={item.attributes.type}
                                                                className="text-secondary-50">
                                                            {item.attributes.type}
                                                        </option>
                                                )
                                            })
                                        }

                                    </select>
                                </div>
                                <div>
                                    <select
                                        className="h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"
                                        {...filterForm.register('carTransmission')}>
                                        <option value={''} className="text-secondary-50">
                                            Any Transmission
                                        </option>

                                        {
                                            transitionsData &&
                                            transitionsData.data.map((item) => {
                                                return (
                                                    item.attributes.type == router.query.carFuel ?

                                                        <option value={item.attributes.type} selected={true}
                                                                className="text-secondary-50">
                                                            {item.attributes.type}
                                                        </option>
                                                        :
                                                        <option value={item.attributes.type}
                                                                className="text-secondary-50">
                                                            {item.attributes.type}
                                                        </option>
                                                )
                                            })
                                        }

                                    </select>
                                </div>

                                <button type="submit"
                                        className=" h-12 w-full px-5 mt-7 bg-primary-100 rounded-lg flex justify-between items-center text-white shadow-6xl">
                                    <IconBox icon={'icon-angleRight'} title={'FIND CARS'}
                                             titleClassName={'order-first'}/>
                                </button>
                            </form>

                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}