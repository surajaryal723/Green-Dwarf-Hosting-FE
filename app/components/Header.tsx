
import Logo from "./header/Logo";
import NavLinks from "./header/NavLinks";
import AuthButtons from "./header/AuthButtons";

export default function Header() {
  return (
    <header className="w-full px-[100px] py-[20px] md:px-[30px] sm:px-[20px] bg-transparent flex items-center justify-between  -mb-[100px] absolute z-10">
      {/* Logo Container */}

      
        <Logo />
    

      {/* Navigation Links */}

      <NavLinks />

      {/* Authentication Buttons */}
      
<AuthButtons/>

    </header>
  );
}
