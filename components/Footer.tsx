'use client'

import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com' },
  { name: 'Email', icon: FiMail, href: 'mailto:hello@example.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="flex items-center justify-center gap-2">
              Made with <FiHeart className="text-red-500" /> © {currentYear} Modern Portfolio
            </p>
            <p className="mt-2 text-sm">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
