// todo replace mock data with api

import {IconBox} from "@/components";
import {CarBrandsMock, CarClassesMock, CarModelsMock} from "@/mock";

interface Props {

}

export function Filter({}: Props) {
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
                        className="absolute overflow-y-auto bg-White-200 font-semibold z-50 left-0 top-0 w-fit py-5 px-4 -translate-x-full sm:w-8/12 md:h-fit md:translate-x-0 md:relative md:bg-transparent md:w-fit md:gap-4 md:p-0 2xl:gap-7 h-screen">
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
                            <div
                                className="h-12 relative mt-10 bg-White-50 rounded-lg hover:border border-secondary-50 px-5">
                                <input className="h-full w-full outline-none  bg-transparent font-normal"
                                       type="text" placeholder="Search here..."/>
                                <IconBox icon={'icon-search text-xl text-secondary-10 absolute right-5 top-2'}/>
                            </div>
                            <div>
                                <select
                                    className="h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium">
                                    <option disabled={true} selected={true} className="text-secondary-50">
                                        Choose Brand
                                    </option>

                                    {
                                        CarBrandsMock &&
                                        CarBrandsMock.data.map((item)=>{
                                            return (
                                                <option value={item.attributes.title} className="text-secondary-50">
                                                    {item.attributes.title}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <select
                                    className="h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium">
                                    <option disabled={true} selected={true} className="text-secondary-50">
                                        Choose Class
                                    </option>

                                    {
                                        CarClassesMock &&
                                        CarClassesMock.map((item)=>{
                                            return (
                                                <option value={item} className="text-secondary-50">
                                                    {item}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="flex w-full justify-between text-secondary-50 mt-4">
                                <h4>
                                    Model
                                </h4>
                                <label className={"flex gap-2"}>
                                    <input type="checkbox"/>
                                    Select All
                                    </label>
                            </div>
                            <div className="grid grid-cols-2 w-4/5 mt-8 gap-3">
                                <label
                                    className={`border md:border-2 border-primary-100 md:border-White-200 rounded-lg hover:bg-White-200 text-primary-100 p-3 text-center text-sm active:bg-primary-100 active:text-white md:active:bg-White-200`}>
                                    Select All
                                    <input className={'hidden'} type={"checkbox"}/>
                                </label>


                                {
                                    CarModelsMock &&
                                    CarModelsMock.map((item) => {
                                        return (
                                            <label
                                                className="border md:border-2 border-primary-100 md:border-White-200 rounded-lg hover:bg-White-200 text-primary-100 p-3 text-center text-sm active:bg-primary-100 active:text-white md:active:bg-White-200">
                                                {item}
                                                <input className={'hidden'} type={"checkbox"}/>
                                            </label>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <h4 className="text-secondary-50 mt-8 block">
                                    Price range
                                </h4>

                                {
                                    // todo replace the range input with a library
                                    // todo add min and max value with cheapest and most expensive car price
                                }
                                <label>
                                    min
                                    <input type={"range"} dir={'rtl'}
                                           className="w-full h-1.5 bg-White-50 mt-4 mx-auto bg-primary-100 relative"/>
                                </label>
                                <label>
                                    max
                                    <input type={"range"}
                                           className="w-full h-1.5 bg-White-50 mt-4 mx-auto bg-primary-100 relative"/>
                                </label>
                            </div>
                            <div>
                                <select
                                    className="h-12 w-full relative mt-12 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium">
                                    <option selected={true} className="text-secondary-50">
                                        Any fuel
                                    </option>
                                    <option  className="text-secondary-50">
                                        Electric
                                    </option>
                                    <option className="text-secondary-50">
                                        gas
                                    </option>
                                </select>
                            </div>
                            <div>
                                <select
                                    className="h-12 w-full relative mt-4 bg-White-50 rounded-lg hover:border border-secondary-50 px-5 text-secondary-50 font-medium">
                                    <option disabled={true} selected={true} className="text-secondary-50">
                                        Transmission
                                    </option>
                                    <option className="text-secondary-50">
                                        Automatic
                                    </option>
                                    <option className="text-secondary-50">
                                        manual
                                    </option>
                                </select>
                            </div>

                            <button type="submit"
                                    className=" h-12 w-full px-5 mt-7 bg-primary-100 rounded-lg flex justify-between items-center text-white shadow-6xl">
                                <IconBox icon={'icon-angleRight'} title={'FIND CARS'} titleClassName={'order-first'}/>
                            </button>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}