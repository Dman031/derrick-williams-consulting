'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    // Typing effect for "Loading..."
    const text = 'Loading...'
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText(text.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearInterval(typeInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            {/* DW Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-20 h-20 border-4 border-accent border-t-transparent rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-3xl font-heading font-bold gradient-text">
                  DW
                </span>
              </motion.div>
            </motion.div>

            {/* Typing Effect Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 font-body text-lg"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                |
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

