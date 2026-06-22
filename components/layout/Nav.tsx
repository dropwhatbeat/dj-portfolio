'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { usePostHog } from 'posthog-js/react'

export default function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const ph = usePostHog()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 80)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100]"
      animate={
        scrolled
          ? {
              backgroundColor: 'rgba(255,255,255,0.82)',
              backdropFilter: 'blur(20px) saturate(180%)',
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
      <div className="max-w-[1040px] mx-auto px-10 max-md:px-5 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.2px] text-ink hover:text-accent transition-colors duration-200"
        >
          Deng Jing
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-7 list-none">
            <li>
              <a href="#projects" className="text-[13px] text-ink3 hover:text-ink transition-colors duration-200" onClick={() => ph.capture('nav_clicked', { section: 'projects' })}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="text-[13px] text-ink3 hover:text-ink transition-colors duration-200" onClick={() => ph.capture('nav_clicked', { section: 'about' })}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[13px] text-ink3 hover:text-ink transition-colors duration-200" onClick={() => ph.capture('nav_clicked', { section: 'contact' })}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
