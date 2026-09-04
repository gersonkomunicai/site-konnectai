import { leadSchema } from "@/lib/lead-schema"
import { NextResponse } from "next/server"
import { Resend } from "resend"

function htmlEscape(text: string){
    return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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
            html: `<img src="https://www.konnectai.com.br/Iso.png" alt="Logo da Konnectai" width="50" height"50"/><br/>
                        <h2>Seguem as informações de lead cadastrado pelo formulário:</h2><br/> 
                        <p>Nome: <strong>${htmlEscape(result.data.name)}</strong> <br/>Email: <strong>${htmlEscape(result.data.email)}</strong><br/> 
                        Empresa: <strong>${htmlEscape(result.data.enterprise)}</strong> <br/>Celular: <strong>${htmlEscape(result.data.phone)}</strong></p>`,
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