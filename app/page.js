import Concert from "@/components/Concert";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header/>
    <Hero/>
    <section className="">
    <Concert/>
    </section>
    <Footer/>
    </>
  );
}
