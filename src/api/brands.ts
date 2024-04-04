import {apiClient} from "@/api/config";

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

export function getAllBrandsApi({populate, filters = {}, sort = [], pagination = {}}: Interface) {
    return apiClient.get('/car-brands', {
            params: {
                populate: populate?.join(','),
                filters: filters,
                sort: sort,
                pagination: pagination
            }
        })
}