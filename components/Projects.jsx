'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'ServiceNow SLG Demo',
      subtitle: 'AI-Powered Service Management',
      description:
        'State & Local Government workflow automation with Now Assist AI',
      tech: ['ServiceNow', 'Python', 'AI/ML'],
      demoLink: 'https://kcm4sbxykwsmtm6v94heng.streamlit.app',
      codeLink: 'https://github.com/Dman031/servicenow-slg-demo',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: 'Oracle Migration Accelerator',
      subtitle: 'Enterprise Database Migration',
      description:
        'Schema comparison, data validation, HIPAA compliance toolkit',
      tech: ['Oracle', 'Python', 'SQL'],
      demoLink: 'https://oracle-migration-accelerator-krim2vh3ijdqyubmhxv7fj.streamlit.app/',
      codeLink: 'https://github.com/Dman031/oracle-migration-accelerator',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      title: 'OCI Infrastructure Console',
      subtitle: 'Cloud Deployment Templates',
      description:
        'Terraform modules for Oracle Cloud with cost estimation',
      tech: ['Terraform', 'OCI', 'Python'],
      demoLink: 'https://oci-customer-deployment-templates-qdhfnxmuvfhpnnjm7reusa.streamlit.app/',
      codeLink: 'https://github.com/Dman031/oci-customer-deployment-templates',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1V9a1 1 0 00-1-1h-3m-1-1l-3 3m0 0l3 3m-3-3h12a6 6 0 010 12h-3"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark"
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
            What I've Built
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-highlight mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="h-full bg-secondary/30 backdrop-blur-md rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Icon/Screenshot Placeholder */}
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-accent font-body font-medium mb-4">
                  {project.subtitle}
                </p>
                <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-body border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-accent text-white rounded-lg font-body font-medium text-sm text-center glow-accent hover:glow-strong transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-transparent border border-accent text-accent rounded-lg font-body font-medium text-sm text-center hover:bg-accent/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Code
                    </motion.a>
                  </div>
                  <p className="text-xs text-slate-500 text-center mt-1">Demo may take 30s to wake up</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All on GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/Dman031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-body font-medium hover:text-accentGlow transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All on GitHub</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

