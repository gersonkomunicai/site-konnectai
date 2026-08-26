'use client'
import Image from 'next/image'
import { useState } from 'react'
import { LuMenu } from 'react-icons/lu'

interface NavbarProps {
    className?: string
}



export default function Navbar({ className }: NavbarProps) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="flex w-screen items-center justify-center top-0">
            <div className={`hidden lg:flex container items-center justify-between p-4 h-25 ${className}`}>
                <div>
                    <Image className='w-60' src={'/konnectai_logo_branca.png'} width={1000} height={100} alt='logo konnectai'></Image>
                </div>
                <div className='w-3xl p-3 flex justify-between text-paleta-konnectai-primary text-lg'>
                    <a href="">Produtos</a>
                    <a href="">Canais</a>
                    <a href="">Quem somos</a>
                    <a href="">Blog</a>
                    <a href="">Contato</a>
                    <a href="">Fale com um especialista</a>
                </div>
            </div>
            <div className={`lg:hidden flex container items-center justify-between p-4 h-25 ${className}`}>
                <Image src={'/Iso.png'} width={100} height={100} alt='logo' className='w-20' />
                <LuMenu className='shrink-0 w-10 h-10 text-paleta-konnectai-terciary bg-paleta-konnectai-primary p-2 rounded-md ' onClick={() => { setToggle(!toggle) }} />
            </div>
            {toggle && 
            <div className='flex flex-col absolute top-25 w-full gap-5 text-lg p-3 divide-y divide-paleta-konnectai-terciary bg-paleta-konnectai-primary text-paleta-konnectai-terciary h-auto'>
                <a href="">Produtos</a>
                <a href="">Canais</a>
                <a href="">Quem somos</a>
                <a href="">Blog</a>
                <a href="">Contato</a>
                <a href="">Fale com um especialista</a>
            </div>}
        </div>
    )
}