import {FilterSelect, IconBox, ImageView} from "@/components";
import {useMutation, useQuery} from "@tanstack/react-query";
import {ApiResponseType, CarSpecificsType, CarsType, EntityType} from "@/types";
import {getAllBrandsApi,getAllCarsApi, getAllClassesApi} from "@/api";
import {useForm, FormProvider } from "react-hook-form";
import {getAllFuelsApi} from "@/api/fuels";
import {getAllTransitionsApi} from "@/api/transitions";
import {useRouter} from "next/router";
import {useEffect, MouseEvent, Dispatch, SetStateAction,useState} from "react";
import useDebounce from "@/hooks/use-debounce";
import {useOverlay} from "@/hooks";
import Link from "next/link";


interface Props {
    mobileFilter: boolean
    setMobileFilter: Dispatch<SetStateAction<boolean>>
}

interface FormInput {
    carSearch: string
}

interface FilterData {
    title: {
        $containsi: string
    }
}

export function Filter({mobileFilter, setMobileFilter}: Props) {

    const [searchData, setSearchData] = useState<Array<EntityType<CarsType>>>()

    const router = useRouter()

    const {mutate} = useMutation({
        mutationFn: (data: FilterData) => getAllCarsApi({
            filters: data
        })
    })

    const {data: brandsData} = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllBrandsApi({}),
        queryKey: [getAllBrandsApi.name]
    })

    const {data: classesData} = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllClassesApi({}),
        queryKey: [getAllClassesApi.name]
    })

    // const {data: modelsData} = useQuery<ApiResponseType<CarSpecificsType>>({
    //     queryFn: () => getAllModelsApi({}),
    //     queryKey: [getAllModelsApi.name]
    // })

    const {data: fuelsData} = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllFuelsApi({}),
        queryKey: [getAllFuelsApi.name]
    })

    const {data: transitionsData} = useQuery<ApiResponseType<CarSpecificsType>>({
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

    const closeFilterHandler = () =>{
        setMobileFilter(false)
    }

    const filterBodyHandler = (e : MouseEvent)=>{
        e.stopPropagation()
    }


    useEffect(() => {
        if (mobileFilter){
            document.body.style.overflowY = 'hidden'
        }else {
            document.body.style.overflowY = 'auto'
        }
        return () =>{
            document.body.style.overflowY = 'auto'
        }
    }, [mobileFilter]);

    useOverlay({
        onClick: () => {
            setMobileFilter(false)
        }
    })

    return (
        <aside>
            <nav className="pt-5 lg:pt-20">
                <div onClick={filterBodyHandler}
                     className={`${mobileFilter ? 'translate-x-0 fixed' : '-translate-x-full fixed'} overflow-y-auto md: bg-[#fff] text-secondary-400 font-semibold z-[99] left-0 top-0 w-full h-screen py-5 px-4 sm:w-8/12 md:translate-x-0 md:relative md:flex md:bg-transparent md:w-fit md:gap-4 md:p-0 md:h-fit`}>
                    <div className="md:hidden">
                        <ImageView src={'/assets/images/filterWave.png'} alt={'filterWave'} width={1000} height={400}
                                   classname={'absolute top-0 right-0 left-0'}/>
                        <button className="relative text-white font-bold" onClick={closeFilterHandler}>
                            X
                        </button>
                    </div>
                    <div className="max-w-xs overflow-y-auto h-full">
                        <h2 className="uppercase font-bold text-4xl pt-32 md:pt-5">
                            Filter
                        </h2>
                        <h3 className="text-secondary-50 pt-1">
                            Search your car
                        </h3>

                        <div className={'relative'}>
                            <form action="" /* onSubmit={searchForm.handleSubmit(onsubmit)} */ className={'className="flex items-center'}>
                                <div className="h-10 relative mt-10 bg-white border border-White-100 rounded hover:border px-3">
                                    <input className="search-input h-full w-full outline-none bg-transparent font-normal"
                                           type="text"
                                           placeholder="Search here..." {...searchForm.register('carSearch')} />
                                    <IconBox icon={'icon-search text-xl text-secondary-10 absolute right-5 top-[6px]'}/>
                                </div>
                            </form>

                            {
                                searchData &&
                                <div
                                    className={'absolute rounded-lg bg-gray-500 w-max z-50 left-full ml-1 top-0 text-center'}>
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
                        <FormProvider {...filterForm}>
                            <form action="" onSubmit={filterForm.handleSubmit(submitHandler)}>
                                {brandsData &&
                                    <FilterSelect
                                        data={brandsData}
                                        queryKey={'carBrand'}
                                        placeholder={'Choose Brand'}
                                        className="mt-4"
                                    />
                                }

                                {classesData &&
                                    <FilterSelect
                                        data={classesData}
                                        queryKey={'carClass'}
                                        placeholder={'Choose Class'}
                                        className="mt-4"
                                    />
                                }

                                {fuelsData &&
                                    <FilterSelect
                                        data={fuelsData}
                                        queryKey={'carFuel'}
                                        placeholder={'Any fuel'}
                                        className="mt-4"
                                    />
                                }

                                {transitionsData &&
                                    <FilterSelect
                                        data={transitionsData}
                                        queryKey={'carTransmission'}
                                        placeholder={'Any Transmission'}
                                        className="mt-4"
                                    />
                                }

                                <button type="submit" onClick={closeFilterHandler}
                                        className="h-12 w-full px-5 mt-7 bg-primary-100 rounded-lg flex justify-between items-center text-white shadow-6xl">
                                    <IconBox icon={'icon-angleRight'} title={'FIND CARS'}
                                             titleClassName={'order-first'}/>
                                </button>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </nav>
        </aside>
    )
}