import { leadSchema } from "@/lib/lead-schema"
import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
    const body = await request.json()
    const result = leadSchema.safeParse(body)
    if (result.success === true) {
        const resend = new Resend(process.env.RESEND_API_KEY)
        try {
            const { data, error } = await resend.emails.send({
                from: 'no-reply@konnectai.com.br',
                to: "gersonrgj2@gmail.com",
                subject: 'Lead Cadastrado',
                html: `Seguem as informações de lead cadastrado pelo formulário:\n 
                        Nome: ${result.data.name}, Email: ${result.data.email},\n 
                        Empresa: ${result.data.enterprise}, Celular: ${result.data.phone}`,
            });
            if(error){
                console.error(error)
                return NextResponse.json({ error: "Não foi possível enviar seu formulário." }, { status: 500 })
            }
            return NextResponse.json({ mensagem: "Formulário Validado e Email Enviado." }, { status: 200 })
        } catch (error) {
            console.error(error)
            return NextResponse.json({error: "Não foi possível enviar seu formulário." }, { status: 500 })
        }
    } else {
        return NextResponse.json({ error: "Formulário Não Validado" }, { status: 400 })
    }
}