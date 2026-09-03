'use client'
import { leadSchema } from "@/lib/lead-schema";
import { useState } from "react";
import { CgSmartphone } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { LuUser } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";

interface FormCtaProps {
    className?: string
}


export default function FormCta({ className }: FormCtaProps) {
    const [site, setSite] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>()
    const [success, setSuccess] = useState(false)
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const enterprise = formData.get("enterprise");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const website = formData.get("website");

        const result = leadSchema.safeParse({
            name: String(name),
            enterprise: String(enterprise),
            email: String(email),
            phone: String(phone),
            website: String(website)
        })

        if (result.success === true) {
            setErrors({})
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(result.data)
            })
            if(response.ok) setSuccess(true)
        } else {
            const errors = result.error.issues.reduce((acc, issue) => {
                const field = String(issue.path[0])
                return { ...acc, [field]: issue.message }
            }, {})
            setErrors(errors)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`flex gap-3 flex-col border ${className} rounded-xl p-3`}>
                {success && (
                    <div className="flex items-center justify-center transition-transform rounded-t-xl duration-200 w-full h-20 bg-paleta-konnectai-forth text-paleta-konnectai-fifth font-medium text-md">Formulário enviado com sucesso. Em breve retornaremos contato.</div>
                )}
                <h4>Junte-se a nós e transforme sua comunicação!</h4>
                <label>Nome*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <LuUser className='shrink-0 size-4 w-4 h-4' />
                    <input required className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="text" placeholder='Como você gostaria de ser chamado?' name="name" id="" />
                </div>
                {errors?.name && (
                    <div><span className="text-xs text-red-500">{errors.name}</span></div>
                )}
                <label>Empresa*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <ImOffice className='shrink-0 size-4 w-4 h-4' />
                    <input required className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="text" placeholder='Qual o nome da sua empresa?' name="enterprise" id="" />
                </div>
                {errors?.enterprise && (
                    <div><span className="text-xs text-red-500">{errors.enterprise}</span></div>
                )}
                <label>E-mail*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <MdOutlineAlternateEmail className='shrink-0 size-4 w-4 h-4' />
                    <input required className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="email" placeholder='seumelhor@email.com' name="email" id="" />
                </div>
                {errors?.email && (
                    <div><span className="text-xs text-red-500">{errors.email}</span></div>
                )}
                <label>Celular*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <CgSmartphone className='shrink-0 size-4 w-4 h-4' />
                    <input required className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="tel" placeholder='(12)987654321' name="phone" id="" />
                </div>
                {errors?.phone && (
                    <div><span className="text-xs text-red-500">{errors.phone}</span></div>
                )}
                <div className={`${site ? 'hidden' : ''}`}>
                    <label>Site da Empresa</label>
                    <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                        <GiWorld className='shrink-0 size-4 w-4 h-4' />
                        <input className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="text" placeholder='https://www.suaempresa.com.br' name="website" id="" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="checkSite" onClick={() => { setSite(!site) }} />
                    <label >Não tenho site</label>
                </div>
                <button type="submit" className="w-full p-3 bg-paleta-konnectai-secondary font-medium text-paleta-konnectai-primary rounded-full flex justify-center">
                    <span>Solicitar atendimento</span>

                </button>
            </div>
        </form>
    )
}