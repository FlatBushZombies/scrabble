import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto py-5 px-6 sm:px-12">
      {/* Logo */}
      <Link href="/">
        <Image src="/icons/Scrabble.png" alt="logo" width={120} height={48} />
      </Link>

      {/* Right side buttons */}
      <div className="hidden lg:flex items-center gap-6">
        <CustomButton title="Get Started Today" />
        <CustomButton title="Sign Up" />
      </div>

      {/* Mobile Menu (Optional: if you'd like a hamburger menu) */}
      <div className="lg:hidden flex items-center">
        <button className="p-2 text-xl">
          {/* Hamburger icon or mobile menu */}
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
