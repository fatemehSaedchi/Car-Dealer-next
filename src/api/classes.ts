import {apiClient} from "@/api/config";
import {ApiResponseType, ModelBrandClassType} from "@/types";

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

export function getAllClassesApi({populate, filters = {}, sort = [], pagination = {}}: Interface): Promise<ApiResponseType<ModelBrandClassType>> {
    return apiClient.get('/car-classes', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}