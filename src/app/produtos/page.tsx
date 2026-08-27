import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function PageProdutos() {
    return (
        <div className="flex flex-col">
            <main className="">
                <Navbar className="absolute top-0 border-b border-paleta-konnectai-terciary" />
                <section className="flex justify-center bg-paleta-konnectai-primary h-screen">
                    <div className="flex container items-center ">
                        <div className="flex flex-col gap-3 max-w-4xl justify-center h-full text-start">
                            <h4>Nossos Produtos</h4>
                            <h1>Tecnologia que conecta, automatiza e vende por você</h1>
                            <p className="text-2xl">Conheça os produtos da Konnectaí e transforme seu atendimento, comunicação e performance comercial em um só ecossistema inteligente.</p>
                            <div className="flex max-w-xl justify-center rounded-full degradeClaro">
                                <a href="" className="p-3 ">Explorar Produtos</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="2" className="flex justify-center items-center bg-paleta-konnectai-terciary">
                    <div className="flex justify-center container bg-amber-500">
                        <h4>Soluções completas para transformar a comunicação do seu negócio em resultados reais.</h4>

                    </div>
                </section>
            </main>
            <footer className="bg-paleta-konnectai-forth">
                <Footer />
            </footer>
        </div>
    )
}