import {Meta} from "@/mock";
import {IconBox} from "@/components";

interface Props {
    data: Meta
}

export function Paginate({data}: Props) {

    let pages = []

    for (let i = data.pagination.page; i <=  data.pagination.total ; i++) {
        pages.push(i)
    }
    pages = pages.splice(0,3)

    return (
            <ul className="flex gap-3 justify-center items-center mt-10 col-span-2 2xl:col-span-3">

                {
                    !pages.includes(1) &&

                    <li>
                        <IconBox
                            icon={'icon-angleLeft hover:bg-primary-100 hover:text-White-200 bg-White-200 text-primary-100 py-2 px-7 rounded-lg  font-bold active:bg-primary-100 active:text-white'}/>
                    </li>
                }

                {
                    data &&
                    pages.map((value : number | string, index)=>{
                        return (
                            <li key={index}
                               className={`${value === data.pagination.page ? 'bg-primary-100 text-White-200' : 'bg-White-200 text-primary-100'}  py-2 px-7 rounded-lg  font-bold active:bg-primary-100 active:text-white`}>
                                {value}
                            </li>
                        )
                    })
                }

                {
                    !pages.includes(data.pagination.total) &&
                    <li>
                        <IconBox
                            icon={'icon-angleRight hover:bg-primary-100 hover:text-White-200 bg-White-200 text-primary-100 py-2 px-7 rounded-lg  font-bold active:bg-primary-100 active:text-white'}/>
                    </li>
                }
            </ul>
    )
}