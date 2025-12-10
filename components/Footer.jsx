'use client'

import { Linkedin, Github, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dwillconsult',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/Dman031',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:derwill503@gmail.com',
      label: 'Email',
    },
  ]

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="border-t border-accent/20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/60 font-body text-sm">
              © {currentYear} Derrick Williams
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.name.toLowerCase())}
                className="text-white/60 hover:text-accent font-body text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="text-white/60 hover:text-accent transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
        {/* AI Disclaimer */}
        <div className="text-center mt-4 pt-4 border-t border-accent/10">
          <p className="text-xs text-white/40 font-body">AI features powered by OpenAI. Chatbot responses are AI-generated.</p>
        </div>
      </div>
    </footer>
  )
}

