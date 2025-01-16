import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/css/main.css";

import type { Metadata } from "next";
import Script from "next/script"; // Importar componente Script
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--urbanist",
  display: "swap",
});
const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--playpair",
  display: "swap",
});
const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--dmMono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Updavo - Portfolio",
  description: "Updavo - Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark" className="zelio">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/assets/imgs/logos/icono2.png"
          type="image/x-icon"
        />
        {/* Script de Google Translate */}
        <Script
          id="google-translate"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: 'es', // Agregar más idiomas aquí si es necesario
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element'
              );
            }
          `}
        </Script>
      </head>
      <body
        className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}
        style={{ marginTop: 30 }}
      >
        {/* Contenedor del widget de Google Translate */}
        <div
          id="google_translate_element"
          className="material-select"
          style={{
            position: "absolute",
            top: -13,
            right: "4%",
            zIndex: 99999,
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}
