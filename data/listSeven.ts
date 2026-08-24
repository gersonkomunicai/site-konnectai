import { IconBaseProps, IconType } from "react-icons";
import { LuLock, LuSettings } from "react-icons/lu";

interface ListSeven {
    id: number,
    icon: IconType,
    title: string,
    subtitle: string,

}

export const listSeven : ListSeven[] = [
    {
        id: 1,
        icon: LuLock,
        title: "Proteção de Dados",
        subtitle: "Infraestrutura preparada para manter informações seguras e protegidas.",
    },
    {
        id: 2,
        icon: LuSettings,
        title: "Estabilidade Operacional",
        subtitle: "Plataforma confiável, pronta para atender grandes volumes sem comprometer a performance.",
    },
    {
        id: 3,
        icon: LuLock,
        title: "Monitoramento Contínuo",
        subtitle: "Acompanhamento em tempo real para garantir qualidade e funcionamento constante.",
    },
    {
        id: 4,
        icon: LuLock,
        title: "Boas Práticas de Segurança",
        subtitle: "Processos estruturados para reduzir riscos e preservar a integridade das informações.",
    },
    {
        id: 5,
        icon: LuLock,
        title: "Compromisso com a confiabilidade",
        subtitle: "Tecnologia pensada para sustentar o crescimento do seu negócio com segurança.",
    },
]