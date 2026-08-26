import Image from "next/image";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className="lg:flex justify-center items-center p-10 lg:h-80 h-auto">
            <div className="lg:flex lg:h-50 lg:container lg:px-20 lg:justify-between items-center">
                <div className="flex flex-col items-center lg:justify-between lg:text-start text-center h-full">
                    <Image src={'/konnectai_logo_branca.png'} width={1000} height={1000} alt="logo" className="w-80" />
                    <div className="">
                        <div className="flex gap-3 text-sm text-paleta-konnectai-primary items-center">
                            <p>&copy; {year} Konnectaí</p>
                            <p>contato@komunicai.com.br</p>
                            <BsFacebook className="shrink-0" />
                        </div>
                        <p className="text-sm text-paleta-konnectai-primary">Todos os direitos reservados</p>
                    </div>
                </div>
                <div className="lg:flex lg:text-start text-center lg:h-50">
                    <div className="flex flex-col gap-2 lg:max-w-xs text-lg text-paleta-konnectai-primary">
                        <p className="font-medium">Contato</p>
                        <span>Rua Coronel Del Prett, 72, CEP 59.584-000, Centro - Touros/RN</span>
                        <span>contato@konnectai.com.br</span>
                        <span>(84) 99184-9939</span>
                    </div>
                    <div className="flex flex-col gap-2 lg:max-w-xs text-lg text-paleta-konnectai-primary">
                        <p className="font-medium">Redes Sociais</p>
                        <a href="">Instagram</a>
                        <a href="">Facebook</a>
                        <a href="">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}