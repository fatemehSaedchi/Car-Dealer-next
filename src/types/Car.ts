import {EntityType, PopulateType} from "@/types/Response";
import {ImageType} from "@/types/Image";
import {ModelBrandClassType} from "@/types/CarModelBrandClass";
import {SlideType} from "@/types/Slide";

export interface CarsType {
    excerpt: string
    price: number
    passenger: number
    description: string
    rate: number
    createdAt: string
    updatedAt: string
    dealCount?: string
    title: string
    Trending: boolean
    thumbnail: EntityType<ImageType>
    gallery: PopulateType<ImageType>
    car_model: EntityType<ModelBrandClassType>
    car_type: EntityType<ModelBrandClassType>
    car_class: EntityType<ModelBrandClassType>
    car_brand: EntityType<ModelBrandClassType>
    slides: PopulateType<SlideType>
}