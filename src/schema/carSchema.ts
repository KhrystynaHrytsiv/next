import {z} from 'zod'
export const carSchema = z.object({
    brand: z.string().min(1, 'Min 1 char').max(20, "Max 20 characters"),
    price: z.coerce.number().min(0, 'Price must be positive').max(1000000, 'Price is too large'),
    year: z.coerce.number().min(1990, 'Year cannot be earlier than 1980').max(new Date().getFullYear(), 'Year cannot exceed the current year')
});
export type CarFormData = z.infer<typeof carSchema>;