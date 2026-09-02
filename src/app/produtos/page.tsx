import Image from "next/image";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { listOmnichannel } from "../../../data/listOmnichannel";

export default function PageProdutos() {
    return (
        <div className="flex flex-col ">
            <main className="">
                <Navbar className="top-0 border-b border-paleta-konnectai-terciary" />
                <section id="1" className="flex justify-center bg-[url('/hero3.png')] bg-cover bg-center bg-no-repeat lg:h-screen lg:py-0 py-40 h-auto">
                    <div className="flex container max-w-4xl ">
                        <div className="flex flex-col items-center gap-3 justify-center h-full text-center text-paleta-konnectai-terciary">
                            <p className="uppercase text-lg">Nossos Produtos</p>
                            <h1 className="degradeTextoFundoEscuro py-2">Tecnologia que conecta, automatiza e vende por você</h1>
                            <p className="text-xl">Conheça os produtos da Konnectaí e transforme seu atendimento, comunicação e performance comercial em um só ecossistema inteligente.</p>
                            <div className="flex w-sm justify-center rounded-full degradeClaro">
                                <a href="https://api.whatsapp.com/send/?phone=558491849939&text&type=phone_number&app_absent=0" target="_blank" className="p-3 ">Explorar Produtos</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="2" className="flex justify-center py-10 items-center bg-paleta-konnectai-terciary">
                    <div className="flex flex-col items-center gap-20 justify-center container ">
                        <h5 className="max-w-2xl text-center">Soluções completas para transformar a comunicação do seu negócio em resultados reais.</h5>
                        <div className="lg:flex items-center justify-center gap-3 w-full py-10">
                            <div className="flex flex-col text-center justify-center lg:text-start lg:justify-start gap-3 lg:max-w-xl ">
                                <h2 className="degradeTextoFundoClaro font-bold">Omnichannel</h2>
                                <p className="font-bold text-lg">Atendimento inteligente em todos os canais</p>
                                <span className="text-lg">Centralize o atendimento da sua empresa em um único lugar com uma plataforma omnichannel completa.</span>
                                <span className="text-lg">A Konnectaí Conversas integra WhatsApp, Instagram, Facebook e outros canais, permitindo que sua equipe responda clientes com mais rapidez, organização e eficiência.</span>
                                <span className="text-lg">Automatize conversas com chatbot IA, acompanhe métricas em tempo real e transforme cada atendimento em uma oportunidade de venda.</span>
                                <a href="https://api.whatsapp.com/send/?phone=558491849939&text&type=phone_number&app_absent=0" target="_blank" className="lg:max-w-sm rounded-full items-center flex justify-center degradeEscuro p-3">Saiba mais</a>
                            </div>
                            <div className="lg:py-0 py-10 grid grid-cols-2 justify-items-center gap-20 h-full">
                                {listOmnichannel.map((item) => (
                                    <div key={item.id} className="justify-items-center text-center">
                                        <Image src={item.image} width={120} height={120} alt="listOmnichannel" />
                                        <span className="text-lg max-w-xs font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-paleta-konnectai-forth">
                <Footer />
            </footer>
        </div>
    )
}