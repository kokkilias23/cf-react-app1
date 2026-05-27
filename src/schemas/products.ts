import { z } from "zod"

export const productSchema = z.object({
   id: z.number().int(),
    name: z.string().min(1, {error: "Name is required"}),
    slug: z
        .string()
        .min(1, {error: "Slug is required"})
    .regex(/^[a-zA-Z0-9]+$/, {error: "Slug must use only latin letters, numbers, - or _"})
})