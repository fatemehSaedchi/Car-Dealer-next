import {Paginate, ProductsListCard} from "@/components";
import {Root} from "@/mock";

interface Props {
    data : Root
}

export function ProductsList({data}: Props) {
    return (
        <>
            <div className="grid grid-cols-1 gap-y-9 xl:grid-cols-2 mt-10">

                {
                    data && 
                    data.data.map((value, index)=>{
                        return(
                            <ProductsListCard key={index} data={value}/>
                        )
                    })
                }

                <Paginate data={data.meta}/>
            </div>
        </>
    )
}