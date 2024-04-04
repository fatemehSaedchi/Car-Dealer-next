import {PopulateType} from "@/types";
import {MenuItemType} from "@/types/MenuItem";

export interface MenuType {
    title: string
    createdAt: string
    updatedAt: string
    position: string
    menu_items: PopulateType<MenuItemType>
}