import {apiClient} from "@/api/config";
import {ApiResponseType, CarsType} from "@/types";

interface Interface {
    populate?: Array<'thumbnail' | 'car_class' | "car_model" | 'gallery' | '*'>
    filters?: {}
    sort?: Array<string>
    pagination?: {
        withCount?: boolean
        page?: number
        pageSize?: number
        start?: number
        limit?: number
    }
    id?: number
}

export function getAllCarsApi({id, populate, filters = {}, sort = [], pagination = {}}: Interface): Promise<ApiResponseType<CarsType>> {
    return apiClient.get('/cars' + (id ? `/${id}` : ''),
        {
            params: {
                populate: populate?.join(','),
                filters: filters,
                sort: sort,
                pagination: pagination
            }
        })
}