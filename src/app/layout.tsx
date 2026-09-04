import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Konnectaí | Centralize seu atendimento via WhatsApp",
  description: "Descomplique o atendimento via WhatsApp. A Konnectaí centraliza conversas e informações da sua empresa em um só lugar, fácil e rápido.",
  openGraph: {
    title: "Konnectaí | Centralize seu atendimento via WhatsApp",
    description: "Descomplique o atendimento via WhatsApp. A Konnectaí centraliza conversas e informações da sua empresa em um só lugar, fácil e rápido.",
    url: "https://konnectai.com.br",
    siteName: "Konnectaí",
    images: [
      {
        url: "https://konnectai.com.br/Iso.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
