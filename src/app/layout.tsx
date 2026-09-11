import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "../../components/CookieConsent";
import Script from "next/script";


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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Konnectaí",
    "url": "https://konnectai.com.br"
  })
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd}}/>

      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {gtmId && (
          <Script id="consent-default" strategy="beforeInteractive">
            {`(function() {
    var match = document.cookie.split('; ').find(function(row) {
      return row.startsWith('cookie_consent=');
    });
    var consent = match ? match.split('=')[1] : 'denied';

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'analytics_storage': consent,
      'ad_storage': consent,
      'ad_user_data': consent,
      'ad_personalization': consent
    });
  })();`}
          </Script>
        )}
        {gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
        {gtmId && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        )}
        <main>
          <CookieConsent />
          {children}
        </main>
      </body>
    </html>
  );
}
