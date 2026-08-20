import Image from 'next/image'

interface NavbarProps {
    className?: string
}

export default function Navbar({ className }: NavbarProps) {
    return (
        <div className="flex w-screen items-center justify-center top-0">
            <div className={`flex container items-center justify-between p-4 h-25 ${className}`}>
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

        </div>
    )
}