import Image from "next/image";
import Navbar from "../../../components/Navbar";
import { listDiferenciais } from "../../../data/listDiferenciais";
import { GiCheckMark } from "react-icons/gi";
import FormCta from "../../../components/FormCta";
import Footer from "../../../components/Footer";

export default function QuemSomosPage() {
    return (
        <div>
            <main>
                <Navbar className="absolute top-0 border-b border-paleta-konnectai-terciary" />
                <div className="flex flex-col">
                    <section id="1" className="flex items-center justify-center bg-[url('/hero3.png')] bg-center bg-cover bg-no-repeat h-screen">
                        <div className="flex flex-col container items-center justify-between max-w-5xl text-center">
                            <h3 className="font-medium degradeTextoFundoEscuro">Sobre a Konnectaí</h3>
                            <h1 className="degradeTextoFundoEscuro py-2">Conectando empresas ao futuro da comunicação</h1>
                            <p className="text-xl  text-paleta-konnectai-terciary">Tecnologia, estratégia e inteligência para transformar a forma como negócios se comunicam.</p>
                        </div>
                    </section>
                    <section id="2" className="flex justify-center h-100 bg-[url('/heromint.png')] bg-cover bg-no-repeat bg-center">
                        <div className="flex flex-col font-medium text-center container justify-center max-w-4xl text-lg items-center italic">
                            <p>A <span className="degradeTextoFundoClaro">Konnectaí</span> nasceu com um propósito claro: simplificar e potencializar a comunicação entre empresas e clientes. Em um cenário onde velocidade, organização e experiência fazem toda a diferença, desenvolvemos soluções que unem tecnologia e estratégia para criar operações mais eficientes, escaláveis e inteligentes.
                            </p>
                            <p>Mais do que integrar canais, estruturamos fluxos que geram produtividade, previsibilidade e crescimento transformando cada interação em oportunidade.</p>
                        </div>
                    </section>
                    <section id="3" className="flex justify-center pageDegradeEscuro lg:h-180 h-auto lg:py-0 py-14">
                        <div className="flex container lg:justify-between items-end ">
                            <div className="lg:flex flex-col  lg:max-w-xl lg:text-start text-center gap-2 lg:pb-40">
                                <h3 className="degradeTextoFundoEscuro font-bold">Nossa Visão</h3>
                                <h5 className="text-paleta-konnectai-terciary lg:max-w-sm">Comunicação organizada é crescimento acelerado.</h5>
                                <p className="text-lg text-paleta-konnectai-terciary">Acreditamos que empresas que dominam sua comunicação dominam seu mercado. Nossa visão é construir um ecossistema onde tecnologia e estratégia trabalham juntas para gerar performance real.</p>
                            </div>
                            <div className="hidden lg:flex bg-[url('/quem-somos/visao.png')] bg-center bg-cover bg-no-repeat h-150 w-150" />
                        </div>
                    </section>
                    <section id="4" className="flex justify-center pageDegradeEscuro lg:h-180 h-auto lg:py-0 py-14">
                        <div className="flex container justify-center gap-3  items-center">
                            <div className="hidden lg:flex " >
                                <Image src={"/quem-somos/tela.png"} alt={""} width={1000} height={1000} className="w-150"></Image>
                            </div>
                            <div className="lg:flex flex-col lg:max-w-xl  lg:text-start justify-center text-center gap-2">
                                <h3 className="degradeTextoFundoEscuro font-bold">Nossa Missão</h3>
                                <h5 className="text-paleta-konnectai-terciary lg:max-w-sm">Simplificar o complexo</h5>
                                <p className="text-lg text-paleta-konnectai-terciary">Nossa missão é eliminar gargalos operacionais, integrar canais e automatizar processos, permitindo que empresas cresçam com organização, eficiência e inteligência.</p>
                            </div>
                        </div>
                    </section>
                    <section id="5" className="flex justify-center pageDegradeEscuro lg:h-180 h-auto lg:py-0 py-14">
                        <div className="flex container justify-between gap-3 items-center">
                            <div className="lg:flex flex-col lg:max-w-xl lg:text-start justify-center text-center gap-3">
                                <h3 className="degradeTextoFundoEscuro font-bold">Nosso Diferencial</h3>
                                <h5 className="degradeTextoFundoEscuro">Não entregamos ferramentas. Entregamos estrutura.</h5>
                                <p className="text-lg text-paleta-konnectai-terciary">Cada solução é pensada para se adaptar à realidade do negócio, respeitando processos, metas e ritmo de crescimento. Nosso foco não é apenas tecnologia é resultado operacional.</p>
                                <div className="flex flex-col gap-5">
                                    {listDiferenciais.map((item) => (
                                        <div key={item.id} className="flex items-center gap-2">
                                            <GiCheckMark className="text-paleta-konnectai-secondary" />
                                            <p className="text-paleta-konnectai-terciary text-lg">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden lg:flex w-150">
                                <Image src={"/quem-somos/tela2.png"} alt={""} width={1000} height={1000} />
                            </div>
                        </div>
                    </section>
                    <section id="6" className="flex justify-center pageDegradeEscuro lg:h-180 h-auto lg:py-0 py-14">
                        <div className="flex container justify-center gap-6 items-center">
                            <div className="hidden lg:flex w-150">
                                <Image src={"/quem-somos/trabalho.png"} alt={""} width={1000} height={1000}></Image>
                            </div>
                            <div className="lg:flex flex-col lg:text-start text-center max-w-xl gap-4">
                                <h3 className="degradeTextoFundoEscuro font-bold">Como Trabalhamos</h3>
                                <h5 className="degradeTextoFundoEscuro font-bold">Tecnologia aplicada com método.</h5>
                                <p className="text-paleta-konnectai-terciary text-lg">Nosso processo combina diagnóstico, planejamento e implementação orientada por objetivos. Cada projeto é tratado como uma construção estratégica garantindo que a solução funcione no dia a dia, e não apenas no papel.</p>
                            </div>
                        </div>
                    </section>
                    <section id="7" className="flex justify-center pageDegradeEscuro lg:h-180 h-auto">
                        <div className="flex container  lg:py-0 py-14 bg-paleta-konnectai-terciary rounded-t-3xl justify-center gap-6 items-end">
                            <div className="flex flex-col max-w-xl lg:text-start text-center lg:pb-60">
                                <h3 className="degradeTextoFundoClaro font-bold">Para quem existimos</h3>
                                <h5 className="degradeTextoFundoClaro font-bold">Para empresas que querem crescer com organização.</h5>
                                <p className="text-paleta-konnectai-primary text-lg">Atendemos negócios que entendem que comunicação não é apenas atendimento é parte fundamental da experiência, vendas e relacionamento com o cliente.</p>
                            </div>
                            <div className="hidden lg:flex w-150">
                                <Image src={"/quem-somos/modelo.png"} alt={""} width={1000} height={1000}></Image>
                            </div>
                        </div>
                    </section>
                    <section id="8" className="flex justify-center pageDegradeEscuro lg:h-100 h-auto ">
                        <div className="flex container justify-center rounded-b-4xl bg-paleta-konnectai-terciary py-14">
                            <div className="flex flex-col max-w-4xl text-center gap-3">
                                <h3 className="degradeTextoFundoClaro font-bold">Nosso impacto</h3>
                                <h5 className="text-paleta-konnectai-primary">Transformamos comunicação em vantagem competitiva.</h5>
                                <p className="text-lg">Empresas que utilizam nossas soluções ganham previsibilidade operacional, produtividade de equipe e melhor experiência do cliente criando um ciclo sustentável de crescimento.</p>
                                <h5 className="text-paleta-konnectai-primary">Conheça nossas soluções</h5>
                                <a className="p-3 text-lg rounded-full degradeEscuro" href="">Fale Conosco</a>
                            </div>
                        </div>
                    </section>
                    <section id="9" className="flex justify-center pageDegradeEscuro h-200">
                        <div className="flex container justify-between items-end">
                            <div className="flex flex-col max-w-2xl pb-10 gap-5">
                                <h2 className="degradeTextoFundoEscuro py-2 font-bold">Converse com um especialista</h2>
                                <FormCta className="text-paleta-konnectai-terciary"></FormCta>
                            </div>
                            <div className="w-150 h-180 flex- bg-[url('/quem-somos/modelo2.png')] bg-cover bg-center bg-no-repeat" />
                        </div>
                    </section>
                </div>
            </main>
            <footer className="bg-paleta-konnectai-forth">
                <Footer></Footer>
            </footer>
        </div>
    )
}