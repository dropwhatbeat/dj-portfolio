'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const headline = 'Building things that should have existed already.'
const words = headline.split(' ')

export default function Hero() {
  const { scrollY } = useScroll()
  const [showChevron, setShowChevron] = useState(true)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShowChevron(y < 300)
  })

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14">
      <div className="max-w-5xl mx-auto px-10 max-md:px-6 py-24">
        <motion.p
          className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-8"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Product · Projects · Singapore
        </motion.p>

        <h1 className="text-5xl max-md:text-4xl font-semibold tracking-[-1.5px] text-ink mb-6 max-w-3xl leading-[1.1]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1 + i * 0.04,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-[17px] leading-relaxed text-ink3 mb-10 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
        >
          Technical PM by day. I build side projects to scratch my own itches —
          usually things I wished existed but couldn&apos;t find.
        </motion.p>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.55 }}
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-[14px] font-medium text-ink border border-[0.5px] border-ink rounded-lg hover:bg-subtle transition-colors duration-200"
          >
            View CV
          </a>
          <a
            href="https://linkedin.com/in/deng-jing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-5 py-2.5 text-[14px] font-medium text-ink3 hover:text-ink transition-colors duration-200"
          >
            LinkedIn
            <span className="text-ink5">↗</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ opacity: showChevron ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.svg
          className="w-5 h-5 text-ink5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </motion.div>
    </section>
  )
}
