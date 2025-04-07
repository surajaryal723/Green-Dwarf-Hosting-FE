import HeroContent from "./HeroContent";


export default function Hero() {
  return (
    <div
      className="hero w-full min-h-screen relative px-[100px] bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>

  <HeroContent/>
  <div className="overlay w-full min-h-screen bg-[rgba(16,0,43,0.5)] absolute inset-0 z-1 "></div>
    </div>
  );
}
