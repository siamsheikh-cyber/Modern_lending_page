import { Link } from "react-router";

function FooterBottom() {
    return (
        <div className="bg-[url('/images/bgBanner.png')] bg-cover bg-center h-[180px] pb-4">
            <div
                className="
                    flex flex-col lg:flex-row 
                    justify-between items-center 
                    h-full px-5
                "
            >
                {/* Left */}
                <div className="mt-auto lg:mt-[130px] text-center lg:text-left">
                    <p className="text-[12px] sm:text-[14px] text-[#1F2937] font-bold">
                        © 2024 Copyright By Sansbro - Finestra
                    </p>
                </div>

                {/* Middle logo */}
                <img
                    src="/others/bottomLogo.png"
                    alt="logo"
                    className="mt-auto lg:mt-[100px] w-[90px] sm:w-[90px]"
                />

                {/* Right links */}
                <div
                    className="
                        flex flex-wrap justify-center 
                        gap-3 sm:gap-5 
                        text-muted-foreground 
                        mt-auto lg:mt-[130px]
                    "
                >
                    {["Terms", "Privacy", "Cookies", "Legal", "Recalls"].map((item) => (
                        <Link
                            key={item}
                            to="#"
                            target="_blank"
                            className="text-[12px] sm:text-[12px] text-black font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;
