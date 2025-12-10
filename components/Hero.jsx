'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showHeadline, setShowHeadline] = useState(false)

  const rotatingWords = [
    'Project-Based Learners',
    'Real-World Builders',
    'Enterprise Consultants',
  ]

  const stats = [
    {
      value: '73%',
      label: 'of executives prefer skills-based hiring over degrees',
      source: 'LinkedIn 2024',
    },
    {
      value: '$1.8T',
      label: 'spent annually on enterprise software implementations',
      source: 'Gartner',
    },
    {
      value: '67%',
      label: 'of digital transformations fail without proper consulting',
      source: 'McKinsey',
    },
    {
      value: '7,700+',
      label: 'enterprise customers on ServiceNow',
      source: '',
    },
    {
      value: '$5.6B',
      label: 'Oracle Cloud quarterly revenue',
      source: '',
    },
    {
      value: '300+',
      label: 'government & enterprise clients on Palantir',
      source: '',
    },
  ]

  useEffect(() => {
    // Show headline after initial delay
    setShowHeadline(true)

    // Typing effect for rotating words
    const word = rotatingWords[currentWord]
    let charIndex = 0
    let isDeleting = false

    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex < word.length) {
        setDisplayText(word.substring(0, charIndex + 1))
        charIndex++
      } else if (!isDeleting && charIndex === word.length) {
        setTimeout(() => {
          isDeleting = true
        }, 2500)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(word.substring(0, charIndex - 1))
        charIndex--
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearInterval(typeInterval)
  }, [currentWord])

  const handleSmoothScroll = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-dark px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Animated Headline */}
        <AnimatePresence mode="wait">
          {showHeadline && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
              >
                The Future Belongs to...
              </motion.h1>
              <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="min-h-[1.5em]"
              >
                <span className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold inline-block">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Leader Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-400 text-lg max-w-3xl mx-auto mb-12"
        >
          "From Palantir's{' '}
          <span className="text-white font-semibold">Alex Karp</span> to
          NVIDIA's <span className="text-white font-semibold">Jensen Huang</span>
          —the leaders transforming industries didn't wait for permission. They
          built."
        </motion.div>

        {/* Animated Stats Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.0 + index * 0.12,
                ease: 'easeOut',
              }}
              className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-accent font-heading font-bold text-2xl mb-2">
                {stat.value}
              </div>
              <p className="text-white/90 font-body text-sm sm:text-base mb-2">
                {stat.label}
              </p>
              {stat.source && (
                <p className="text-accent/70 text-xs font-body">{stat.source}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg shadow-blue-500/20"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)',
                  '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)',
                  '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/derrick.jpg"
                alt="Derrick Williams"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3"
          >
            I'm Derrick Williams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="text-lg sm:text-xl text-white/80 font-body max-w-2xl"
          >
            I help enterprises implement Oracle, ServiceNow, and Salesforce
            solutions that actually work.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => handleSmoothScroll('projects')}
            className="px-8 py-3 bg-accent text-white rounded-lg font-body font-medium glow-accent hover:glow-strong transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => window.dispatchEvent(new Event('openChatbot'))}
            className="px-8 py-3 bg-transparent border-2 border-accent text-accent rounded-lg font-body font-medium hover:bg-accent/10 transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chat with Consulty
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

