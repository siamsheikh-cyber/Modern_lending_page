import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";

function Money() {
    return (
        <div className="px-21 mt-30 pb-5">
            <h1 className="text-4xl font-bold">
                Manage <span className="block mt-1">Money Wisely </span>
            </h1>
            <div className="flex justify-between ">
                <p className="text-[#6B7280] font-medium leading-7 mt-2.5">
                    Master the Art of Financial Management: Strategies and Tools to Optimize
                    <span className="block">
                        Your Budget, Build Wealth, and Secure a Stable Financial Future
                    </span>
                </p>
                <div className="flex flex-col items-center justify-center">
                    <Button className="rounded-3xl">
                        Get Started Free
                    </Button>
                    <span className="mt-2 text-[#6B7280] text-[12px]">
                        Explore More About Us
                    </span>
                </div>
            </div>
            {/* Expanse Statistic cart*/}
            <div className="flex gap-5 mt-8">
                {/* cart 1 */}
                <div className="bg-[#F6F6F6] flex gap-2 p-6 justify-between rounded-2xl basis-[60%]">

                    <div className="flex flex-col justify-between">
                        <button className="py-2 rounded-3xl border border-[#FF5F5F] text-[#FF5F5F] mt-5 cursor-pointer">Learn More</button>
                        <div className="basis-[40%]">
                            <h4 className="text-[28px] font-medium">
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
                    <div className="basis-[60%]">
                        <img src="/images/expensive.png" alt="board" className="w-full" />
                    </div>
                </div>
                {/* cart 2 */}
                <div className="bg-[#f6f6f6e5] basis-[40%] rounded-2xl p-6">

                    <div className="flex justify-between items-center">
                        <h4 className="text-2xl">Quick Transfer</h4>
                        <div className="flex items-center justify-center gap-3">
                            <span className="font-medium">All</span>
                            <button className="py-2 px-4 rounded-3xl border text-black bg-[#FF5F5F33] cursor-pointer">Contacts</button>
                        </div>
                    </div>
                    {/* image add */}
                    <div className="mt-7 flex gap-2.5">
                        {/* input start */}
                        <div className="flex flex-col justify-center items-center gap-1.5">
                            <div className="w-[70px] h-[70px]">
                                <label
                                    htmlFor="fileUpload"
                                    className="w-full h-full rounded-full border border-dashed border-gray-400
                                flex items-center justify-center cursor-pointer text-gray-500"
                                >
                                    <span className="text-2xl font-bold">+</span>
                                </label>

                                <input
                                    id="fileUpload"
                                    type="file"
                                    className="hidden"
                                />
                            </div>
                            <span className="text-[12px]">Add new</span>
                        </div>
                        {/* input end */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center gap-1.5 ">
                                <img src="/others/empty2.png" alt="img" className="w-full" />
                                <span className="text-[12px]">Add new</span>
                            </div>
                            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center">
                                <img src="/others/empty2.png" alt="img" className="w-full" />
                                <span className="text-[12px]">Add new</span>
                            </div>
                            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center gap-1.5">
                                <img src="/others/empty2.png" alt="img" className="w-full" />
                                <span className="text-[12px]">Add new</span>
                            </div>
                            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center gap-1.5">
                                <img src="/others/empty2.png" alt="img" className="w-full" />
                                <span className="text-[12px]">Add new</span>
                            </div>
                            <div className="w-[35px] h-[35px] border border-gray-500 flex items-center justify-center rounded-[17px] cursor-pointer">
                                <IoIosArrowBack className="rotate-180" />
                            </div>
                        </div>
                    </div>
                    {/* bottom items */}
                    <div className="flex justify-between items-center mt-10">
                        <span className="text-5xl font-bold">$349.00</span>
                        <button className="py-2 px-4 rounded-3xl border text-white bg-[#FF5F5F] cursor-pointer">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Money;