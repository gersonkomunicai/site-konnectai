'use client'
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

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const enterprise = formData.get("enterprise");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const website = formData.get("website");

        console.log({name, enterprise, email, phone, website})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`flex gap-3 flex-col border ${className} rounded-xl p-3`}>
                <h4>Junte-se a nós e transforme sua comunicação!</h4>
                <label>Nome*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <LuUser className='shrink-0 size-4 w-4 h-4' />
                    <input className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="text" placeholder='Como você gostaria de ser chamado?' name="name" id="" />
                </div>
                <label>Empresa*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <ImOffice className='shrink-0 size-4 w-4 h-4' />
                    <input className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="text" placeholder='Qual o nome da sua empresa?' name="enterprise" id="" />
                </div>
                <label>E-mail*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <MdOutlineAlternateEmail className='shrink-0 size-4 w-4 h-4' />
                    <input className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="text" placeholder='seumelhor@email.com' name="email" id="" />
                </div>
                <label>Celular*</label>
                <div className='border flex items-center text-paleta-konnectai-terciary p-2 gap-2'>
                    <CgSmartphone className='shrink-0 size-4 w-4 h-4' />
                    <input className='placeholder:text-paleta-konnectai-terciary focus:outline-none w-full' type="text" placeholder='(12)987654321' name="phone" id="" />
                </div>
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