import Hero from "@/app/components/Hero";
import Footer from "@/app/components/layouts/Footer";
import Header from "@/app/components/layouts/Header";

export default function Home() {
  return (
    <div className="container mx-auto py-4 px-4">
      <Header/>
      <Hero />
      <Footer/>
    </div>
  );
}
