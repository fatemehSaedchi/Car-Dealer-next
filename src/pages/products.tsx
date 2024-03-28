
// todo replace mock data with api

import {Filter, HeroSection, ProductsList, Section} from "@/components";
import {CarBrandsMock, CarsMock} from "@/mock";
interface Props {

}

export default function Products({}: Props) {
    return (
        <>


            <HeroSection title={'About Mobhil'}/>
            <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">


                <Filter/>

                <div className="xl:col-span-2">

                    <div className="flex flex-col lg:flex-row gap-5 pt-5 lg:pt-28 justify-between lg:items-center">
                        <h3 className="text-secondary-50">
                            Showing
                            <span className="font-bold">
                            {CarsMock.meta.pagination.pageSize} product from {CarsMock.meta.pagination.total * CarBrandsMock.meta.pagination.pageSize}
                        </span>
                        </h3>
                        <div>
                            <label className="text-secondary-50 flex gap-10 items-center">
                                Sort by
                                <select
                                    className="text-primary-100 bg-white border border-Purple-50 rounded-lg text-sm font-bold p-3">
                                    <option value="Newest">
                                        Newest
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <ProductsList data={CarsMock}/>

                </div>
            </Section>
        </>
    )
}