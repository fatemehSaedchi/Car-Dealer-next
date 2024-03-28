import {Paginate, ProductsListCard} from "@/components";
import {Root} from "@/mock";

interface Props {
    data : Root
}

export function ProductsList({data}: Props) {
    return (
        <>
            <div className="grid gap-x-4 gap-y-9 mt-10 2xl:grid-cols-3 justify-center items-center">

                {
                    data && 
                    data.data.map((value, index)=>{
                        return(
                            <ProductsListCard className={'col-span-2 xl:col-span-1 block'} key={index} data={value}/>
                        )
                    })
                }

                <Paginate data={data.meta}/>
            </div>
        </>
    )
}