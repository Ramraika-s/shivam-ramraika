'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '../theme-provider'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shivamramraika01@gmail.com",
    href: "mailto:shivamramraika01@gmail.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Ramraika-s",
    href: "https://github.com/Ramraika-s"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Shivam Ramraika",
    href: "https://www.linkedin.com/in/shivam-ramraika-102468333/"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "KIIT University, Bhubaneswar",
    href: "https://maps.google.com/?q=9R39%2B9RG,+Chandaka+Industrial+Estate,+K+I+I+T+University,+Patia,+Bhubaneswar,+Odisha+751024",
  }
]

export default function Contact() {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactInfo.map((info, index) => {
        const Icon = info.icon
        return (
          <motion.div
            key={info.label}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-forest-accent/10 rounded-lg blur-xl" />
            <div className="relative bg-forest-dark/50 rounded-lg p-6 backdrop-blur-sm border border-forest-accent/20">
              <div className="flex items-start space-x-4">
                <Icon className="w-6 h-6 text-forest-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className={`text-sm ${theme === 'day' ? 'text-black' : 'text-white'}`}>{info.label}</div>
                  {info.href ? (
                    <Link
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme === 'day' ? 'text-black' : 'text-white'} hover:text-forest-accent transition-colors block`}
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <div className={`${theme === 'day' ? 'text-black' : 'text-white'}`}>{info.value}</div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

