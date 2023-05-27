"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const HeroImages = (props: Props) => {
  return (
    <div className="w-full px-4 lg:w-1/2">
    <motion.div initial={{opacity:0.1, scale:0.3, translateX: 100}} whileInView={{opacity:1,scale:1,translateX:0, transition:{duration:1}}} className="flex flex-wrap lg:mb-4 lg:ml-6">
      <Image className="object-cover w-full h-64 p-2 md:w-1/2 lg:w-1/3 rounded-3xl lg:rounded-br-none" src="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=941&amp;q=80" width={941} height={80} alt=""/>
      <Image className="object-cover w-full h-64 p-2 md:w-1/2 lg:w-2/3 rounded-3xl lg:rounded-bl-none" src="https://images.unsplash.com/photo-1559136560-16ad036d85d3?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" width={1050} height={80} alt=""/>
    </motion.div>
    <motion.div initial={{opacity:0.1, scale:0.3, translateX: 100}} whileInView={{opacity:1,scale:1,translateX:0, transition:{duration:1}}}  className="flex flex-wrap lg:mb-4 lg:mr-6 ">
      <Image  className="object-cover w-full h-64 p-2 md:w-1/2 lg:w-2/3 rounded-3xl lg:rounded-br-none" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" width={967} height={80} alt=""/>
      <Image className="object-cover w-full h-64 p-2 md:w-1/2 lg:w-1/3 rounded-3xl lg:rounded-bl-none" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1190&amp;q=80" width={1190} height={80} alt=""/>
    </motion.div>
  </div>
  )
}

export default HeroImages