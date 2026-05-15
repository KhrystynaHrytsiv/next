import {z} from 'zod'
export const carSchema = z.object({
    brand: z.string().min(1, 'Min 1 char').max(20, "Max 20 characters"),
    price: z.number().min(0).max(1000000),
    year: z.number().min(1980).max(new Date().getFullYear())
});
export type CarFormData = z.infer<typeof carSchema>;