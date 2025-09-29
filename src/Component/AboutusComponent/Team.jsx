import { team1, team2, team3 } from "@/AllAssets/AllAsssets";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
    {
        name: "Poonam Kumari",
        role: "Founder & CEO",
        image: team1,
    },
    {
        name: "Ravi K Sankhyan",
        role: "Founder & CEO",
        image: team2,
    },
    {
        name: "Diksha Chauhan",
        role: "Digital Marketing Expert",
        image: team3,
    },
    {
        name: "Poonam Kumari",
        role: "Founder & CEO",
        image: team1,
    },
    {
        name: "Ravi K Sankhyan",
        role: "Founder & CEO",
        image: team2,
    },
    {
        name: "Diksha Chauhan",
        role: "Digital Marketing Expert",
        image: team3,
    },
];

export default function TeamGrid() {
    return (
        <div className="px-6 md:px-[72px] py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="flex flex-col p-2">
                        <div className="mb-4 w-full">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={400}
                                height={400}
                                className="h-full w-full rounded-lg object-cover"
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-[19px] font-unbounded font-semibold">{member.name}</h3>
                                <p className="text-[19px] font-montserrat text-gray-500">{member.role}</p>
                            </div>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                                aria-label={`Visit ${member.name}'s LinkedIn profile`}
                            >
                                <FaLinkedinIn className="text-lg text-gray-700" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
