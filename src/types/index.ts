import z from 'zod'

const AuthSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
})

type Auth = z.infer<typeof AuthSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegisterForm = Pick<Auth, 'name' | 'lastName' | 'email' | 'password' | 'password_confirmation'>