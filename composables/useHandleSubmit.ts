import type { NitroFetchOptions } from 'nitropack'

export const UseHandleSubmit = () => {
    const runtimeConfig = useRuntimeConfig()

    const post = async <T = any>(
        url: string,
        payload: object
    ): Promise<T> => {
        try {
            const response = await $fetch<T>(`${runtimeConfig.public.apiUrl}${url}`, {
                method: 'POST',
                body: payload
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
            })
            return response
        } catch (error) {
            throw error
        }
    }
    return {
        post,
        get
    }
}
