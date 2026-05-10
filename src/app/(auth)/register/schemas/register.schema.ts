import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100)
    .refine((val) => /^[a-zA-Z\s]+$/.test(val), {
      message: 'Name can only contain letters and spaces',
    }),
  email: z.email(),
  password: z
    .string()
    .min(8)
    .max(100)
    .refine((val) => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((val) => /[a-z]/.test(val), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine((val) => /[0-9]/.test(val), {
      message: 'Password must contain at least one number',
    })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: 'Password must contain at least one special character',
    }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
