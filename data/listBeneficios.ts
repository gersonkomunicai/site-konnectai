interface ListBeneficios {
    id: number,
    image: string,
    title: string,
    subtitle: string
}

export const listBeneficios:ListBeneficios[] = [
    {
        id: 1,
        image: "/iconesBeneficios/icone1.png",
        title: "Instalação",
        subtitle: "Implementação sem complicações! Nossa equipe estará ao seu lado em cada etapa do processo."
    },
    {
        id: 2,
        image: "/iconesBeneficios/icon2.png",
        title: "Treinamento",
        subtitle: "Conte com nossa equipe para aprender e se adaptar sempre que precisar."
    },
    {
        id: 3,
        image: "/iconesBeneficios/icone3.png",
        title: "Suporte",
        subtitle: "Suporte gratuito de segunda a sexta-feira, das 7h às 20h e Sábado de 8h as 12h."
    },
]