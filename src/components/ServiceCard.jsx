import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const ServiceCard = ({ service, index }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)
    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            ref={divRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className={`relative overflow-hidden rounded-xl border transition-all duration-300 bg-white dark:bg-gray-900
                ${hovered ? 'border-primary shadow-lg shadow-primary/10' : 'border-gray-200 dark:border-gray-700'}`}
        >
            {/* cursor glow */}
            <div
                className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[250px] h-[250px] absolute z-0 transition-opacity duration-500 mix-blend-lighten'
                style={{ top: position.y - 125, left: position.x - 125, opacity: hovered ? 0.15 : 0 }}
            />

            {/* SINGLE content wrapper — koi empty div nahi */}
            <div className='relative z-10 flex items-center gap-6 p-6'>

                {/* rounded-full SIRF icon ke chhote badge pe */}
                <div className='shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800'>
                    <img src={service?.icon} alt="" className='w-7 h-7' />
                </div>

                <div className='flex-1'>
                    <h3 className='font-semibold text-lg text-gray-800 dark:text-white'>{service?.title}</h3>
                    <p className='text-sm mt-1.5 text-gray-500 dark:text-gray-400 leading-relaxed'>{service?.description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceCard