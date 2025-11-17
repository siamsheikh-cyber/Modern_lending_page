import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
    {
        id: 1,
        name: "Megan",
        designation: "Student at New York University",
        company: "TechCorp",
        testimonial:
            "“I absolutely love this cup. I’ve bought several different brands and there’s always something I end up not liking about them. This one checks all of the boxes.”",
        avatar: "#F2F2F4",
    },
    {
        id: 2,
        name: "Jerry Tang",
        designation: "Recent graduate, Marketing at Sweatpals",
        company: "InsightTech",
        testimonial:
            "“Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content Marketing”",
        avatar: "#FFBC99",
    },
    {
        id: 3,
        name: "David K.",
        designation: "Recent graduate",
        company: "DesignPro",
        testimonial:
            "“I absolutely love this cup. I’ve bought several different brands and there’s always something“",
        avatar: "#F2F2F4",
    },
    {
        id: 4,
        name: "Jerry Tang",
        designation: "Recent graduate, Marketing at Sweatpals",
        company: "InsightTech",
        testimonial:
            "“Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content Marketing”",
        avatar: "#FFBC99",
    },
    {
        id: 5,
        name: "Jerry Tang",
        designation: "Recent graduate, Marketing at Sweatpals",
        company: "InsightTech",
        testimonial:
            "“Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content Marketing”",
        avatar: "#FFBC99",
    },
    {
        id: 6,
        name: "David K.",
        designation: "Recent graduate",
        company: "DesignPro",
        testimonial:
            "“I absolutely love this cup. I’ve bought several different brands and there’s always something“",
        avatar: "#F2F2F4",
    },
];

const CustomersCarts = () => (
    <div className="min-h-screen flex justify-center items-center py-12 px-6">
        <div>
            <div className="max-w-(--breakpoint-xl) mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="mb-8 bg-linear-to-b from-[#F0E6E0] to-[#F0E6E0] rounded-xl p-6 break-inside-avoid shadow-2xl"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar className="size-10">
                                    <AvatarFallback className="text-xl font-medium bg-[#CC967A]">
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-lg font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-[#656565] mt-1.5">
                                        {testimonial.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5 text-[14px] leading-[23px] ">{testimonial.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);




export default CustomersCarts;
