import Acount from "@/component/common/acount";
import Category from "@/component/common/category";
import Customers from "@/component/common/customers/customers";
import Money from "@/component/common/moneyManage";
import Reasons from "@/component/common/reasons";
import Hero from "@/components/hero";

function Home() {
    return (
        <>
            <div
                className="bg-linear-to-bl from-[#F3F3F3] to-[#D4EFF4CC]"
                style={{
                    ["--tw-gradient-stops" as any]: `
                       var(--tw-gradient-from),
                       #F9C7B2E8 33%,
                       #F9B2D4E8 66%,
                       var(--tw-gradient-to)
                     `
                }}
            >
                <Hero />
            </div>
            <Category />
            <Money />
            <div className="bg-[#F8F8F8] px-6 pb-28">
                <Acount />
                <Reasons />
            </div>
            <Customers />

        </>
    );
}

export default Home;