import {z} from "zod"

function normalizeUrl(val: string){
    if (val === "") {
        return val // string vazia, não mexe
    }
    
    if (val.startsWith("http://") || val.startsWith("https://")) {
        return val // já tem protocolo, não mexe
    }
    
    return "https://" + val // não tem protocolo, adiciona
}

export const leadSchema = z.object({

    name: z.string().min(3),
    enterprise: z.string().min(2),
    email:z.email(),
    phone: z.string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => /^\d{11}$/.test(val), {message: "Telefone Inválido"}),
    website: z.url().or(z.literal(""))
})