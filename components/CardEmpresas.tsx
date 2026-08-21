import { listEmpresa } from "../data/listEmpresas"
import Image from 'next/image'

interface CardEmpresasProps {
    className?: string
}
export default function CardEmpresas({ className }: CardEmpresasProps) {
    return (
        <div className={`flex gap-3 flex-wrap justify-center ${className}`}>
            {listEmpresa.map((item) => (
                <div key={item.id} className="p-[1px] flex bg-linear-to-r w-40 h-30 items-center justify-center rounded-xl from-paleta-konnectai-secondary to-paleta-konnectai-terciary" title={item.nameEmpresa}>
                    <div className="flex w-40 h-29 rounded-xl bg-paleta-konnectai-primary items-center justify-center">
                        <Image src={`/empresas/${item.image}.png`} width={item.size} height={100} alt="empresa" />
                    </div>
                </div>
            ))}
        </div>
    )
}