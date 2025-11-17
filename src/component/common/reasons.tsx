import { Button } from "@/components/ui/button";
import { FaUserGroup } from "react-icons/fa6";
import { FaDharmachakra } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

function Reasons() {
    return (
        <div className="px-5 sm:px-10 md:px-20 lg:px-27 bg-[#F8F8F8]">

            {/* top section */}
            <div className="flex flex-col lg:flex-row justify-between mb-[21px] gap-4">

                <h3 className="text-3xl sm:text-4xl font-bold">
                    Key Reasons to
                    <span className="block">Choose Us</span>
                </h3>

                <p className="text-[#6B7280] text-sm sm:text-[12px] leading-5">
                    Whatever your customers' payment
                    <span className="block">
                        preferences, we’ll help you find the right
                    </span>
                    <span className="block">
                        solution for your business.
                    </span>
                </p>
            </div>

            {/* three cards */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6 lg:gap-3 items-center lg:items-center justify-between">

                {/* card 1 */}
                <div className="max-w-3xs w-full p-5 bg-white rounded-[10px] text-center lg:text-left">
                    <Button className="py-2 px-4 rounded-3xl border text-[#FF5F5F] bg-[#FF5F5F1F] cursor-pointer hover:bg-[#FF5F5F] hover:text-white flex gap-2 items-center justify-center lg:justify-start">
                        <FaUserGroup />Customers
                    </Button>

                    <p className="text-4xl sm:text-5xl font-semibold mt-4">
                        20K<sup className="text-xl sm:text-2xl">+</sup>
                    </p>

                    <p className="mt-6 text-[12px]">
                        In 38 countries, we work as one global team to help clients
                    </p>
                </div>

                {/* divider – only show on lg */}
                <span className="hidden lg:block w-[1.5px] h-30 bg-gray-500 border border-dashed"></span>

                {/* card 2 */}
                <div className="max-w-3xs w-full p-5 bg-white rounded-[10px] text-center lg:text-left">
                    <Button className="py-2 px-4 rounded-3xl border text-[#FF5F5F] bg-[#FF5F5F1F] cursor-pointer hover:bg-[#FF5F5F] hover:text-white flex gap-2 items-center justify-center lg:justify-start">
                        <FaDharmachakra />Impact
                    </Button>

                    <p className="text-4xl sm:text-5xl font-semibold mt-4">
                        98<sup className="text-xl sm:text-2xl">%</sup>
                    </p>

                    <p className="mt-6 text-[12px]">
                        We have worked with 89% of the Global 500 companies.
                    </p>
                </div>

                {/* divider – only show on lg */}
                <span className="hidden lg:block w-[1.5px] h-30 bg-gray-500 border border-dashed"></span>

                {/* card 3 */}
                <div className="max-w-3xs w-full p-5 bg-white rounded-[10px] text-center lg:text-left">
                    <Button className="py-2 px-4 rounded-3xl border text-[#FF5F5F] bg-[#FF5F5F1F] cursor-pointer hover:bg-[#FF5F5F] hover:text-white flex gap-2 items-center justify-center lg:justify-start">
                        <FaAlignJustify className="rotate-90" />Experience
                    </Button>

                    <p className="text-4xl sm:text-5xl font-semibold mt-4">
                        87<sup className="text-xl sm:text-2xl">%</sup>
                    </p>

                    <p className="mt-6 text-[12px]">
                        We started with a rebellious mindset and set ourselves the challenge
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Reasons;
