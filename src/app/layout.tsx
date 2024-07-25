import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Анна Царева - Профессиональный Коуч | Личный Рост и Развитие",
  description: "Опытный коуч Анна Царева помогает достигать личных и профессиональных целей. Индивидуальные сессии и программы развития для максимальных результатов.",
  keywords: "коучинг, личностный рост, развитие карьеры, профессиональный коуч, Анна Царева",
  openGraph: {
    title: "Анна Царева - Профессиональный Коуч",
    description: "Индивидуальные коучинговые программы от Анны Царевой для достижения ваших целей. Профессиональный подход и проверенные методики.",
    url: "https://tsarevaschool.ru/",
    images: [
      {
        url: "/avatar.jpg",
        width: 180,
        height: 180,
        alt: "Анна Царева - Профессиональный Коуч",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Яндекс.Метрика счетчик */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(97915731, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });`
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/97915731"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
