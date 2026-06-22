'use client'

import { useEffect, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'

export default function Hero() {
  const { scrollY } = useScroll()
  const [mounted, setMounted] = useState(false)
  const [showChevron, setShowChevron] = useState(true)
  const ph = usePostHog()

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true))
    })
  }, [])

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShowChevron(y < 180)
  })

  const fadeIn = (delay: number) => ({
    transition: `opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
  })

  return (
    <section
      id="hero"
      className="relative flex items-center"
      style={{ minHeight: '50vh', padding: '108px 0 64px' }}
    >
      <div className="max-w-[1040px] mx-auto px-10 max-[600px]:px-5 w-full">
        <div className="grid items-center [grid-template-columns:1fr_280px] gap-16 max-[900px]:[grid-template-columns:1fr] max-[900px]:gap-9">

          {/* Left: text */}
          <div>
            <p
              className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-[22px]"
              style={fadeIn(50)}
            >
              TECHNICAL PRODUCT MANAGER{' '}
              <span className="text-accent">·</span>
              {' '}SINGAPORE
            </p>

            <h1
              className="font-display font-normal text-ink mb-5"
              style={{
                ...fadeIn(160),
                fontSize: 'clamp(2.5rem, 4.6vw, 4.2rem)',
                lineHeight: 1.07,
                letterSpacing: '-0.02em',
              }}
            >
              Fun projects 
              <br />
              that I'm building
            </h1>

            <p
              className="text-[17px] text-ink3 leading-[1.6] mb-9 max-w-[400px]"
              style={fadeIn(300)}
            >
              Some ideas made it out of my mind
            </p>

            <div className="flex items-center gap-[6px]" style={fadeIn(430)}>
              <a
                href="https://linkedin.com/in/deng-jing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[13px] font-medium text-ink rounded-lg hover:bg-ink hover:text-white hover:border-ink transition-[background-color,color,border-color] duration-[180ms]"
                style={{ padding: '9px 20px', border: '0.5px solid rgba(29,29,31,0.38)' }}
                onClick={() => ph.capture('cta_clicked', { label: 'LinkedIn', location: 'hero' })}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="max-[900px]:max-w-[240px] max-[900px]:mx-auto"
            style={fadeIn(220)}
          >
            <HeroPhoto />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-ink5 pointer-events-none transition-opacity duration-300"
        style={{ opacity: showChevron ? 1 : 0 }}
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'bob 1.9s ease-in-out infinite' }}
        >
          <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}

function HeroPhoto() {
  const [rotated, setRotated] = useState(false)
  const ph = usePostHog()

  return (
    <div
      className="w-full overflow-hidden rounded-[20px] transition-transform duration-300 ease-out"
      style={{
        aspectRatio: '4/5',
        border: '1px solid #e5e5ea',
        transform: rotated ? 'rotate(0deg)' : 'rotate(1.5deg)',
      }}
      onMouseEnter={() => {
        setRotated(true)
        ph.capture('photo_hovered')
      }}
      onMouseLeave={() => setRotated(false)}
    >
      <Image
        src="/dj-photo.jpg"
        alt="Deng Jing"
        width={560}
        height={700}
        className="w-full h-full object-cover object-right"
        priority
      />
    </div>
  )
}
