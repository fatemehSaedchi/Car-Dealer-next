// todo replace mock data with api

import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {getMenusApiCall} from "@/api/menu";
import {ApiResponseType, EntityType, MenuType, PopulateType} from "@/types";
import {MenuItemType} from "@/types/api/MenuItem";
import {Dispatch, SetStateAction} from "react";

interface Props {
    showMobileMenu : boolean,
    setShowMobileMenu : Dispatch<SetStateAction<boolean>>
}
export function Menu({showMobileMenu,setShowMobileMenu}: Props) {
    const {data: menusData} = useQuery<ApiResponseType<MenuType>>({queryKey:[getMenusApiCall.name], queryFn:()=> getMenusApiCall()})

    let mainMenuItems: PopulateType<MenuItemType> | null = null
    if (menusData) {
        const mainMenu = menusData.data.filter((item : EntityType<MenuType>)=> item.attributes.title === 'main menu');

        if(mainMenu){
            mainMenuItems = mainMenu[0].attributes.menu_items
        }
    }

    const closeMobileMenuHandler = ()=>{
        setShowMobileMenu(false)
    }

    return (
        <ul className={`${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} absolute bg-White-200 text-secondary-300 font-semibold z-[9999] left-0 top-0 w-full h-screen py-5 px-4  sm:w-8/12 lg:translate-x-0 lg:relative lg:flex lg:bg-transparent lg:w-fit lg:gap-4 lg:p-0 lg:h-fit 2xl:gap-7`}>
            <li className="lg:hidden">
                <button onClick={closeMobileMenuHandler} className="px-3 py-1 rounded-md relative -top-2 -left-2 border hover:shadow-lg">X</button>
            </li>
            {
                mainMenuItems &&
                mainMenuItems?.data.map((item: EntityType<MenuItemType>, index: number)=>{
                    return (
                        <li key={index} className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100  pt-10 lg:pt-9 lg:pb-7 hover:text-primary-100">
                            <Link href={item.attributes.link}>{item.attributes.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}