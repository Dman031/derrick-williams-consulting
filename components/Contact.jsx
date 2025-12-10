'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MapPin, Calendar, Copy, Check } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'derwill503@gmail.com',
      href: 'mailto:derwill503@gmail.com',
      copyable: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dwillconsult',
      href: 'https://linkedin.com/in/dwillconsult',
      copyable: false,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Dman031',
      href: 'https://github.com/Dman031',
      copyable: false,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lake Oswego, OR',
      href: null,
      copyable: false,
    },
  ]

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('derwill503@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary relative overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Let's Build Something
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-highlight mx-auto rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-6">
              Get in Touch
            </h3>
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-secondary/30 backdrop-blur-sm rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 font-body text-sm mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white font-body hover:text-accent transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-body">{item.value}</p>
                    )}
                  </div>
                  {item.copyable && (
                    <motion.button
                      onClick={handleCopyEmail}
                      className="p-2 text-accent hover:text-accentGlow transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </motion.button>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                Ready to transform your enterprise systems?
              </h3>
              <p className="text-white/80 font-body text-lg leading-relaxed mb-8">
                Book a 30-minute consultation to discuss your Oracle, ServiceNow,
                or Salesforce needs.
              </p>
              <motion.a
                href="https://calendly.com/derwill503/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-body font-medium glow-accent hover:glow-strong transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

