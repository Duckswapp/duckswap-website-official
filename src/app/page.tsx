import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import InfoSec from "@/components/InfoSec";
import HowToBuy from "@/components/HowToBuy";
import HowToBuyCard from "@/components/HowToBuyCard";
import Footer from "@/components/Footer";
import ScrollToUp from "@/components/ScrollToUp";
import { Duckonomics } from "@/components/Dockonomics";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfoSec />
      <InfoCard />
      <Duckonomics />
      <HowToBuy />
      <HowToBuyCard />
      <Footer />
      <ScrollToUp />
    </main>
  );
}
