import {EntityType, PopulateType} from "@/types/Response";
import {ImageType} from "@/types/Image";
import {ModelBrandClassType} from "@/types/CarModelBrandClass";
import {SlideType} from "@/types/Slide";
import {FuelTransitionType} from "@/types/FuelAndTransmission";

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
    reviews: string
    discussion: string
    Trending: boolean
    thumbnail: {
        data: EntityType<ImageType>
    }
    gallery: PopulateType<ImageType>
    car_model: {
        data: EntityType<ModelBrandClassType> }
    car_type: EntityType<ModelBrandClassType>
    car_class: {
        data: EntityType<ModelBrandClassType>
    }
    car_brand: EntityType<ModelBrandClassType>
    slides: PopulateType<SlideType>
    fuels: PopulateType<FuelTransitionType>
    transitions: PopulateType<FuelTransitionType>
}