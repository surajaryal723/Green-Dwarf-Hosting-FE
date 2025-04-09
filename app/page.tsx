import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Plans from "./components/home/Plans";
import Testimonials from "./components/home/Testimonials"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* hero section */}
        <Hero />

        {/* About the company */}

        <About />

        {/* Hosting Plans Summary */}
        <Plans/>

        {/* Testimonials */}
        <Testimonials/>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}
