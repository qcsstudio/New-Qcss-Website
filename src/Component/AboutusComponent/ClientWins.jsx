// components/ClientWins.tsx
import { AutomationPartner, AWS, DPIIT, GooglePartner, Linkedinpartner, MetaBussiness, PinterestPartner } from "@/AllAssets/AllAsssets";
import Image from "next/image";

export default function ClientWins() {
    const partnersTop = [
        {
            img: AWS,
            title: "AWS Select Tier Service Partner Since 2017",
        },
        {
            img: MetaBussiness,
            title: "Meta Business Partner Since 2017",
        },
        {
            img: Linkedinpartner,
            title: "LinkedIn Marketing Partner Since 2017",
        },
    ];

    const partnersBottom = [
        { img: GooglePartner },
        { img: PinterestPartner },
        { img: AutomationPartner },
        { img: DPIIT },
    ];

    return (
        <section className=" px-6 md:px-[72px] my-10 ">
            <div className="mx-auto px-4">
                {/* Heading */}
                <div className="flex justify-between items-start mb-8">
                    <h2 className="text-3xl md:text-[40px] font-unbounded font-bold mb-4">
                        Client Wins & Impact Metrics
                    </h2>

                </div>

                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
                    {partnersTop.map((partner, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-between border border-gray-200 p-6 h-56"
                        >
                            <div className=" w-28 h- mb-3">
                                <Image
                                    src={partner.img}
                                    alt={partner.title || "Partner"}

                                    className="object-cover"
                                />
                            </div>
                            {partner.title && (
                                <p className="text-[17px] font-light text-gray-700 text-center font-unbounded leading-snug w-[70%] mx-auto">
                                    {partner.title}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 border border-t-0 border-gray-200">
                    {partnersBottom.map((partner, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center border border-t-0 border-gray-200 p-6 h-40"
                        >
                            <div className=" w-28 h-14 mb-3">
                                <Image
                                    src={partner.img}
                                    alt={partner.title || "Partner"}
                                    
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
