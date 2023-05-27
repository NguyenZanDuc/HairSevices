import CardAByNextUi from '@/components/ui/CardAByNextUi'
import React from 'react'

type Props = {}

const HairStylesSection = (props: Props) => {
  return (
    <section className='py-4'>
        <p className='text-xl font-medium'>Các mẫu tóc mới nhất</p>
        <div className="flex flex-wrap justify-center w-full px-10 py-10 mx-auto overflow-hidden sm:justify-between 2xl:py-44 bg-blueGray-100">
            <CardAByNextUi />
            <CardAByNextUi />
            <CardAByNextUi />
            <CardAByNextUi />
            <CardAByNextUi />
            <CardAByNextUi />
            <CardAByNextUi />
            <CardAByNextUi />
            <CardAByNextUi />
        </div>
    </section>
  )
}

export default HairStylesSection