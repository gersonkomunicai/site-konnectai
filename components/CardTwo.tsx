import { listTwo } from "../data/listTwo"
import Image from 'next/image'

interface CardTwoProps {
    className?: string
}
export default function CardTwo({className}: CardTwoProps) {
    return (
        <div className={`flex flex-wrap gap-2  ${className}`}>
            {listTwo.map((item) => (
                <div key={item.id} className={`flex text-left flex-col bg-paleta-konnectai-terciary p-5 h-70 max-w-md  rounded-md`}>
                    <Image src={`/listTwo/${item.image}.png`} width={50} height={100} alt="icone" />
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-lg">{item.title}</p>
                        <p>{item.body}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}