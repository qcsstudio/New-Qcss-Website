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
        <section className="mx-auto my-12 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="w-full">
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
                        Client Wins & Impact Metrics
                    </h2>

                </div>

                {/* Top Row */}
                <div className="grid grid-cols-1 gap-6 rounded-2xl border border-gray-200 md:grid-cols-3">
                    {partnersTop.map((partner, i) => (
                        <div
                            key={i}
                            className="flex h-full flex-col items-center justify-between gap-4 border border-gray-200 bg-white p-6 text-center"
                        >
                            <div className="h-16 w-28">
                                <Image
                                    src={partner.img}
                                    alt={partner.title || "Partner"}
                                    width={112}
                                    height={64}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            {partner.title && (
                                <p className="text-sm font-unbounded font-medium text-gray-700 sm:text-base">
                                    {partner.title}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white md:grid-cols-4">
                    {partnersBottom.map((partner, i) => (
                        <div
                            key={i}
                            className="flex h-full flex-col items-center justify-center border border-gray-200 bg-white p-6"
                        >
                            <div className="h-14 w-28">
                                <Image
                                    src={partner.img}
                                    alt={partner.title || "Partner"}
                                    width={112}
                                    height={56}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
