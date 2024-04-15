import {CarsType} from "@/types/Cars";
import {EntityType} from "@/types/Response";

export interface FuelTransitionType {
    type: string
    createdAt: string
    updatedAt: string
    cars: EntityType<CarsType>
}