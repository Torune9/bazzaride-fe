import { z } from 'zod'

export const UserRegisterSchema = z.object({
    username: z.coerce.string().nonempty('username tidak boleh kosong'),
    email: z.email('Format email tidak valid'),
    password: z.coerce.string().min(8, 'Password minimal 8 karakter')
})

export const UserLoginSchema = UserRegisterSchema.omit({ username: true }) 
