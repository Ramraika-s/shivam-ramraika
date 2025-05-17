'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Building } from 'lucide-react'
import { useTheme } from '../theme-provider'

export default function Education() {
  const { theme } = useTheme();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-forest-accent/10 rounded-lg blur-xl" />
      <div className={`relative rounded-lg p-6 h-full backdrop-blur-sm ${theme === 'day' ? 'content-bg ' : 'content-bg '}`}>
        <div className="flex flex-col space-y-6">
          <div className="flex items-start space-x-4">
            <GraduationCap className="w-6 h-6 text-forest-accent mt-1" />
            <div>
              <h3 className={`text-xl font-bold ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                Bachelor of Technology (B.Tech) in Computer Science
              </h3>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Building className="w-5 h-5 text-forest-accent" />
            <p className={`${theme === 'day' ? 'text-black' : 'text-white'}`}>
              KIIT University, Bhubaneswar, India
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5 text-forest-accent" />
            <p className={`${theme === 'day' ? 'text-black' : 'text-white'}`}>
              Batch: 2024-2028
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
