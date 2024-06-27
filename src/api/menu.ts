import {apiClient} from "@/api/config";
import {ApiResponseType, MenuType} from "@/types";

export async function getMenusApiCall() : Promise<ApiResponseType<MenuType>> {
    return await apiClient.get('/menus',{
        params:{
            populate: "*"
        }
    })
}

export async function fetchMenuData(): Promise<ApiResponseType<MenuType>> {
    const response = await fetch('https://cwebgostar.navaxcollege.com/api/menus');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}