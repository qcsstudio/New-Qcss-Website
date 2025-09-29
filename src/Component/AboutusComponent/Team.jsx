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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-2 flex flex-col"
          >
            {/* Profile Image */}
              <div className="w-full   mb-4">
                <Image

                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="rounded-lg w-full h-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

            {/* Name & Role */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[19px] font-unbounded font-semibold">{member.name}</h3>
                <p className="text-gray-500 font-montserrat text-[19px]">{member.role}</p>
              </div>

              {/* LinkedIn Icon */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FaLinkedinIn className="text-gray-700 text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
