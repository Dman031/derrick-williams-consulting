'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedStats() {
  const [isPaused, setIsPaused] = useState(false)

  const stats = [
    {
      text: "Alex Karp (Palantir CEO): Built $50B company on government/enterprise data",
    },
    {
      text: 'Jensen Huang (NVIDIA CEO): "The more you learn, the more you realize you can learn"',
    },
    {
      text: 'Enterprise software market: $783B by 2028',
    },
    {
      text: 'Cloud adoption: 94% of enterprises use cloud services',
    },
    {
      text: 'AI in consulting: 40% productivity increase',
    },
  ]

  // Duplicate stats multiple times for seamless loop
  const duplicatedStats = [...stats, ...stats, ...stats]

  return (
    <div className="relative w-full overflow-hidden bg-secondary/30 border-y border-accent/20">
      {/* Gradient fade on left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      
      {/* Gradient fade on right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div
        className="flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex"
          animate={{
            x: isPaused ? undefined : ['0%', '-33.333%'], // Move by one-third (one set of stats)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {duplicatedStats.map((stat, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 border-r border-accent/20"
            >
              <p className="text-white/80 font-body text-sm sm:text-base whitespace-nowrap">
                {stat.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

