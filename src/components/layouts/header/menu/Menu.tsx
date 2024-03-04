import Link from "next/link";
import {menuMock} from "@/mock/menu";

interface Props {
    
}

export function Menu({}: Props) {
    return (
        <ul id="navList" className="absolute bg-White-200 text-secondary-300 font-semibold z-[9999] left-0 top-0 w-full h-screen py-5 px-4 -translate-x-full sm:w-8/12 lg:translate-x-0 lg:relative lg:flex lg:bg-transparent lg:w-fit lg:gap-4 lg:p-0 lg:h-fit 2xl:gap-7">
            <li className="lg:hidden">
                <button id="closeNavList"
                        className="px-3 py-1 rounded-md relative -top-2 -left-2 border hover:shadow-lg">X
                </button>
            </li>
            {
                menuMock.map((item, index)=>{
                    return (
                        <li className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100  pt-10 lg:pt-9 lg:pb-7 hover:text-primary-100">
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}