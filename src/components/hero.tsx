import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { IoMdStar } from "react-icons/io";


export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="mt-6 text-[40px] sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Make your money  <span className="block">work harder</span>
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Initiating a business venture may appear overwhelming, yet our forte <span className="block">lies in simplifying the entire process for you.</span>
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="size-5" /> Watch A Demo
          </Button>
        </div>
        <div className="flex justify-center items-center gap-2.5 mt-[25px]">
          <div className="flex gap-1">
            <IoMdStar className="text-[#FF5F5F] text-2xl" />
            <span>Trustpilot</span>
          </div>
          <div className="flex gap-0.5">
            <IoMdStar className="text-[#FF5F5F] text-[12px]" />
            <IoMdStar className="text-[#FF5F5F] text-[12px]" />
            <IoMdStar className="text-[#FF5F5F] text-[12px]" />
            <IoMdStar className="text-[#FF5F5F] text-[12px]" />
            <IoMdStar className="text-[#FF5F5F] text-[12px]" />
          </div>
          <span>3800+ 5 Stars</span>
        </div>
        <div className="flex items-center justify-center mt-[45px]">
          <img src="/images/dashboard.png" alt="Dashboard" className="shadow-2xs shadow-white rounded-xl relative" />
          <img src="/images/mobileDashboard.png" alt="mobileDashboard" className="absolute top-108 right-38 w-[500px]" />
        </div>

      </div>
    </div>
  );
}
