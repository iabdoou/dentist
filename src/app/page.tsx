import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import ReassuranceBar from "@/components/ReassuranceBar";
import BentoSection from "@/components/BentoSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import ClinicSanctuary from "@/components/ClinicSanctuary";
import NewPatientOffer from "@/components/NewPatientOffer";
import ContactFooter from "@/components/ContactFooter";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="overflow-x-hidden w-full m-0 p-0">
        <HeroSection />
        <ReassuranceBar />
        <BentoSection />
        <TeamSection />
        <Testimonials />
        <ClinicSanctuary />
        <NewPatientOffer />
        <ContactFooter />
      </main>
      
    </>
  );
}
