import {apiClient} from "@/api/config";
import {ApiResponseType} from "@/types/api/Response";
import {LocationType} from "@/types/api/Location";

export async function getLocationApiCall():Promise<ApiResponseType<LocationType>> {
    return await apiClient.get('/branches')
}