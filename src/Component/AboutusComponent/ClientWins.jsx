import Image from 'next/image'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'
import {
  AutomationPartner,
  AWS,
  DPIIT,
  GooglePartner,
  Linkedinpartner,
  MetaBussiness,
  PinterestPartner,
} from '@/AllAssets/AllAsssets'

const partnersTop = [
  { img: AWS, title: 'AWS Select Tier Service Partner Since 2017' },
  { img: MetaBussiness, title: 'Meta Business Partner Since 2017' },
  { img: Linkedinpartner, title: 'LinkedIn Marketing Partner Since 2017' },
]

const partnersBottom = [
  { img: GooglePartner },
  { img: PinterestPartner },
  { img: AutomationPartner },
  { img: DPIIT },
]

const ClientWins = () => {
  return (
    <SectionContainer>
      <Heading heading="Client Wins & Impact Metrics" />
      <div className="mt-10 grid overflow-hidden rounded-3xl border border-neutral-200 text-center shadow-sm">
        <div className="grid grid-cols-1 divide-y divide-neutral-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {partnersTop.map((partner) => (
            <article key={partner.title} className="flex flex-col items-center gap-4 p-8">
              <div className="relative h-16 w-40">
                <Image
                  src={partner.img}
                  alt={partner.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 160px, 40vw"
                />
              </div>
              <p className="text-sm font-medium text-neutral-700 sm:text-base">{partner.title}</p>
            </article>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-y divide-neutral-200 bg-neutral-50 md:grid-cols-4">
          {partnersBottom.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-6">
              <div className="relative h-12 w-28">
                <Image
                  src={partner.img}
                  alt="Partner logo"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 112px, 40vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default ClientWins
