import Image from "next/image";
import Navbar from "../../../components/Navbar";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import FormCta from "../../../components/FormCta";
import Footer from "../../../components/Footer";

export default function ContatoPage() {
    return (
        <div>
            <Navbar className="top-0 border-b border-paleta-konnectai-terciary" />
            <main>
                <section id="1" className="flex justify-center bg-[url('/hero3.png')] bg-cover bg-no-repeat bg-center h-screen">
                    <div className="flex container items-center justify-center">
                        <div className="flex flex-col items-center max-w-4xl gap-3">
                            <p className="uppercase text-lg text-paleta-konnectai-terciary">CONTATO KONNECTAÍ</p>
                            <h1 className="degradeTextoFundoEscuro text-center">Vamos Conversar?</h1>
                            <p className="text-paleta-konnectai-terciary text-xl text-center">Estamos prontos para entender seu desafio e transformar sua comunicação em performance.</p>
                            <div className="flex gap-2">
                                <a href="#5" className="p-3 rounded-full degradeClaro">Fale Conosco</a>
                                <a href="https://api.whatsapp.com/send/?phone=558491849939&text&type=phone_number&app_absent=0" target="_blank" className="p-3 rounded-full degradeClaro">Teste nosso Chatbot em seu Whatsapp</a>
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
                <section id='4' className="flex justify-center pageDegradeEscuro lg:h-180 h-auto lg:py-0 py-15">
                    <div className="flex container justify-center items-end">
                        <div className="flex flex-col w-4xl  lg:text-start text-center gap-3 pb-20">
                            <h3 className="degradeTextoFundoEscuro py-2 font-bold">Nossos canais de atendimento</h3>
                            <h5 className="text-paleta-konnectai-forth">Você pode entrar em contato pelos seguintes meios</h5>
                            <div className="grid gap-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BsWhatsapp className="shrink-0 w-4 h-4 " />
                                        <p>Whatsapp</p>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BsInstagram className="shrink-0 w-4 h-4 " />
                                        <p>Instagram</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <FaWpforms className="shrink-0 w-4 h-4 " />
                                        <p>Formulário</p>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <MdEmail className="shrink-0 w-4 h-4 " />
                                        <p>Email</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BsLinkedin className="shrink-0 w-4 h-4 " />
                                        <p>Linkedin</p>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 justify-center rounded-full degradeClaro">
                                        <BiPhone className="shrink-0 w-4 h-4 " />
                                        <p>Telefone</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[url('/contato/modelo2.png')] bg-cover bg-center bg-no-repeat h-120 w-96" />
                    </div>
                </section>
                <section id="5" className="flex justify-center pageDegradeClaro lg:h-180 h-auto lg:py-0 py-15">
                    <div className="flex container justify-center items-end gap-5">
                        <div className="flex flex-col w-2xl lg:text-start text-center gap-3 pb-10">
                            <FormCta className="bg-paleta-konnectai-primary text-paleta-konnectai-terciary"></FormCta>
                        </div>
                        <div className="bg-[url('/contato/modelo3.png')] bg-cover bg-center bg-no-repeat h-170 w-120" />
                    </div>
                </section>
                <section id="6" className="flex justify-center pageDegradeEscuro h-100 ">
                    <div className="flex container justify-center items-center text-center">
                        <div className="flex flex-col max-w-xl gap-5">
                            <h3 className="font-bold degradeTextoFundoEscuro">Quer acelerar ainda mais?</h3>
                            <h5 className="font-medium text-paleta-konnectai-terciary">Agende uma demonstração personalizada</h5>
                            <p className="text-lg text-paleta-konnectai-terciary">Veja na prática como nossa solução organiza seus canais, automatiza processos e aumenta a produtividade da sua equipe.</p>
                            <a href="https://api.whatsapp.com/send/?phone=558491849939&text&type=phone_number&app_absent=0" target="_blank" className="p-3 rounded-full degradeClaro">
                                Agendar Demonstração
                            </a>
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