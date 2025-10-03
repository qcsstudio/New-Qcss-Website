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
    <section className="px-[72px] mt-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            {/* Profile Image */}
            <div className="mb-4 w-full">
              <Image

                src={member.image}
                alt={member.name}
                className="rounded-lg w-full h-full"
              />
            </div>

            {/* Name & Role */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-unbounded font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-montserrat text-gray-600">{member.role}</p>
              </div>

              {/* LinkedIn Icon */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
              >
                <FaLinkedinIn className="text-gray-700 text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
