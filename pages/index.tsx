import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Trusted} from '../components/trusted';
import {Box} from '../components/styles/box';
import {Features1} from '../components/features1';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Faq} from '../components/faq';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';
import {Accounts} from '../components/accounts';
import {Configs} from '../components/configs';
import {Mailconfig} from '../components/mailconfig';
import {Moneyconfig} from '../components/moneyconfig';
import { Streaming } from '../components/streaming';
import { Course } from '../components/course';
import { Fullz } from '../components/fullz';
import { Combo } from '../components/combos';
import { Other } from '../components/other/other';
const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            
            
            <Fullz />
            <Combo />
            <Configs />
            <Mailconfig />
            <Moneyconfig />
            <Streaming />
            
            <Other />
            <Course />
       
            <Trial />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
