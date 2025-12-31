'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiSmartphone,
  FiTool,
  FiGitBranch,
} from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Frontend',
    icon: FiCode,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: FiServer,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'FastAPI', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 78 },
      { name: 'Firebase', level: 82 },
    ],
  },
  {
    title: 'Mobile',
    icon: FiSmartphone,
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 75 },
      { name: 'Expo', level: 88 },
      { name: 'Mobile UI/UX', level: 82 },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'Figma', level: 85 },
      { name: 'Postman', level: 90 },
    ],
  },
  {
    title: 'DevOps',
    icon: FiGitBranch,
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 90 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary-500 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          }}
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
