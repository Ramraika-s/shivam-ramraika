'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code, Brain, Clock } from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-forest-light mb-4">Shivam Ramraika</h1>
        <p className="text-xl text-forest-accent">Computer Science Student at KIIT University</p>
      </motion.div>

      <motion.div
        className="bg-forest-dark/30 rounded-lg p-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-forest-light leading-relaxed">
          I am a Computer Science student at KIIT University, Bhubaneswar, with a deep interest in software development, AI, and machine learning. I'm passionate about creating impactful applications and continuously learning new technologies. I have a strong foundation in frontend development and problem-solving, and I am working towards becoming a proficient full-stack developer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-forest-dark/30 rounded-lg p-6 backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-forest-light mb-4 flex items-center">
            <Code className="mr-2" /> Technical Skills
          </h3>
          <ul className="list-disc list-inside text-forest-light space-y-2">
            <li>Frontend Development: HTML, CSS, JavaScript</li>
            <li>Backend Development: Python</li>
            <li>Version Control: Git, GitHub</li>
            <li>Problem Solving & Analytical Skills</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-forest-dark/30 rounded-lg p-6 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-forest-light mb-4 flex items-center">
            <Brain className="mr-2" /> Soft Skills
          </h3>
          <ul className="list-disc list-inside text-forest-light space-y-2">
            <li>Effective Communication</li>
            <li>Strong Teamwork</li>
            <li>Problem-solving Focus</li>
            <li>Time Management</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-forest-dark/30 rounded-lg p-6 backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-forest-light mb-4 flex items-center">
            <BookOpen className="mr-2" /> Languages
          </h3>
          <ul className="list-disc list-inside text-forest-light space-y-2">
            <li>English (Fluent)</li>
            <li>Hindi (Fluent)</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-forest-dark/30 rounded-lg p-6 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-forest-light mb-4 flex items-center">
            <Clock className="mr-2" /> Current Focus
          </h3>
          <ul className="list-disc list-inside text-forest-light space-y-2">
            <li>Full Stack Web Development Certification</li>
            <li>Python Certification</li>
            <li>Seeking Internship Opportunities</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

