import { FaWhatsapp } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import { listOne } from '../../data/listCanais'
import CardTwo from '../../components/CardTwo'
import { listThree } from '../../data/listThree'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar className='absolute top-0 border-b border-paleta-konnectai-primary' />
      <div className='w-full bg-[url("/heromint.png")] bg-cover bg-no-repeat bg-center'>
        <div className='flex flex-col justify-center items-center w-full h-screen '>
          <div className='h-full container flex flex-col justify-center items-center text-center gap-10 '>
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
      <div className='flex flex-col justify-center items-center bg-paleta-konnectai-primary w-full h-auto p-10'>
        <div className='flex container items-center justify-center lg:text-left text-center lg:justify-between'>
          <div className='flex flex-col items-center lg:items-start max-w-3xl gap-10'>
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
              <Image src={'/1.png'} width={1000} height={1000} alt='um homem e uma mulher olhando fixamente para frente.' className='hidden lg:flex lg:w-180 max-w-180'></Image>
            </div>
          </div>
        </div>
        <div className='flex items-center py-10 justify-between h-auto container bg-paleta-konnectai-primary'>
          <div className='hidden lg:flex w-150'>
            <Image src={'/2.png'} width={1000} height={1000} alt='imagem de um celular com uma ideia de atendimento possível na Konnectai' ></Image>
          </div>
          <div className='flex flex-col lg:max-w-2xl'>
            <div className='lg:text-left text-center'>
              <p className='text-paleta-konnectai-terciary text-lg'>A SOLUÇÃO KONNECTAÍ</p>
              <h3 className='degradeTextoFundoEscuro font-bold'>Canais integrados que trabalham por você 24h por dia</h3>
            </div>
            <div className='flex flex-col w-full lg:max-w-2xl divide-y divide-paleta-konnectai-secondary'>
              {listOne.map((item) => (
                <div key={item.id} className='flex items-center  text-paleta-konnectai-terciary text-lg'>
                  <Image src={`/listOne/${item.image}.png`} width={100} height={100} alt='IA' className='text-left' />
                  <p className='flex justify-center w-full'>{item.title}</p>
                </div>
              ))}
              <div className='w-full flex justify-center'>
                <a href="" className='mt-6 rounded-full flex p-5 bg-linear-to-r font-medium text-paleta-konnectai-primary from-paleta-konnectai-secondary to-paleta-konnectai-terciary text-lg justify-center items-center'>Converse com um especialista</a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center py-10 justify-center bg-paleta-konnectai-primary h-auto'>
          <div className='container'>
            <div className='flex flex-col gap-4 text-center'>
              <h2 className='degradeTextoFundoEscuro p-2 font-medium'>Soluções completas para aumentar suas vendas, sem burocracia</h2>
              <p className='text-lg text-paleta-konnectai-terciary'>Ferramentas inteligentes que tornam sua equipe mais produtiva e aumentam suas oportunidades de conversão.</p>
              <div className='flex'>
                <CardTwo className='justify-center gap-10' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-auto bg-paleta-konnectai-primary'>
          <div className='flex container justify-between'>
            <Image src={'/14.png'} width={1000} height={1000} alt='moça segurando notebook quebrando a quarta parede' className='hidden lg:flex w-180 ' />
            <div className='flex flex-col max-w-3xl gap-3'>
              <h3 className='degradeTextoFundoEscuro font-medium '>Porque escolher a Konnectaí</h3>
              <div className='flex flex-col divide-y divide-paleta-konnectai-secondary lg:max-w-3xl'>
                {listThree.map((item) => (
                  <div key={item.id} className='flex p-5 items-center justify-between gap-3'>
                    <Image src={`/listThree/${item.image}.png`} width={50} height={50} alt='icone' className='' />
                    <p className='text-lg text-center w-full text-paleta-konnectai-terciary'>{item.title}</p>
                  </div>
                ))}
                
              </div>

            </div>


          </div>

        </div>
      </div>
    </div>
  )
}