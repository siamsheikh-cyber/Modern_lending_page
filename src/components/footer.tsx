import { Link } from "react-router";
import FooterBottom from "./footerBottom";


const footerSections = [
  {
    title: "Company",
    links: [
      {
        title: "About",
        to: "#",
      },
      {
        title: "Pricing",
        to: "#",
      },
      {
        title: "Jobs",
        to: "#",
      },
      {
        title: "Blog",
        to: "#",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        title: "Sales Software",
        to: "#",
      },
      {
        title: "Marketplace",
        to: "#",
      },
      {
        title: "Terms & Conditions",
        to: "#",
      },
      {
        title: "Privacy Policy",
        to: "#",
      },
    ],
  },
  {
    title: "Help Center",
    links: [
      {
        title: "Community",
        to: "#",
      },
      {
        title: "Knowledge Base",
        to: "#",
      },
      {
        title: "Academy",
        to: "#",
      },
      {
        title: "Support",
        to: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div
      className="flex flex-col px-27 bg-[linear-gradient(to_left_bottom,var(--tw-gradient-stops))] 
  from-[#FFD9C1] to-[#FBDCFD]"
      style={{
        ["--tw-gradient-stops" as any]: `
      var(--tw-gradient-from),
      #FED5FF 33%,
      #D6EDFA 66%,
      var(--tw-gradient-to)
    `
      }}
    >
      <div className="grow " />
      <footer className="border-t pt-17">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          {/* first line start*/}
          <div className="flex items-center justify-between mb-10">
            <h4 className="text-5xl font-extrabold">Let’s Sit &Talk</h4>

            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" text-3xl placeholder:text-3xl bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black pb-1 " />
              <img src="/others/lesden.png" alt="icon" />
            </div>
          </div>
          {/* first line end */}

          <div className="py-12 flex justify-between items-start">

            {/* Address */}
            <div className="col-span-full xl:col-span-2">
              <span className="text-[18px]">Address</span>
              <p className="text-[12px] leading-[23px] mt-6">475 Cherry Dr, Troy, Michigan 48083 <span className="block">United States ( (248) 823-3200 )</span></p>
            </div>

            {/* details start */}
            <div className="flex gap-15">
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
