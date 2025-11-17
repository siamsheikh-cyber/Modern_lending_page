import CustomersCarts from "./customersCarts";

function Customers() {
    return (
        <div className="px-27 py-[70px] bg-linear-to-bl from-[#FFFFFF] via-[#F0E6E0] to-[#FFFFFF]">
            <div className="text-center">
                <ul className="flex gap-5 text-[14px] font-medium items-center justify-center mb-4">
                    <li>Our Customers</li>
                    <li>Talk About IT</li>
                    <li>Better Than Us</li>
                </ul>
                <h4 className="text-[45px] leading-[60px] font-bold mb-4">Hear What Customer
                    <span className="block">Have to Say</span>
                </h4>
                <p className="text-[#6B7280] text-[14px] mb-8">See your whole financial picture in one place, alongside
                    <span className="block">a smarter approach to investing and real human.</span>
                </p>
            </div>
            <CustomersCarts />
        </div>
    );
}

export default Customers;