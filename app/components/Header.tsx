
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <div className="w-full px-[100px] py-[20px] bg-transparent flex items-center justify-between  -mb-[100px] absolute z-10">
      {/* Logo Container */}

      
        <Logo />
    

      {/* Navigation Links */}

      <NavLinks />

      {/* Authentication Buttons */}
      
<AuthButtons/>

    </div>
  );
}
