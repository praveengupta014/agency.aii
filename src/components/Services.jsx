import React from 'react'
import assets from '../assets/assets-2/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react'


const Services = () => {
    const ServicesData = [
        {
            title: 'advertising',
            description: 'we turn bold ideas into powerful digital solutions connect engage...',
            icon: assets.ads_icon
        },

        {
            title: 'content marketing',
            description: 'we help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
         {
            title: 'content writing',
            description: 'we help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
         {
            title: 'social media',
            description: 'we help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        },
        
    ]
  return (
        <motion.div
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        
        id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

          <img src={assets.bgImage2} alt="" className='absolute -top-40 -left-20 -z-10 dark:hidden' />

         <Title title="How Can We Help you" desc='From strategy to execution, we craft digital solutions that move your business forward.' />

         <div className='flex flex-col md:grid grid-cols-2'>
            {ServicesData.map((service, index) => (
               <ServiceCard key={index} service={service} index={index}/>
            ))}
         </div>


    </motion.div>
  )
}

export default Services