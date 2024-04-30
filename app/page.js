import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Navigation } from "@/components/Navigation";
import Overview from "@/components/Overview";
import BestShots from "@/components/BestShots";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <div className="w-screen">
    <NavBar className='sticky' />
    <Header />
    <Navigation/>
    <Overview/>
    <BestShots/>
    <Services/>
    <Reviews/>
    <Footer/>
  </div>
    
  );
}
