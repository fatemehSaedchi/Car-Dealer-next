import {Meta} from "@/mock";
import {IconBox} from "@/components";
import {Dispatch, SetStateAction} from "react";

interface Props {
    data: Meta,
    pageSetter: Dispatch<SetStateAction<number>>
}

export function Paginate({data, pageSetter}: Props) {

    let pages = []
    let pageNum = data.pagination.page
    let totalPage = Math.ceil(data.pagination.total / data.pagination.pageSize)

    for (let i = pageNum; i <=  totalPage ; i++) {
        pages.push(i)
    }

    const decreament = () => {
        if (pageNum > 1){
            pageSetter(pageNum-1)
        }
    }
    const increament = () => {
        if (pageNum < totalPage){
            pageSetter(pageNum+1)
        }
    }
    pages = pages.splice(0,3)

    return (
        <ul className="flex gap-3 justify-center items-center mt-10 col-span-2 2xl:col-span-3">

            {
                pages[0] != 1 &&

                <li onClick={decreament}>
                        <IconBox icon={'icon-angleLeft hover:bg-primary-100 hover:text-White-200 bg-White-200 text-primary-100 py-3 px-7 rounded-lg  font-bold active:bg-primary-100 active:text-white'}/>
                </li>
            }

            {
                pageNum != 1 &&
                <li onClick={()=>pageSetter(1)}
                    className={`hover:bg-primary-100 hover:text-White-200 bg-White-200 text-primary-100  py-2 px-7 rounded-lg font-bold active:bg-primary-100 active:text-white`}>
                        1
                </li>
            }

            {
                pages[0] != 1 &&
                <li className={`text-primary-100  py-2 px-7 rounded-lg font-bold`}>
                    ...
                </li>
            }


            {
                data &&
                pages.map((value: number | string, index) => {
                    return (
                        <li key={index} onClick={()=>pageSetter(Number(value))}
                            className={`${value === pageNum ? 'bg-primary-100 text-White-200' : 'bg-White-200 text-primary-100'} hover:bg-primary-100 hover:text-White-200  py-2 px-7 rounded-lg  font-bold active:bg-primary-100 active:text-white`}>
                                {value}
                        </li>
                    )
                })
            }

            {
                pages[pages.length-1] != totalPage &&
                <li className={`text-primary-100  py-2 px-7 rounded-lg font-bold`}>
                    ...
                </li>
            }

            {
                !pages.includes(totalPage) &&
                <li onClick={()=> pageSetter(totalPage)}
                    className={`hover:bg-primary-100 hover:text-White-200 bg-White-200 text-primary-100 py-2 px-7 rounded-lg font-bold active:bg-primary-100 active:text-white`}>
                    {totalPage}
                </li>
            }


            {
                pageNum != totalPage &&
                <li onClick={increament}>
                        <IconBox icon={'icon-angleRight hover:bg-primary-100 hover:text-White-200 bg-White-200 text-primary-100 py-3 px-7 rounded-lg font-bold active:bg-primary-100 active:text-white'}/>
                </li>
            }
        </ul>
    )
}