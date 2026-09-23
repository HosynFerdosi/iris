import z from "zod"

export const LoginInputSchema = z.object({
	phone: z.string().min(1),
})

export type LoginInputType = z.infer<typeof LoginInputSchema>

export const VerifyInputSchema = z.object({
	otp: z.string().length(6, "That code didn't match. Please try again."),
})

export type VerifyInputType = z.infer<typeof VerifyInputSchema>
