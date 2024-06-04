import {apiClient} from "@/api/config";
import {ApiResponseType, fuelType} from "@/types";

interface Interface {
    populate?: Array<'thumbnail' | '*'>
    filters?: {}
    sort?: Array<string>
    pagination?: {
        withCount?: boolean
        page?: number
        pageSize?: number
        start?: number
        limit?: number
    }
}

export function getAllFuelsApi({populate, filters = {}, sort = [], pagination = {}}: Interface): Promise<ApiResponseType<fuelType>> {
    return apiClient.get('/fuels', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}