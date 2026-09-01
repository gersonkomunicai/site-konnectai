import Image from "next/image";
import Navbar from "../../../components/Navbar";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";

export default function ContatoPage() {
    return (
        <div>
            <Navbar className="absolute top-0 border-b border-paleta-konnectai-terciary" />
            <main>
                <section id="1" className="flex justify-center bg-[url('/hero3.png')] h-screen">
                    <div className="flex container items-center justify-center">
                        <div className="flex flex-col items-center max-w-5xl gap-3">
                            <p className="uppercase text-xl text-paleta-konnectai-terciary">CONTATO KONNECTAÍ</p>
                            <h1 className="degradeTextoFundoEscuro text-center">Vamos Conversar?</h1>
                            <p className="text-paleta-konnectai-terciary text-lg max-w-md text-center">Estamos prontos para entender seu desafio e transformar sua comunicação em performance.</p>
                            <div className="flex gap-2">
                                <a href="" className="p-3 rounded-full degradeClaro">Fale Conosco</a>
                                <a href="" className="p-3 rounded-full degradeClaro">Teste nosso Chatbot em seu Whatsapp</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="2" className="flex justify-center h-150 bg-[url('/heromint.png')] bg-cover bg-center bg-no-repeat">
                    <div className="flex container items-center justify-center gap-10">
                        <div className="flex flex-col lg:text-start text-center gap-4">
                            <p className="text-2xl max-w-xl">Se você quer organizar seus canais, automatizar processos ou escalar sua operação com inteligência, nosso time está pronto para ajudar.</p>
                            <p className="text-2xl max-w-xl">Fale com a <span className="degradeTextoFundoClaro">Konnectaí</span> e descubra como podemos impulsionar o crescimento do seu negócio.</p>

                        </div>
                        <div className="hidden lg:flex w-120">
                            <Image src={"/contato/celular.png"} alt={""} width={1000} height={1000} />
                        </div>
                    </div>
                </section>
                <section id="3" className="flex justify-center pageDegradeEscuro lg:h-180 h-auto lg:py-0 py-15 ">
                    <div className="flex container justify-between items-end">
                        <div className="hidden lg:flex bg-[url('/contato/modelo.png')] h-150 w-150" />
                        <div className="flex flex-col max-w-xl lg:text-start text-center gap-3 pb-60">
                            <h3 className="degradeTextoFundoEscuro py-2 font-bold">Fale com um especialista</h3>
                            <h5 className="text-paleta-konnectai-forth">Atendimento estratégico e personalizado</h5>
                            <p className="text-lg text-paleta-konnectai-terciary">Nossa equipe analisa sua necessidade, entende seu modelo de operação e indica a melhor estrutura para sua empresa crescer com organização e eficiência.</p>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center pageDegradeEscuro lg:h-180 h-auto lg:py-0 py-15">
                    <div className="flex container justify-center items-end">
                        <div className="flex flex-col w-4xl border border-paleta-konnectai-terciary lg:text-start text-center gap-3 pb-20">
                            <h3 className="degradeTextoFundoEscuro py-2 font-bold">Nossos canais de atendimento</h3>
                            <h5 className="text-paleta-konnectai-forth">Você pode entrar em contato pelos seguintes meios</h5>
                            <div className="grid gap-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BsWhatsapp className="shrink-0 w-4 h-4 "/>
                                        <p>Whatsapp</p>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BsInstagram className="shrink-0 w-4 h-4 "/>
                                        <p>Instagram</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <FaWpforms className="shrink-0 w-4 h-4 "/>
                                        <p>Formulário</p>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <MdEmail className="shrink-0 w-4 h-4 "/>
                                        <p>Email</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BsLinkedin className="shrink-0 w-4 h-4 "/>
                                        <p>Linkedin</p>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BiPhone className="shrink-0 w-4 h-4 "/>
                                        <p>Telefone</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[url('/contato/modelo2.png')] bg-cover bg-center bg-no-repeat h-120 w-80">

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}