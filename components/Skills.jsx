'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'Platforms',
      skills: ['Oracle', 'ServiceNow', 'Salesforce', 'Palantir', 'Workday'],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['Oracle Cloud (OCI)', 'Terraform', 'AWS'],
    },
    {
      title: 'Technical',
      skills: ['Python', 'SQL / PL/SQL', 'Data Analysis', 'Process Automation'],
    },
    {
      title: 'Compliance',
      skills: ['HIPAA', 'SOX', 'PCI-DSS'],
    },
  ]

  return (
    <section
      id="skills"
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
            Technical Arsenal
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-highlight mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.15 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-body border border-accent/30 hover:border-accent hover:bg-accent/20 hover:glow transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

