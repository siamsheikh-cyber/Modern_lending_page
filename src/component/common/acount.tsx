import { Button } from "@/components/ui/button";
import { IoGiftOutline } from "react-icons/io5";
import { LiaMicrosoft } from "react-icons/lia";

function Acount() {
    return (
        <div className="flex items-center justify-center gap-5 bg-[#F8F8F8] py-28  mt-10">
            {/* left items */}
            <div className="bg-[#EBEBEB8F] basis-[40%] rounded-2xl p-6 flex flex-col items-center gap-3">
                <img src="/images/acountCart.png" alt="cart" />
                <img src="/images/acountCart2.png" alt="cart" />
            </div>
            {/* right items */}
            <div className=" basis-[40%] rounded-2xl p-6">
                <Button className="py-2 px-4 rounded-3xl border text-black bg-[#FF5F5F1F] cursor-pointer hover:bg-[#FF5F5F] hover:text-white">Account Transfer</Button>
                <h3 className="text-4xl font-bold mt-4">Maximizing
                    <span className="block">Efficiency in Daily </span>
                    <span className="block">Finance</span>
                </h3>
                <p className="text-[#6B7280] mt-4">See your whole financial picture in one place,
                    <span className="block ">
                        alongside a smarter approach to investing and real human.
                    </span>
                </p>
                <div className="flex gap-10 mt-7">
                    <div className="flex gap-2">
                        <LiaMicrosoft className="text-[34px] border p-2 rounded-2xl cursor-pointer" />
                        <IoGiftOutline className="text-[34px] border p-2 rounded-2xl cursor-pointer" />
                    </div>
                    <button className="py-2 px-4 rounded-3xl border text-white bg-[#FF5F5F] cursor-pointer">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Acount;