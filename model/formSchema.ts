import { z } from "zod";

export const UserRegisterSchema = z.object({
  username: z.coerce.string().nonempty("username tidak boleh kosong"),
  email: z.email("Format email tidak valid"),
  password: z.coerce.string().min(8, "Password minimal 8 karakter"),
});

export const UserLoginSchema = UserRegisterSchema.omit({ username: true });

export const ProfileSchema = z.object({
  userId: z.coerce.string().nonempty("userId tidak boleh kosong"),
  firstName: z.coerce.string().nonempty("firstname tidak boleh kosong"),
  lastName: z.coerce.string().nonempty("lastname tidak boleh kosong"),
  description: z.coerce.string().nonempty("description tidak boleh kosong"),
  image: z.string().optional(),
});
