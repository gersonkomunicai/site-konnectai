import { IconType } from "react-icons";
import { BsFunnel } from "react-icons/bs";
import { LuBot, LuChartNoAxesColumnIncreasing, LuCirclePlus, LuMegaphone, LuUsers } from "react-icons/lu";

interface ListSix {
    id: number,
    icon: IconType,
    title: string
}

export const listSix : ListSix[] = [
    {
        id: 1,
        icon: LuMegaphone,
        title: "Gestão de Campanha",
    },
    {
        id: 2,
        icon: LuChartNoAxesColumnIncreasing,
        title: "Painéis e análises de desempenho",
    },
    {
        id: 3,
        icon: BsFunnel,
        title: "Organização de pipelines",
    },
    {
        id: 4,
        icon: LuBot,
        title: "Estúdio de criação de chatbots",
    },
    {
        id: 5,
        icon: LuUsers,
        title: "Central de atendimento",
    },
    {
        id: 6,
        icon: LuCirclePlus,
        title: "E muito mais para impulsionar seus resultados",
    },
]