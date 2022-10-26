import About from '@/components/About';
import Categories from '@/components/Categories';
// import Banner from "@/components/Banner";
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Offers from '@/components/Offers';
import Tours from '@/components/Tours';
import Work from '@/components/Work';

// import Navbar from '@/sections/NavBar';
import { Section } from './styled';

export default function Welcome() {
  return (
    <>
      <Header />
      <Section>
        {/* <Offers/> */}
        <Categories />
        <About />
      </Section>
      <Work />
      <Section>
        <Tours />
      </Section>
      {/* <Banner /> */}

      <Contact />
      <Footer />
    </>
  );
}
