export const userStore = defineStore("user", {
    state: () => ({
        userLogin: {
            id: '',
            username: '',
            email: '',
            role: null as number | null
        },
        isLogged : false
    }),
    persist : {
        storage : localStorage,
    }
});
