import {IconBox, ImageView} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType, fuelType, ModelBrandClassType} from "@/types";
import {getAllBrandsApi, getAllClassesApi} from "@/api";
import {useForm} from "react-hook-form";
import {getAllFuelsApi} from "@/api/fuels";
import {getAllTransitionsApi} from "@/api/transitions";
import {useRouter} from "next/router";
import {useEffect, MouseEvent, Dispatch, SetStateAction} from "react";
import {useOverlay} from "@/hooks";

interface Props {
    mobileFilter: boolean
    setMobileFilter: Dispatch<SetStateAction<boolean>>
}

export function Filter({mobileFilter, setMobileFilter}: Props) {

    const router = useRouter()

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

    const {register, handleSubmit} = useForm()

    const submitHandler = (data: any) => {
        let filter = {
            carSearch: data.carSearch,
            carBrand: data.carBrand,
            carClass: data.carClass,
            carFuel: data.carFuel,
            carTransmission: data.carTransmission
        }
        router.replace({pathname: '/products', query: filter}, undefined, {scroll: false})
    }

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
                <div onClick={filterBodyHandler} className={`${mobileFilter ? 'translate-x-0 fixed' : '-translate-x-full fixed'} overflow-y-auto bg-[#fff] text-secondary-400 font-semibold z-[99] left-0 top-0 w-full h-screen py-5 px-4 sm:w-8/12 md:translate-x-0 md:relative md:flex md:bg-transparent md:w-fit md:gap-4 md:p-0 md:h-fit`}>
                    <div className="md:hidden">
                        <ImageView src={'/assets/images/filterWave.png'} alt={'filterWave'} width={1000} height={400} classname={'absolute top-0 right-0 left-0'}/>
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
                        <form action="" onSubmit={handleSubmit(submitHandler)}>
                            <div
                                className="h-12 relative mt-10 bg-White-50 rounded-lg hover:border border-secondary-50 px-5">
                                <input className="h-full w-full outline-none  bg-transparent font-normal"
                                       type="text" placeholder="Search here..." {...register('carSearch')}/>
                                <IconBox icon={'icon-search text-xl text-secondary-10 absolute right-5 top-2'}/>
                            </div>
                            <div className={'relative'}>
                                <select
                                    className="appearance-none h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"{...register('carBrand')}>
                                    <option value={''} className="text-secondary-50 relative">
                                        Choose Brand
                                    </option>
                                    {
                                        brandsData &&
                                        brandsData.data.map((item, index) => {
                                            return (
                                                item.attributes.title == router.query.carBrand ?

                                                    <option value={item.attributes.title} selected={true}
                                                            className="text-secondary-50" key={index}>
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
                                <div className={'absolute right-4 top-7 pointer-events-none'}><IconBox icon={'icon-angleDown text-secondary-400'} size={8}/></div>
                            </div>
                            <div className={'relative'}>
                                <select className="appearance-none h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"
                                    {...register('carClass')}>
                                    <option value={''} className="text-secondary-50">
                                        Choose Class
                                    </option>

                                    {
                                        classesData &&
                                        classesData.data.map((item, index) => {
                                            return (
                                                item.attributes.title == router.query.carClass ?

                                                    <option value={item.attributes.title} selected={true}
                                                            className="text-secondary-50" key={index}>
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
                                <div className={'absolute right-4 top-7 pointer-events-none'}><IconBox icon={'icon-angleDown text-secondary-400'} size={8}/></div>
                            </div>
                            <div className={'relative'}>
                                <select className="appearance-none h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"
                                    {...register('carFuel')}>
                                    <option value={''} className="text-secondary-50">
                                        Any fuel
                                    </option>
                                    {
                                        fuelsData &&
                                        fuelsData.data.map((item, index) => {
                                            return (
                                                item.attributes.type == router.query.carFuel ?

                                                    <option value={item.attributes.type} selected={true}
                                                            className="text-secondary-50" key={index}>
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
                                <div className={'absolute right-4 top-7 pointer-events-none'}><IconBox icon={'icon-angleDown text-secondary-400'} size={8}/></div>
                            </div>
                            <div className={'relative'}>
                                <select
                                    className="appearance-none h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium"
                                    {...register('carTransmission')}>
                                    <option value={''} className="text-secondary-50">
                                        Any Transmission
                                    </option>
                                    {
                                        transitionsData &&
                                        transitionsData.data.map((item, index) => {
                                            return (
                                                item.attributes.type == router.query.carFuel ?

                                                    <option value={item.attributes.type} selected={true}
                                                            className="text-secondary-50" key={index}>
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
                                <div className={'absolute right-4 top-7 pointer-events-none'}><IconBox icon={'icon-angleDown text-secondary-400'} size={8}/></div>
                            </div>
                            <button type="submit"
                                    className=" h-12 w-full px-5 mt-7 bg-primary-100 rounded-lg flex justify-between items-center text-white shadow-6xl">
                                <IconBox icon={'icon-angleRight'} title={'FIND CARS'} titleClassName={'order-first'}/>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </aside>
    )
}