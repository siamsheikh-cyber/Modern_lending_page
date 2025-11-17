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
                className="bg-[linear-gradient(to_left_bottom,var(--tw-gradient-stops))]
      from-[#FFD9C1] to-[#fadcfd]"
                style={{
                    ["--tw-gradient-stops" as any]: `
        var(--tw-gradient-from),
        #FED5FF 33%,
        #D6EDFA 66%,
        var(--tw-gradient-to)
      `,
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