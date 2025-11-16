import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router";
import { ModeToggle } from "@/component/darkMode/mode-toggle";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 items-center">
            <ModeToggle />
            <div className="rounded-full w-[25px] h-[25px] bg-[#B1E5FC]">
              <img src="/others/empty.png" alt="e" className="w-full h-full rounded-[50%]" />
            </div>
            <span className="text-[10px]">
              +pro
            </span>
            <AiOutlineDollar />
          </div>

          <Link to={"#"} className=" border rounded-[20px] py-[7px] px-[15px] text-[16px]">Sign In</Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
