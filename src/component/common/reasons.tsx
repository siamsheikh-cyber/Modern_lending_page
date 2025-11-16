import { Button } from "@/components/ui/button";

function Reasons() {
    return (
        <div className="px-27 bg-[#F8F8F8]">
            <div className="flex justify-between mb-[21px]">
                <h3 className="text-4xl font-bold">Key Reasons to
                    <span className="block">Choose Us</span>
                </h3>
                <p className="text-[#6B7280] text-[12px]">Whatever your customers' payment
                    <span className="block">
                        preferences, we’ll help you find the right
                    </span>
                    <span className="block">
                        solution for your business.
                    </span>
                </p>
            </div>
            {/* three carts */}
            <div>
                <div className="mt-10 flex gap-3 items-center justify-between ">
                    <div className="max-w-3xs p-5 bg-white rounded-[10px] ">
                        <Button className="py-2 px-4 rounded-3xl border text-[#FF5F5F] bg-[#FF5F5F1F] cursor-pointer hover:bg-[#FF5F5F] hover:text-white">Customers</Button>
                        <p className="text-5xl font-semibold mt-4">20K<sup className="text-2xl">+</sup></p>
                        <p className="mt-6 text-[11px]">
                            In 38 countries, we work as one global team to help clients
                        </p>
                    </div>
                    <span className="w-1 h-40 bg-gray-500 border border-dashed "></span>
                    <div className="max-w-3xs p-5 bg-white rounded-[10px]">
                        <Button className="py-2 px-4 rounded-3xl border text-[#FF5F5F] bg-[#FF5F5F1F] cursor-pointer hover:bg-[#FF5F5F] hover:text-white">Impact</Button>
                        <p className="text-5xl font-semibold mt-4">98<sup className="text-2xl">%</sup></p>
                        <p className="mt-6 text-[11px]">
                            We have worked with 89% of the Global 500 companies.
                        </p>
                    </div>
                    <span className="w-1 h-40 bg-gray-500 border border-dashed "></span>
                    <div className="max-w-3xs p-5 bg-white rounded-[10px]">
                        <Button className="py-2 px-4 rounded-3xl border text-[#FF5F5F] bg-[#FF5F5F1F] cursor-pointer hover:bg-[#FF5F5F] hover:text-white">Experience</Button>
                        <p className="text-5xl font-semibold mt-4">87<sup className="text-2xl">%</sup></p>
                        <p className="mt-6 text-[11px]">
                            We started with a ebellious mindset and set ourselves the challange
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Reasons;