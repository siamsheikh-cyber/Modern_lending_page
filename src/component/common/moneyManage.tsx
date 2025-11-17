import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";

function Money() {
    return (
        <div className="px-5 sm:px-10 md:px-16 lg:px-21 mt-10 sm:mt-20 lg:mt-30 pb-5">

            <h1 className="text-3xl sm:text-4xl font-bold">
                Manage <span className="block mt-1">Money Wisely </span>
            </h1>

            {/* top section */}
            <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 mt-4">

                <p className="text-[#6B7280] font-medium leading-6 sm:leading-7 mt-2.5 text-sm sm:text-base lg:max-w-[60%]">
                    Master the Art of Financial Management: Strategies and Tools to Optimize
                    <span className="block">
                        Your Budget, Build Wealth, and Secure a Stable Financial Future
                    </span>
                </p>

                <div className="flex flex-col items-center justify-center">
                    <Button className="rounded-3xl px-6 py-2 sm:px-7 sm:py-3">
                        Get Started Free
                    </Button>
                    <span className="mt-2 text-[#6B7280] text-[12px]">
                        Explore More About Us
                    </span>
                </div>
            </div>

            {/* cards */}
            <div className="flex flex-col lg:flex-row gap-5 mt-8">

                {/* card 1 */}
                <div className="bg-[#F6F6F6] flex flex-col sm:flex-row gap-4 lg:gap-2 p-6 justify-between rounded-2xl lg:basis-[60%]">

                    <div className="flex flex-col justify-between order-2 sm:order-1">
                        <button className="py-2 rounded-3xl border border-[#FF5F5F] text-[#FF5F5F] mt-3 sm:mt-5 cursor-pointer mb-2.5 lg:mb-0">
                            Learn More
                        </button>

                        <div className="basis-[40%]">
                            <h4 className="text-2xl sm:text-[28px] font-medium">
                                Manage your
                                <span className="block">
                                    money wisely
                                </span>
                            </h4>
                            <p className="text-[12px] text-[#6B7280]">
                                Master the Art of
                                <span className="block">
                                    Financial Management
                                </span>
                            </p>
                        </div>

                    </div>

                    <div className="order-1 sm:order-2 lg:basis-[60%]">
                        <img src="/images/expensive.png" alt="board" className="w-full" />
                    </div>
                </div>

                {/* card 2 */}
                <div className="bg-[#f6f6f6e5] rounded-2xl p-4 sm:p-6 lg:basis-[40%]">

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <h4 className="text-xl sm:text-2xl">Quick Transfer</h4>

                        <div className="flex items-center gap-3">
                            <span className="font-medium">All</span>
                            <button className="py-2 px-4 rounded-3xl border text-black bg-[#FF5F5F33] cursor-pointer">
                                Contacts
                            </button>
                        </div>
                    </div>

                    {/* images */}
                    <div className="mt-7 flex flex-wrap gap-3">

                        {/* upload */}
                        <div className="flex flex-col justify-center items-center gap-1.5">
                            <div className="w-14 h-14 sm:w-[70px] sm:h-[70px]">
                                <label
                                    htmlFor="fileUpload"
                                    className="w-full h-full rounded-full border border-dashed border-gray-400
                                flex items-center justify-center cursor-pointer text-gray-500"
                                >
                                    <span className="text-2xl font-bold">+</span>
                                </label>

                                <input id="fileUpload" type="file" className="hidden" />
                            </div>
                            <span className="text-[12px]">Add new</span>
                        </div>

                        {/* other images */}
                        <div className="flex flex-wrap gap-1 items-center justify-center">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex flex-col justify-center items-center gap-1">
                                    <div className="w-14 h-14 sm:w-[70px] sm:h-[70px]">
                                        <img src="/others/empty2.png" alt="img" className="w-full" />
                                    </div>
                                    <span className="text-[12px]">Add new</span>
                                </div>
                            ))}

                            <div className="w-9 h-9 border border-gray-500 flex items-center justify-center rounded-[17px] cursor-pointer">
                                <IoIosArrowBack className="rotate-180" />
                            </div>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className="flex flex-row justify-between items-start sm:items-center mt-10 gap-4">
                        <span className="text-4xl sm:text-5xl font-bold">$349.00</span>
                        <button className="py-2 px-4 rounded-3xl border text-white bg-[#FF5F5F] cursor-pointer">
                            Send
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Money;
