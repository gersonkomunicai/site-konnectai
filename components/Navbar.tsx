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
            <div className={`hidden lg:flex container items-center justify-between lg:p-4 h-25 ${className}`}>
                <div>
                    <a href="/">
                        <Image className='w-60' src={'/konnectai_logo_verde.png'} width={1000} height={100} alt='logo konnectai'></Image>
                    </a>
                </div>
                <div className='w-3xl p-3 flex justify-between text-paleta-konnectai-terciary font-medium text-lg '>
                    <a href="/produtos" className='navbarHover'>Produtos</a>
                    <a href="/canais" className='navbarHover'>Canais</a>
                    <a href="" className='navbarHover '>Quem somos</a>
                    <a href="" className='navbarHover'>Blog</a>
                    <a href="" className='navbarHover'>Contato</a>
                    <a href="" className='navbarHover'>Fale com um especialista</a>
                </div>
            </div>
            <div className={`lg:hidden flex container absolute left-0 md:left-auto items-center justify-between p-4 h-25 ${className}`}>
                <a href="/">
                    <Image src={'/Iso.png'} width={100} height={100} alt='logo' className='w-20' />
                </a>
                <LuMenu className='shrink-0 w-10 h-10 text-paleta-konnectai-terciary bg-paleta-konnectai-primary p-2 rounded-md ' onClick={() => { setToggle(!toggle) }} />
            </div>
            {toggle &&
                <div className='flex flex-col absolute left-0 md:left-auto top-25 container gap-5 text-lg p-3 divide-y font-medium divide-paleta-konnectai-terciary bg-paleta-konnectai-primary text-paleta-konnectai-terciary h-auto'>
                    <a href="/produtos" className='navbarHover'>Produtos</a>
                    <a href="/canais" className='navbarHover'>Canais</a>
                    <a href="/quem-somos" className='navbarHover'>Quem somos</a>
                    <a href="" className='navbarHover'>Blog</a>
                    <a href="" className='navbarHover'>Contato</a>
                    <a href="" className='navbarHover'>Fale com um especialista</a>
                </div>}
        </div>
    )
}