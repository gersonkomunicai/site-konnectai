import Image from 'next/image'
import { listBeneficios } from '../data/listBeneficios'
export default function CardBeneficios() {
    return (
        <div className='flex items-center justify-center flex-wrap gap-2'>
            {listBeneficios.map((item) => (
                <div key={item.id} className="flex rounded-xl flex-col items-center justify-start gap-5 p-3 w-90 h-100 bg-linear-to-r from-paleta-konnectai-secondary to-paleta-konnectai-secondary/50 ">
                    <Image src={item.image} width={100} height={100} alt='' className='flex items-end max-w-25 p-2 bg-paleta-konnectai-secondary rounded-md shadow-xl/30 shadow-paleta-konnectai-primary' />
                    <h3 className='max-w-xl text-paleta-konnectai-primary font-medium'>{item.title}</h3>
                    <p className='text-xl text-paleta-konnectai-primary'>{item.subtitle}</p>
                </div>
            ))}
        </div>
    )
}