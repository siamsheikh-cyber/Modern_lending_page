import { Link } from "react-router";

function FooterBottom() {
    return (
        <div className="bg-[url('/images/bgBanner.png')] bg-cover bg-center h-[180px]">
            <div className="flex justify-between items-center ">
                <div className="mt-[130px]">
                    <p className="text-[14px] text-[#1F2937] font-bold">© 2024 Copyright By Sansbro - Finestra</p>
                </div>
                {/*  */}
                <img src="/others/bottomLogo.png" alt="logo" className="mt-[130px]" />
                {/*  */}
                <div className="flex items-center gap-5 text-muted-foreground mt-[130px]">
                    <Link to="#" target="_blank" className="text-[12px] text-black font-medium">
                        Terms
                    </Link>
                    <Link to="#" target="_blank" className="text-[12px] text-black font-medium">
                        Privacy
                    </Link>
                    <Link to="#" target="_blank" className="text-[12px] text-black font-medium">
                        Cookies
                    </Link>
                    <Link to="#" target="_blank" className="text-[12px] text-black font-medium">
                        Legal
                    </Link>
                    <Link to="#" target="_blank" className="text-[12px] text-black font-medium">
                        Recalls
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;