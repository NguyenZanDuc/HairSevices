import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import HeroImages from './HeroImages'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="relative z-10 pt-12 pb-20 lg:pt-20 bg-slate-200">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="flex items-center w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
          <div className="w-full text-center lg:text-left">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="mb-3 text-4xl font-bold text-white lg:text-5xl">
                <span>Build &amp; Launch without</span>
                <span className="text-purple-600">problems</span>
              </h2>
            </div>
            <div className="max-w-sm mx-auto lg:mx-0">
              <p className="mb-6 leading-loose text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              <div>
                <a className="inline-block w-full px-6 py-2 mb-3 font-semibold leading-loose text-white transition duration-200 bg-purple-600 animate-bounce lg:mb-0 lg:mr-3 lg:w-auto hover:bg-purple-700 rounded-l-xl rounded-t-xl" href="#">
                    Get Started
                </a>
                <a className="inline-block w-full px-6 py-2 font-semibold leading-loose text-white transition duration-200 bg-gray-900 border-2 border-gray-700 animate-bounce lg:w-auto hover:border-gray-600 rounded-l-xl rounded-t-xl" href="#">
                    How it works
                </a>
              </div>
            </div>
          </div>
        </div>
        <HeroImages />
      </div>
    </div>
  </div>
  )
}

export default HeroSection

