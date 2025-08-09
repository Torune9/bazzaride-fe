import type { NitroFetchOptions } from 'nitropack'

export const UseHandleApi = () => {
    const runtimeConfig = useRuntimeConfig()

    const post = async <T = any>(
        url: string,
        payload: object
    ): Promise<T> => {
        try {
            const response = await $fetch<T>(`${runtimeConfig.public.apiUrl}${url}`, {
                method: 'POST',
                body: payload,
                credentials: 'include',
            })
            return response
        } catch (error) {
            throw error
        }
    }

    const get = async (url: string) => {
        try {
            const response = await $fetch(`${runtimeConfig.public.apiUrl}${url}`, {
                method: 'GET',
                credentials: 'include'
            })

            return response
        } catch (error) {
            console.log(error.message);

            throw error
        }
    }

    const patch = async <T = any>(
        url: string,
        payload: object
    ): Promise<T> => {
        console.log(payload);
        
        try {
            const response = await $fetch<T>(`${runtimeConfig.public.apiUrl}${url}`, {
                method: 'PATCH',
                body: payload,
                credentials: 'include',
            })
            return response
        } catch (error) {
            throw error
        }
    }

    return {
        post,
        get,
        patch,
    }

}
