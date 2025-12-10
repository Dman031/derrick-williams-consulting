'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const facts = [
    {
      title: 'Fortune 500 Clients',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Oracle Implementations',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'K-12 Platform Built',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: 'Healthcare Systems Deployed',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            From Systems to Solutions
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-highlight mx-auto rounded-full" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-white/80 font-body text-lg leading-relaxed">
              I started in talent acquisition, where I saw firsthand how broken
              systems create bottlenecks. Companies were spending millions on
              enterprise software, but implementations were failing because
              consultants didn't understand the business problems they were
              solving.
            </p>
            <p className="text-white/80 font-body text-lg leading-relaxed">
              That experience led me to implementation consulting at IBM, where
              I worked on Oracle HRIS/ATS implementations and Providence
              Healthcare Hypercare projects. I learned that the difference
              between success and failure isn't the technology—it's the
              translation between business needs and technical solutions.
            </p>
            <p className="text-white/80 font-body text-lg leading-relaxed">
              I founded PFW Group and built the Pennie Pass platform, a K-12
              solution that serves thousands of students. Now, I help enterprises
              get implementations right the first time—because when you're
              dealing with Oracle, ServiceNow, and Salesforce, there's no room
              for second chances.
            </p>
          </motion.div>

          {/* Right: Quick Facts Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className="text-accent mb-4">{fact.icon}</div>
                <h3 className="text-white font-heading font-semibold text-lg">
                  {fact.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-accent/10 border-l-4 border-accent p-8 rounded-r-lg">
            <p className="text-xl sm:text-2xl text-white/90 font-body italic leading-relaxed">
              "The best consultants don't just implement software—they translate
              business problems into technical solutions."
            </p>
          </div>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <motion.a
            href="/resume.pdf"
            download="Derrick_Williams_Resume.pdf"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

