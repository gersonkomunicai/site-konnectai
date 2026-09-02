import Footer from "../../../components/Footer";
import FormCta from "../../../components/FormCta";
import Navbar from "../../../components/Navbar";

export default function FaleConosco() {
    return (
        <div>
            <Navbar className="top-0 border-b border-paleta-konnectai-terciary" />
            <main>
                <div className="flex flex-col">
                    <div className="flex justify-center lg:h-screen h-auto lg:py-0 py-30 pageDegradeEscuro">
                        <div className="flex container justify-center lg:justify-between items-end">
                            <div className="flex flex-col gap-2 max-w-4xl pb-10">
                                <h2 className="font-bold lg:text-start text-center py-2 degradeTextoFundoEscuro">Converse com um especialista</h2>
                                <FormCta className="border-paleta-konnectai-terciary text-paleta-konnectai-terciary"></FormCta>
                            </div>
                            <div className="hidden lg:flex bg-[url('/fale-conosco/form.png')] bg-center bg-cover bg-no-repeat w-150 h-200" />
                        </div>
                    </div>
                    <div className="flex  justify-center items-center h-100 bg-[url('/heromint.png')] bg-center bg-cover bg-no-repeat">
                    <div className="flex text-center flex-col gap-5 ">
                        <h3 className="font-bold degradeTextoFundoClaro py-2">Prefere falar com a gente agora?</h3>
                        <h5 className="font-medium text-paleta-konnectai-primary">Não quer preencher o formulário?</h5>
                        <p className="text-lg text-paleta-konnectai-primary">Clique abaixo e fale com a nossa equipe agora mesmo.</p>
                        <a href="https://api.whatsapp.com/send/?phone=558491849939&text&type=phone_number&app_absent=0" target="_blank" className="flex justify-center p-3 rounded-full degradeEscuro">Falar no Whatsapp agora</a>

                    </div>
                    </div>
                </div>
            </main>
            <footer className="bg-paleta-konnectai-forth">
                <Footer></Footer>
            </footer>
        </div>
    )
}