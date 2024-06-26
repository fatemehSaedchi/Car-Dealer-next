import {EntityType, PopulateType, ImageType, CarSpecificsType, FuelTransitionType} from "@/types";

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
        data: EntityType<CarSpecificsType> }
    car_type: EntityType<CarSpecificsType>
    car_class: {
        data: EntityType<CarSpecificsType>
    }
    car_brand: {
        data: EntityType<CarSpecificsType>
    }
    fuels: PopulateType<FuelTransitionType>
    transitions: PopulateType<FuelTransitionType>
}