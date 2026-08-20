import { FaWhatsapp } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar className='absolute top-0 border-b border-paleta-konnectai-primary' />
      <div className='w-full bg-[url("/heromint.png")] bg-cover bg-no-repeat bg-center'>
        <div className='flex flex-col justify-center items-center w-full h-screen '>
          <div className=' h-full container flex flex-col justify-center items-center text-center gap-10 '>
            <h1 className='text-paleta-konnectai-primary p-2 font-medium'>Transforme seu WhatsApp em um canal inteligente de vendas e atendimento.</h1>
            <div className='flex flex-col text-center justify-center items-center gap-5'>
              <p className='text-paleta-konnectai-primary text-lg'>A Konnectai Conversas usa IA treinada no seu negócio para responder, qualificar leads e organizar atendimentos automaticamente tudo via API Oficial do WhatsApp.</p>
              <div className='flex max-w-sm gap-2'>
                <div className='flex items-center text-md border border-paleta-konnectai-primary text-paleta-konnectai-primary justify-center gap-2 p-2 rounded-full w-50 max-w-xs'>
                  <FaWhatsapp className='shrink-0 w-4 h-4' />
                  <span>Fale Conosco</span>
                </div>
                <div className='flex items-center justify-center text-md text-paleta-konnectai-primary gap-2 p-2 border border-paleta-konnectai-primary rounded-full w-50 max-w-xs'>
                  <span>Ver como funciona</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-paleta-konnectai-terciary w-full h-auto p-10'>
        <div className='container'>
          <div className='flex flex-col max-w-3xl gap-10'>
            <div id='title'>
              <h2>Descomplique seu atendimento.</h2>
              <h3>Automatize suas vendas.</h3>
            </div>
            <p className='text-lg max-w-lg'>Transforme conversas em oportunidades com IA inteligente, integração total de canais e suporte humanizado.</p>
            <a className='flex items-center gap-2 p-3 max-w-sm justify-center rounded-full bg-paleta-konnectai-primary text-paleta-konnectai-terciary font-medium'>
              <FaWhatsapp className='shrink-0 w-4 h-4' />
              <span>Quero automatizar meu atendimento</span>
            </a>
          </div>
          <div className='flex'>
            <div className='flex flex-col'>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}