'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi'

const stats = [
  { icon: FiCode, label: 'Projects Completed', value: '50+' },
  { icon: FiTrendingUp, label: 'Years Experience', value: '5+' },
  { icon: FiUsers, label: 'Happy Clients', value: '30+' },
  { icon: FiAward, label: 'Awards Won', value: '10+' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate Full Stack Developer with a love for creating
                beautiful, functional, and user-centered digital experiences.
                With over 5 years of experience in web development, I've had the
                privilege of working with various technologies and frameworks.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My journey in tech started with a curiosity about how websites
                work, and it has evolved into a career that I'm truly passionate
                about. I specialize in building modern web applications using
                React, Next.js, Node.js, and various other cutting-edge
                technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
