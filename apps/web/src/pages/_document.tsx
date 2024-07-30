import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from '@radix-ui/themes';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta
          name="keywords"
          content="virittämö helsinki, työllistämispalvelut, employment services, software development, ohjelmistokehitys,
           media, ict-ala, technology, social media, infrastructure, helsingin kaupunki, city of helsinki, stadinAO, palkkatuki,
           ohjelmistokehittäjä, mediatyöntekijä"
        />
        </Head>
      <body>
        <Theme>
        <Main />        
        <NextScript />
        </Theme>
      </body>
    </Html>
  );
}
