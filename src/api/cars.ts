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

export async function getAllCarsApi({populate, filters = {}}: Interface, sort = [], pagination = {}) {
    return apiClient.get('/cars',
        {
            params: {
                populate: populate?.join(','),
                filters: filters,
                sort: sort,
                pagination: pagination
            }
        })
}