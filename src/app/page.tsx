import { FaWhatsapp } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import { listOne } from '../../data/listCanais'
import CardTwo from '../../components/CardTwo'
import { listThree } from '../../data/listThree'
import CardEmpresas from '../../components/CardEmpresas'
import { listTestemonials } from '../../data/listTestemunhos'
import { listSix } from '../../data/listSix'
import { listSeven } from '../../data/listSeven'
import { LuArrowRight } from 'react-icons/lu'
import { PiHeadsetLight } from 'react-icons/pi'
import { listEight } from '../../data/listEight'
import { listEmpresas2 } from '../../data/listEmpresas2'
import CardBeneficios from '../../components/CardBeneficios'
import { listDuvidas } from '../../data/listDuvidas'

import FormCta from '../../components/FormCta'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar className='absolute top-0 border-b border-paleta-konnectai-terciary' />
      <div className='w-full bg-[url("/hero2.png")] bg-cover bg-no-repeat bg-center'>
        <div className='bg-paleta-konnectai-primary' />
        <div className='flex flex-col justify-center items-center w-full h-screen '>
          <div className='h-full container flex flex-col justify-center items-center text-center gap-10 '>
            <h1 className='text-paleta-konnectai-terciary p-2 font-medium'>Transforme seu WhatsApp em um canal inteligente de vendas e atendimento.</h1>
            <div className='flex flex-col text-center justify-center items-center gap-5'>
              <p className='text-paleta-konnectai-forth text-lg'>A Konnectai Conversas usa IA treinada no seu negócio para responder, qualificar leads e organizar atendimentos automaticamente tudo via API Oficial do WhatsApp.</p>
              <div className='lg:flex flex-col items-center w-full gap-2'>
                <a href='#' className='flex items-center lg:mb-0 mb-5 text-md text-paleta-konnectai-primary justify-center gap-2 p-2 rounded-full min-w-sm bg-paleta-konnectai-forth'>
                  <FaWhatsapp className='shrink-0 w-4 h-4' />
                  <span className='font-medium'>Fale Conosco</span>
                </a>
                <a href='#title' className='flex items-center justify-center text-md gap-2 p-2 bg-paleta-konnectai-forth text-paleta-konnectai-primary font-medium rounded-full min-w-sm'>
                  <span>Ver como funciona</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-paleta-konnectai-primary' />
      <div className='w-full flex items-center justify-center bg-paleta-konnectai-terciary'>
        <div className='flex container items-center justify-center lg:text-left text-center lg:justify-between'>
          <div className='w-96 h-96 rounded-full absolute mt-60 left-10 bg-paleta-konnectai-forth/15 blur-3xl' />
          <div className='hidden lg:flex w-20 h-20 mt-10 left-200 rotate-45 absolute bg-paleta-konnectai-forth/20 blur-3xl ' />
          <div className='hidden lg:flex w-50 h-50 rounded-full right-50 mt-100 absolute bg-paleta-konnectai-forth/10 blur-3xl ' />
          <div className='hidden lg:flex w-10 h-10 rotate-45 left-170 mb-100 absolute bg-paleta-konnectai-forth/20 blur-xl ' />
          <div className='flex flex-col relative items-center lg:items-start max-w-3xl gap-10'>
            <div id='title' className='max-w-3xl'>
              <h2 className='font-bold text-paleta-konnectai-primary'>Descomplique seu atendimento.</h2>
              <h3 className='font-medium text-paleta-konnectai-primary'>Automatize suas vendas.</h3>
            </div>
            <p className='text-2xl text-paleta-konnectai-primary'>Transforme conversas em oportunidades com IA inteligente, integração total de canais e suporte humanizado.</p>
            <a className='flex items-center gap-2 p-3 max-w-sm justify-center rounded-full degradeEscuro text-paleta-konnectai-terciary font-medium'>
              <FaWhatsapp className='shrink-0 w-4 h-4' />
              <span>Quero automatizar meu atendimento</span>
            </a>
          </div>
          <div className='flex  w-200 h-150 bg-[url("/1.png")] bg-top bg-cover bg-no-repeat'>
            {/* <Image src={'/1.png'} width={700} height={200} alt='um homem e uma mulher olhando fixamente para frente.' className='hidden lg:flex border-gray-800 bg-top contrast-90 brightness-90 rounded-4xl' /> */}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-paleta-konnectai-primary w-full h-auto p-10'>

        <div className='flex items-center justify-between h-auto container'>
          <div className='hidden lg:flex'>
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
                <a href="" className='mt-6 rounded-full flex p-5 degradeClaro font-medium text-paleta-konnectai-primary from-paleta-konnectai-secondary to-paleta-konnectai-terciary text-lg justify-center items-center'>Converse com um especialista</a>
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
        <div className='flex-flex-col container'>
          <div className='flex flex-col items-center py-10 h-auto '>
            <div className='flex gap-2 w-full justify-between '>
            <div className='hidden lg:flex bg-[url("/14.png")] w-200 bg-cover bg-no-repeat bg-top-right'>
            </div>
              {/* <Image src={} width={200} height={200} alt='moça segurando notebook quebrando a quarta parede' className='hidden relative lg:flex ' /> */}
              <div className='flex flex-col w-full gap-3'>
                <h3 className='degradeTextoFundoEscuro font-medium text-center'>Porque escolher a Konnectaí</h3>
                <div className='flex flex-col divide-y divide-paleta-konnectai-secondary '>
                  {listThree.map((item) => (
                    <div key={item.id} className='flex p-5 items-center justify-between gap-3'>
                      <Image src={`/listThree/${item.image}.png`} width={50} height={50} alt='icone' className='' />
                      <p className='text-lg text-center w-full text-paleta-konnectai-terciary'>{item.title}</p>
                    </div>
                  ))}
                  <div className='p-3 mt-10 w-full text-center flex justify-center'>
                    <a href='' className='p-3 font-medium text-lg  rounded-full degradeClaro'>
                      Quero falar com um especialista
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full container justify-center py-10 items-center'>
          <div className='flex flex-col lg:items-start items-center justify-center lg:text-start text-center lg:max-w-lg gap-6'>
            <h2 className='degradeTextoFundoEscuro font-medium py-2'>Seja omnichannel</h2>
            <span className='text-xl text-paleta-konnectai-terciary'>Com as soluções da Konnectaí, seu negócio fica presente em todos os canais, 24 horas por dia, permitindo que seus clientes falem com você onde preferirem, a qualquer momento.</span>
            <span className='text-xl text-paleta-konnectai-terciary'>Como provedora oficial do Grupo Meta, garantimos segurança, estabilidade e qualidade nos atendimentos via WhatsApp, Instagram e Facebook  tudo integrado para oferecer uma experiência rápida, profissional e sem complicações.</span>
            <a href="" className='flex justify-center rounded-full text-lg font-medium degradeClaro w-full lg:max-w-xs p-3'>Fale Conosco</a>
          </div>
          <div className='hidden lg:flex'>
            <Image src={'/15.png'} width={1000} height={1000} alt='' className='w-200' />
          </div>
        </div>
        <div className='flex flex-col container w-full items-center h-auto gap-15 py-10'>
          <div className='flex flex-col gap-5 items-center max-w-3xl text-center'>
            <h5 className='text-paleta-konnectai-terciary'>Quem confia na Konnectaí</h5>
            <h2 className='degradeTextoFundoEscuro font-medium'>Empresas que já transformaram seu atendimento</h2>
            <span className='text-lg text-paleta-konnectai-terciary'>Empresas de diversos segmentos já confiam na Konnectaí para otimizar seus resultados:</span>
          </div>
          <CardEmpresas />
        </div>
        <div id="testemunhos" className='flex flex-col text-center container w-full items-center justify-center py-10'>
          <h3 className='text-paleta-konnectai-terciary'>Resultados que falam por si</h3>
          <h2 className='degradeTextoFundoEscuro'>Depoimentos reais <span className='text-paleta-konnectai-terciary'>de quem confia na </span> Konnectaí</h2>
          <div className='flex flex-wrap container justify-center items-center'>
            {listTestemonials.map((item) => (
              <div key={item.id} className='items-center'>
                <Image src={item.image} width={340} height={100} alt='testemunhos' className='' />
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex flex-col lg:max-w-xl text-center lg:text-start items-center lg:items-start gap-3'>
            <h2 className='font-medium degradeTextoFundoEscuro py-2'>Gerencie com inteligência</h2>
            <p className='text-paleta-konnectai-terciary max-w-md'>Tenha em um só lugar as ferramentas essenciais para planejar, acompanhar e evoluir o seu negócio. Conecte-se aos sistemas que você já utiliza e crie uma operação integrada, eficiente e muito mais produtiva.</p>
            <div className='flex flex-col text-paleta-konnectai-terciary'>
              {listSix.map((item) => (
                <div key={item.id} className='flex items-center py-3 gap-4'>
                  <item.icon className='shrink-0 w-9 h-9' />
                  <p className='text-lg'>{item.title}</p>
                </div>
              ))}
            </div>
            <a className='flex items-center justify-center rounded-full font-medium p-3 degradeClaro w-md' href="#">
              Começar agora
            </a>
          </div>
          <div>
            <Image src={'/16.png'} width={1000} height={1000} alt='casal olhando para a tela do celular' className='hidden lg:flex lg:w-180' />
          </div>
        </div>
        <div className='flex flex-col items-center container gap-6 py-10'>
          <div className='text-center lg:max-w-4xl'>
            <h2 className='degradeTextoFundoEscuro py-2 font-bold'>Segurança & Confiança</h2>
            <p className='text-lg text-paleta-konnectai-terciary  font-medium'>Sua operação merece tecnologia sólida, processos seguros e uma plataforma preparada para proteger dados e garantir estabilidade. Trabalhamos com padrões rigorosos de segurança e monitoramento contínuo para que seu atendimento funcione com confiabilidade, desempenho e total tranquilidade.</p>
          </div>
          <div className='flex w-full h-auto items-center justify-evenly'>
            <div className='flex flex-col lg:max-w-xl gap-4'>
              <div className='flex flex-col justify-center p-5 gap-7 w-full '>
                {listSeven.map((item) => (
                  <div key={item.id} className='flex flex-col items-start gap-2 max-w-xl'>
                    <div className='flex items-center gap-3'>
                      <item.icon className='shrink-0 shadow-paleta-konnectai-secondary bg-paleta-konnectai-primary/80 text-paleta-konnectai-secondary rounded-lg shadow-xl/30 p-3 w-13 h-13' />
                      <div className='flex flex-col border-b border-paleta-konnectai-secondary'>
                        <p className='uppercase text-xl text-paleta-konnectai-terciary font-bold'>{item.title}</p>
                        <p className='text-lg text-paleta-konnectai-terciary'>{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <a href="" className='flex items-center justify-between gap-3 bg-paleta-konnectai-secondary/80 border rounded-xl border-paleta-konnectai-secondary shadow-xl/30 shadow-paleta-konnectai-secondary p-2'>
                  <div className='flex items-center gap-3'>
                    <PiHeadsetLight className='shrink-0 w-15 h-15 bg-linear-to-b from-paleta-konnectai-terciary rounded-md to-paleta-konnectai-secondary/50 p-2 text-paleta-konnectai-primary' />
                    <div className='flex text-paleta-konnectai-terciary flex-col'>
                      <span className='text-lg font-medium'>Fale com um especialista</span>
                      <span className='text-sm'>Entenda como podemos ajudar seu negócio</span>
                    </div>
                  </div>
                  <LuArrowRight className='shrink-0 w-6 h-6 text-paleta-konnectai-terciary' />
                </a>
              </div>
            </div>
            <div className='hidden lg:flex items-start justify-center w-140 h-100 '>
              <Image src={'/cta.png'} width={1000} height={100} alt='' className='w-120 rounded-xl' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-20 items-center bg-paleta-konnectai-terciary py-10'>
          <div className='max-w-4xl text-center'>
            <h2 className='degradeTextoFundoClaro py-2 font-medium'>Uma plataforma que se adpata ao <span className='font-bold'>tamanho</span> do seu negócio</h2>
          </div>
          <div className='rounded-md flex justify-center flex-wrap'>
            {listEight.map((item) => (
              <div key={item.id} className='flex '>
                <Image src={item.image} width={1000} height={1000} alt='' className='w-120 ' />
              </div>
            ))}
          </div>
          <a href="" className='flex justify-center p-3 text-lg font-medium text-paleta-konnectai-terciary degradeEscuro w-sm rounded-full'>
            Fale com o nosso time
          </a>
          <div className='flex flex-col items-center gap-10'>
            <h4 className='text-center text-paleta-konnectai-primary'>Nossa API Oficial permite integrações rápidas com diversas ferramentas</h4>
            <h2 className='font-bold max-w-2xl text-center degradeTextoFundoClaro'>Compatível com as Principais Plataformas do Mercado.</h2>
            <div className='max-w-6xl flex flex-wrap items-center justify-center gap-2'>
              {listEmpresas2.map((item) => (
                <div key={item.id} className='flex items-center justify-center w-55 h-35 rounded-xl bg-paleta-konnectai-secondary'>
                  <Image src={item.image} width={140} height={1} alt='' />
                </div>
              ))}
            </div>
            <a href="" className='flex items-center justify-center rounded-full font-medium text-lg text-paleta-konnectai-terciary w-md p-3 degradeEscuro'>Conectar meus canais</a>
          </div>
          <div className='flex flex-col items-center text-center gap-5 lg:py-20'>
            <h2 className='degradeTextoFundoClaro font-bold'>Benefícios da Konnectaí</h2>
            <CardBeneficios />
            <a href="" className='flex w-sm p-3 items-center justify-center text-paleta-konnectai-terciary text-xl degradeEscuro rounded-full'>Falar com um especialista</a>
          </div>
        </div>
        <div className='flex flex-col py-18'>
          <div className='flex justify-center gap-6 flex-wrap'>
            <div className=' degradeTextoFundoEscuro flex flex-col max-w-sm items-center text-center'>
              <h1>95%</h1>
              <h5>Satisfação dos Clientes</h5>
            </div>
            <div className='flex flex-col max-w-sm degradeTextoFundoEscuro items-center text-center'>
              <h1>+10.000</h1>
              <h5>Usuários Simultâneos</h5>
            </div>
            <div className='flex flex-col max-w-sm items-center text-center  degradeTextoFundoEscuro'>
              <h1>+5 Milhões</h1>
              <h5>Mensagens processadas por mês</h5>
            </div>
            <div className='flex flex-col max-w-sm items-center text-center  degradeTextoFundoEscuro'>
              <h1>+300</h1>
              <h5>Empresas Atendidas</h5>
            </div>
          </div>
        </div>
        <div className='flex flex-col container'>
          <div className='flex flex-col items-center gap-3 justify-center '>
            <h1 className='text-paleta-konnectai-terciary'>Principais dúvidas sobre a</h1>
            <Image src={'/konnectai_logo_verde.png'} width={1000} height={1000} alt='' className='w-80 max-w-80' />
            <div className='flex flex-col max-w-6xl shadow-xl/80 shadow-paleta-konnectai-secondary gap-5 bg-paleta-konnectai-terciary rounded-xl divide-y divide-gray-400'>
              {listDuvidas.map((item) => (
                <div key={item.id} className='p-6'>
                  <p className='text-paleta-konnectai-primary font-bold text-lg'>{item.title}</p>
                  <span className=''>{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center py-20'>
          <div className='flex flex-col gap-5 text-paleta-konnectai-terciary max-w-2xl'>
            <h2 className='text-center'>Pronto para transformar sua comunicação?</h2>
            <FormCta></FormCta>
          </div>
          <Image src={'/21.png'} width={600} height={600} alt='' className='hidden lg:flex' />
        </div>
      </div>
      <footer className='w-full h-auto bg-paleta-konnectai-forth'>
        <Footer />
      </footer>
    </div>
  )
}