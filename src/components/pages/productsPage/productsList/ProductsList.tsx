import { ProductsListCard} from "@/components";
import {ApiResponseType, CarsType} from "@/types";

interface Props {
    data : ApiResponseType<CarsType>
}

export function ProductsList({data}: Props) {
    return (
            // <div className="grid gap-x-4 gap-y-9 mt-10 2xl:grid-cols-3 justify-center items-center" >
                 <div className="flex flex-wrap gap-x-4 gap-y-9 mt-10 justify-center items-center" >

                {
                    data && 
                    data.data.map((value, index)=>{
                        return(
                            // <ProductsListCard className={'col-span-2 lg:col-span-1 block'} key={index} data={value}/>
                        <ProductsListCard className={'block'} key={index} data={value}/>
                        )
                    })
                }

            </div>
    )
}