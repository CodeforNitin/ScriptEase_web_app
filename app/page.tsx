import Banner from "@/components/design/Banner";
import Hero from "@/components/design/Hero";
import LogoTicker from "@/components/design/LogoTicker";
import Navbar from '@/components/design/Navbar';

const App = () => {
  return (
    <>
      <div >
        <Banner/>
        <Navbar/>
        <Hero/>
        <LogoTicker/>
      </div>
    </>
  );
};

export default App;
