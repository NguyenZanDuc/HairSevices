import Image from 'next/image'
import HeroSection from './components/HeroSection'
import CardAByNextUi from '@/components/ui/CardAByNextUi'
import HairStylesSection from './components/HairStylesSection'

export default function Home() {
  return (
   <main>
      <HeroSection />
     <HairStylesSection />
   </main>
  )
}
