'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 80)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40"
      animate={
        scrolled
          ? {
              backgroundColor: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(20px)',
              borderBottomWidth: '0.5px',
              borderBottomColor: '#e5e5ea',
            }
          : {
              backgroundColor: 'rgba(255,255,255,0)',
              backdropFilter: 'blur(0px)',
              borderBottomWidth: '0.5px',
              borderBottomColor: 'rgba(229,229,234,0)',
            }
      }
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-5xl mx-auto px-10 max-md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-semibold text-ink tracking-tight">
          Deng Jing
        </Link>
        <nav className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-[13px] text-ink3 hover:text-ink transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-[13px] text-ink3 hover:text-ink transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[13px] text-ink3 hover:text-ink transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
