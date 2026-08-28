import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import Navbar from "../../../components/Navbar";
import { listRedes } from "../../../data/listRedes";
import Image from "next/image";
import { ImFolderMinus } from "react-icons/im";

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
                <section id="3" className="flex bg-paleta-konnectai-primary justify-center h-screen">
                    <div className="flex container items-center">
                        <div className="flex flex-col max-w-2xl gap-15 text-paleta-konnectai-terciary">
                            <div className="lg:text-left text-center">
                                <h2 className="degradeTextoFundoEscuro font-bold">Comunicação unificada de verdade</h2>
                                <h5>Converse com todos, sem trocar de tela.</h5>
                                <p>Nossa plataforma integra múltiplos canais em um único ambiente de atendimento, permitindo que sua equipe responda com rapidez e contexto sem perder histórico, informações ou oportunidades.</p>
                                <h5 className="degradeTextoFundoEscuro">Canais integrados:</h5>
                            </div>
                            <div className="grid grid-cols-2 gap-2 justify-items-center ">
                                {listRedes.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2 font-medium w-full text-paleta-konnectai-primary">
                                        <Image src={item.icon} width={40} quality={75} height={40} alt="" />
                                        <p className="text-paleta-konnectai-forth">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <a href="" className="flex p-3 my-10 degradeClaro rounded-full items-center justify-center">Conectar meus canais</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}