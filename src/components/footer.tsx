import { Link } from "react-router";
import FooterBottom from "./footerBottom";

const footerSections = [
  {
    title: "Company",
    links: [
      { title: "About", to: "#" },
      { title: "Pricing", to: "#" },
      { title: "Jobs", to: "#" },
      { title: "Blog", to: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { title: "Sales Software", to: "#" },
      { title: "Marketplace", to: "#" },
      { title: "Terms & Conditions", to: "#" },
      { title: "Privacy Policy", to: "#" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { title: "Community", to: "#" },
      { title: "Knowledge Base", to: "#" },
      { title: "Academy", to: "#" },
      { title: "Support", to: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div
      className="flex flex-col px-7 sm:px-27 bg-[linear-gradient(to_left_bottom,var(--tw-gradient-stops))]
      from-[#FFD9C1] to-[#FBDCFD]"
      style={{
        ["--tw-gradient-stops" as any]: `
        var(--tw-gradient-from),
        #FED5FF 33%,
        #D6EDFA 66%,
        var(--tw-gradient-to)
      `,
      }}
    >
      <div className="grow" />

      <footer className="border-t pt-17">
        <div className="max-w-(--breakpoint-xl) mx-auto">

          {/* first line */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between sm:mb-5 md:mb-10 gap-6">
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Let’s Sit &Talk
            </h4>

            <div className="flex gap-2 items-center w-full sm:w-auto">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="text-xl sm:text-2xl lg:text-3xl placeholder:text-xl sm:placeholder:text-2xl lg:placeholder:text-3xl bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black pb-1 w-full"
              />
              <img src="/others/lesden.png" alt="icon" className="w-8 sm:w-10" />
            </div>
          </div>

          {/* second line */}
          <div className="
            py-12 
            flex flex-col lg:flex-row 
            justify-between items-start 
            gap-10 lg:gap-0
          ">

            {/* Address */}
            <div>
              <span className="text-[18px]">Address</span>
              <p className="text-[12px] leading-[23px] mt-2 sm:mt-3 md:mt-6 max-w-xs">
                475 Cherry Dr, Troy, Michigan 48083
                <span className="block">
                  United States ( (248) 823-3200 )
                </span>
              </p>
            </div>

            {/* footer section links */}
            <div className="flex flex-wrap sm:flex-nowrap gap-10 md:gap-15">
              {footerSections.map(({ title, links }) => (
                <div key={title}>
                  <h6 className="font-medium">{title}</h6>
                  <ul className="mt-6 space-y-4">
                    {links.map(({ title, to }) => (
                      <li key={title}>
                        <Link
                          to={to}
                          className="text-[#6B7280] text-[14px] hover:text-foreground"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <FooterBottom />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
