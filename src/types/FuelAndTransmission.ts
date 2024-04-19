import {CarsType} from "@/types/Cars";
import {PopulateType} from "@/types/Response";

export interface FuelTransitionType {
    type: string
    createdAt: string
    updatedAt: string
    cars: PopulateType<CarsType>
}