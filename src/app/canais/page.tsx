import { BsInstagram, BsMessenger, BsTelegram, BsWhatsapp } from "react-icons/bs";
import Navbar from "../../../components/Navbar";
import { listRedes } from "../../../data/listRedes";
import Image from "next/image";
import { LuMessageSquare, LuMessagesSquare, LuSmartphone } from "react-icons/lu";
import { BiMicrophone, BiPhone } from "react-icons/bi";
import { listBeneficios2 } from "../../../data/listBeneficios2";
import { GiCheckMark } from "react-icons/gi";
import FormCta from "../../../components/FormCta";
import Footer from "../../../components/Footer";

export default function CanaisPage() {
    return (
        <div className="flex flex-col">
            <main className="h-auto">
                <Navbar className="absolute top-0 border-b border-paleta-konnectai-terciary" />
                <section id="1" className="flex items-center justify-center bg-[url('/hero3.png')] bg-center bg-cover bg-no-repeat min-h-screen">
                    <div className="flex container justify-center text-paleta-konnectai-terciary">
                        <div className="flex flex-col items-center gap-2 h-full justify-center lg:py-0 py-30 ">
                            <p className="uppercase text-xl">Canais da Konnectaí</p>
                            <h1 className="degradeTextoFundoEscuro p-2 font-bold text-center max-w-2xl">Todos os canais.</h1>
                            <h1 className="degradeTextoFundoEscuro p-2 font-bold text-center max-w-2xl">Uma única experiência.</h1>
                            <p className="text-lg text-paleta-konnectai-terciary text-center">Centralize, organize e potencialize cada conversa  onde quer que seu cliente esteja.</p>
                            <a className="flex items-center gap-2 p-3 w-md justify-center rounded-full degradeClaro" href="">
                                <BsWhatsapp className="shrink-0 w-4 h-4 " />
                                <span>Fale Conosco</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section id="2" className="flex items-center justify-center bg-paleta-konnectai-terciary w-full md:py-0 py-16 md:h-100 h-auto">
                    <div className="flex container justify-center">
                        <p className="text-lg max-w-2xl text-center text-paleta-konnectai-primary font-medium italic">Hoje, o cliente escolhe como quer falar com sua empresa e esperar que ele se adapte não é mais uma opção. A <span className="degradeTextoFundoClaro">Konnectaí</span> reúne todos os canais de comunicação em uma única plataforma inteligente, eliminando ruídos, atrasos e desorganização.
                            O resultado é uma operação fluida, eficiente e preparada para escalar.</p>
                    </div>
                </section>
                <section id="3" className="flex bg-linear-to-r from-paleta-konnectai-primary via-black to-paleta-konnectai-primary justify-center lg:py-0 py-15 lg:h-screen">
                    <div className="lg:flex container justify-items-center items-center lg:justify-between lg:px-10">
                        <div className="flex flex-col items-center lg:items-start max-w-2xl gap-15 text-paleta-konnectai-terciary">
                            <div className="lg:text-left text-center">
                                <h2 className="degradeTextoFundoEscuro font-bold">Comunicação unificada de verdade</h2>
                                <h5>Converse com todos, sem trocar de tela.</h5>
                                <p>Nossa plataforma integra múltiplos canais em um único ambiente de atendimento, permitindo que sua equipe responda com rapidez e contexto sem perder histórico, informações ou oportunidades.</p>
                                <h5 className="degradeTextoFundoEscuro">Canais integrados:</h5>
                            </div>
                            <div className="grid grid-cols-2 gap-2 justify-items-center">
                                {listRedes.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2 font-medium w-full text-paleta-konnectai-primary">
                                        <Image src={item.icon} width={40} quality={75} height={40} alt="" />
                                        <p className="text-paleta-konnectai-forth">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <a href="" className="flex p-3 my-10 degradeClaro rounded-full items-center justify-center">Conectar meus canais</a>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-5 justify-items-center">
                                <div className="grid h-30 grid-cols-2 gap-5">
                                    <div className="w-30 h-30 flex items-center rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <LuMessagesSquare className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                    <div className="w-30 h-30 flex items-center rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <LuSmartphone className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                </div>
                                <div className="grid  grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="w-30 h-30 flex items-center  rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <BsInstagram className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                    <div className="w-30 h-30 flex items-center rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <BsMessenger className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                    <div className="w-30 h-30 flex items-center rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <BsWhatsapp className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                    <div className="w-30 h-30 flex items-center rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <BsTelegram className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                </div>
                                <div className="grid h-30 grid-cols-2 gap-5">
                                    <div className="w-30 h-30 flex items-center  rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <BiPhone className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                    <div className="w-30 h-30 flex items-center rounded-md justify-center bg-paleta-konnectai-secondary/20 text-paleta-konnectai-secondary">
                                        <BiMicrophone className="shrink-0 w-18 h-18 p-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <span className="italic text-lg max-w-xl text-center text-paleta-konnectai-terciary">Tudo centralizado em um painel intuitivo, com histórico completo e gestão inteligente.</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="4" className="flex bg-linear-to-r from-paleta-konnectai-primary via-black to-paleta-konnectai-primary justify-center lg:py-0 py-10 lg:h-screen h-auto">
                    <div className="flex container h-full items-center justify-center lg:justify-between">
                        <div className="hidden lg:flex flex-col ">
                            <h2 className="degradeTextoFundoEscuro font-medium">Atendimento sem barreiras</h2>
                            <Image src={'/canais/conversa.png'} width={1000} height={1000} alt="Conversa no Konnectai Conversas" className="w-130" />
                        </div>
                        <div className="flex flex-col items-center text-center lg:text-start gap-4">
                            <div className="degradeTextoFundoEscuro text-center lg:text-start font-medium max-w-lg">
                                <h4>O cliente fala onde quiser.</h4>
                                <h4>Você responde com excelêcia.</h4>
                            </div>
                            <p className="text-paleta-konnectai-terciary text-lg max-w-lg">Não importa o canal a experiência do cliente permanece consistente. A padronização de comunicação garante qualidade, velocidade e profissionalismo em cada interação.</p>
                            <h5 className="text-paleta-konnectai-terciary">Benefícios diretos:</h5>
                            <div className="flex flex-col gap-5">
                                {listBeneficios2.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2">
                                        <GiCheckMark className="shrink-0 w-8 h-8" color="white" />
                                        <span className="text-paleta-konnectai-terciary">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="5" className="flex justify-center bg-linear-to-r from-paleta-konnectai-primary via-black to-paleta-konnectai-primary lg:h-screen h-auto lg:py-0 py-10">
                    <div className="flex container justify-center lg:justify-end">
                        <div className="flex flex-col justify-center lg:text-start text-center max-w-xl">
                            <h3 className="degradeTextoFundoEscuro font-bold">Jornada Conectada</h3>
                            <h4 className="text-paleta-konnectai-terciary font-medium">Canais que trabalham juntos.</h4>
                            <p className="text-lg text-paleta-konnectai-terciary">
                                Quando todos os pontos de contato se conectam, sua empresa passa a enxergar a jornada completa do cliente do primeiro contato ao fechamento criando oportunidades de relacionamento e vendas mais estratégicas.
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center bg-[url('/canais/circulo.png')] w-170 h-150 bg-cover bg-center bg-no-repeat" />                    </div>
                </section>
                <section id="6" className="flex items-center justify-center bg-linear-to-r from-paleta-konnectai-forth via-green-300 to-paleta-konnectai-forth lg:h-screen h-auto lg:py-0 py-16">
                    <div className="flex container justify-between lg:px-10 items-center ">
                        <div className="flex flex-col max-w-xl ">
                            <h2 className="degradeTextoFundoClaro py-2 font-bold">Organização que gera performance</h2>
                            <h4 className="font-medium text-paleta-konnectai-primary">Cada conversa no lugar certo.</h4>
                            <span className="text-paleta-konnectai-primary text-lg">Distribuição automática de atendimentos, categorização inteligente e monitoramento em tempo real garantem controle total da operação mesmo com alto volume de mensagens.</span>
                        </div>
                        <div>
                            <Image src={'/canais/tela.png'} width={1000} height={1000} alt="" className="w-150" />
                        </div>
                    </div>
                </section>
                <section id="7" className="flex justify-center  h-auto lg:py-0 py-16 bg-gray-100">
                    <div className="flex container items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h2 className="degradeTextoFundoClaro font-bold py-2">Para quem é essa solução?</h2>
                            <div className="flex items-center gap-2 text-paleta-konnectai-primary">
                                <GiCheckMark className="shrink-0 w-5 h-5 text-paleta-konnectai-secondary" />
                                <span className="text-lg">Empresas com alto volume de atendimento</span>
                            </div>
                            <div className="flex items-center gap-2 text-paleta-konnectai-primary">
                                <GiCheckMark className="shrink-0 w-5 h-5 text-paleta-konnectai-secondary" />
                                <span className="text-lg">Times comerciais que usam múltiplos canais</span>
                            </div>
                            <div className="flex items-center gap-2 text-paleta-konnectai-primary">
                                <GiCheckMark className="shrink-0 w-5 h-5 text-paleta-konnectai-secondary" />
                                <span className="text-lg">Negócios que querem escalar comunicação</span>
                            </div>
                            <div className="flex items-center gap-2 text-paleta-konnectai-primary">
                                <GiCheckMark className="shrink-0 w-5 h-5 text-paleta-konnectai-secondary" />
                                <span className="text-lg">Operações que precisam de organização</span>
                            </div>
                        </div>
                        <div className="hidden bg-[url('/canais/redes.png')] lg:flex items-center bg-cover bg-bottom bg-no-repeat] w-150 h-100" />
                    </div>
                </section>
                <section id="8" className="flex justify-center items-center bg-linear-to-r py-16 from-paleta-konnectai-primary via-black to-paleta-konnectai-primary h-auto">
                    <div className="flex container justify-center text-center">
                        <div className="flex flex-col  gap-2 max-w-2xl">
                            <h2 className="degradeTextoFundoEscuro py-2 font-bold">O impacto real dos canais integrados</h2>
                            <span className="text-lg text-paleta-konnectai-terciary">Centralizar não é apenas organizar é transformar comunicação em inteligência estratégica. Cada interação vira dado, cada canal vira oportunidade.</span>
                            <h4 className="text-paleta-konnectai-terciary">Centralize seus canais agora</h4>
                            <a href="" className="p-3 rounded-full degradeClaro">
                                Solicitar Demonstração
                            </a>
                        </div>
                    </div>
                </section>
                <section id="9" className="flex justify-center bg-white lg:h-200 h-auto lg:py-0 py-16">
                    <div className="flex container items-end justify-center lg:justify-between gap-2">
                        <div className="flex flex-col max-w-2xl pb-10">
                            <h2 className="degradeTextoFundoClaro text-center lg:text-start p-2 font-bold">Descubra como integrar sua comunicação</h2>
                            <FormCta className="bg-paleta-konnectai-primary text-paleta-konnectai-terciary"/>
                        </div>
                        <div className="hidden lg:flex">
                            <video src={"/canais/videoCta.mp4"} className="rounded-md" autoPlay/>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-paleta-konnectai-forth">
                <Footer/>
            </footer>
        </div>
    )
}