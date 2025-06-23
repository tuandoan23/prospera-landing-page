import Partners from "@/components/Partners";
import TextSection from "@/components/TextSection";
import HeroSection from "@/sections/HeroSection";
import HeroSection2 from "@/sections/HeroSection2";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Partners />
      <HeroSection2 />
      <TextSection />
    </main>
  );
}
