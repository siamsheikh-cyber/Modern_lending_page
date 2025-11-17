import CustomersCarts from "./customersCarts";

function Customers() {
    return (
        <div className="sm:px-27 py-[70px] bg-linear-to-bl from-[#FFFFFF] via-[#F0E6E0] to-[#FFFFFF]">
            <div className="text-center px-4 md:px-10">
                <ul className="flex flex-wrap flex-row gap-3 sm:gap-5 text-[14px] font-medium items-center justify-center mb-4">
                    <li className="shadow-2xl">Our Customers</li>
                    <li className="shadow-2xl">Talk About IT</li>
                    <li>Better Than Us</li>
                </ul>

                <h4 className="text-[28px] sm:text-[35px] md:text-[45px] leading-[38px] sm:leading-[47px] md:leading-[60px] font-bold mb-4">
                    Hear What Customer
                    <span className="sm:block"> Have to Say</span>
                </h4>

                <p className="text-[#6B7280] text-[12px] sm:text-[14px] mb-8 px-2 sm:px-0">
                    See your whole financial picture in one place, alongside
                    <span className="sm:block">
                        a smarter approach to investing and real human.
                    </span>
                </p>
            </div>

            <CustomersCarts />
        </div>
    );
}

export default Customers;
