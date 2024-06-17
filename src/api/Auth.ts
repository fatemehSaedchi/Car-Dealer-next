import {apiClient} from "@/api/config";
import {AuthResponseType} from "@/types/AuthResponse";

interface RegisterData {
    fullName: string,
    email: string,
    phoneNumber: string,
    username: string,
    password: string
}

interface LoginData {
    identifier: string,
    password: string
}

export function registerApiCall(data: RegisterData) :Promise<AuthResponseType> {
    return(
        apiClient.post('/auth/local/register',data)
    )
}

export function loginApiCall(data: LoginData) :Promise<AuthResponseType> {
    return(
        apiClient.post('/auth/local',data)
    )
}