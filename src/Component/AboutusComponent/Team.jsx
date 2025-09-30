import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'
import { team1, team2, team3 } from '@/AllAssets/AllAsssets'

const teamMembers = [
  { name: 'Poonam Kumari', role: 'Founder & CEO', image: team1 },
  { name: 'Ravi K Sankhyan', role: 'Founder & CEO', image: team2 },
  { name: 'Diksha Chauhan', role: 'Digital Marketing Expert', image: team3 },
  { name: 'Poonam Kumari', role: 'Founder & CEO', image: team1 },
  { name: 'Ravi K Sankhyan', role: 'Founder & CEO', image: team2 },
  { name: 'Diksha Chauhan', role: 'Digital Marketing Expert', image: team3 },
]

const TeamGrid = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <Heading heading="Meet the Humans Behind the AI" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={`${member.name}-${member.role}`} className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(min-width: 1024px) 320px, 50vw" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-unbounded font-semibold text-neutral-900">{member.name}</h3>
                <p className="text-sm text-neutral-600 sm:text-base">{member.role}</p>
              </div>
              <a
                href="https://www.linkedin.com/company/qcsstudio"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200"
                aria-label={`View ${member.name}'s LinkedIn profile`}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default TeamGrid
