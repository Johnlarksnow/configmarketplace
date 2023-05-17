import React from 'react';
import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext,
   DocumentInitialProps,
} from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { globalStyles } from '../styles/global.stitches';

class MyDocument extends Document {
   static async getInitialProps(
      ctx: DocumentContext
   ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx);
      return {
         ...initialProps,
         styles: React.Children.toArray([initialProps.styles]),
      };
   }

   render() {
      return (
         <Html lang="en">
            <title>ConfigMarketplace | All configs & more in one place</title>
            <meta name="title" content="ConfigMarketplace | All configs & more in one place" />
            <meta name="description" content="ConfigMarketplace has you in mind, building comfort, security, and powerful tools."></meta>
            <link rel="icon" href='https://i.imgur.com/R06ZvI7.png' />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://configmarketplace.shop/" />
            <meta property="og:title" content="ConfigMarketplace | All configs & more in one place" />
            <meta property="og:description" content="ConfingMarketplace has you in mind, building comfort, security, and powerful tools." />
            <meta property="og:image" content="https://i.imgur.com/R06ZvI7.png"></meta>
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://configmarketplace.shop/" />
            <meta property="twitter:title" content="ConfigMarketplace | All configs & more in one place"/>
            <meta property="twitter:description" content="ConfigMarketplace has you in mind, building comfort, security, and powerful tools."/>
            <meta property="twitter:image" content="https://i.imgur.com/R06ZvI7.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />

            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
            <script src="https://cdn.sellix.io/static/js/embed.js"></script>
            <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet" />
            <Head>{CssBaseline.flush()}


            </Head>

            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
