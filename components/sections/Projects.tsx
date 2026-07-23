'use client'

import { useRef, useEffect, useState } from 'react'
import { projects } from '@/lib/projects'
import type { Project, StatsResponse } from '@/lib/types'
import ProjectScene, { ProjectLogo } from '@/components/ui/ProjectIllustration'

type ProjectsProps = {
  stats: StatsResponse
}

export default function Projects({ stats: _stats }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const N = projects.length

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    function update() {
      if (window.innerWidth <= 900) {
        track!.style.transform = ''
        return
      }
      const rect = section!.getBoundingClientRect()
      const sectionScroll = section!.offsetHeight - window.innerHeight
      if (sectionScroll <= 0) return
      const progress = Math.max(0, Math.min(1, -rect.top / sectionScroll))
      // Only shift by however much the track actually overflows its container.
      // On wide viewports where all cards already fit, this is 0, so cards
      // stay in view instead of being pushed off-screen to the left.
      const maxShift = Math.max(0, track!.scrollWidth - track!.clientWidth)
      track!.style.transform = `translateX(${-progress * maxShift}px)`
      const idx = Math.min(N - 1, Math.round(progress * (N - 1)))
      setActiveIdx(idx)
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [N])

  function scrollToCard(i: number) {
    const section = sectionRef.current
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY
    const range = section.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + (i / (N - 1)) * range, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section border-t border-[0.5px] border-rule"
      style={{ height: 'calc(100vh + 1100px)', padding: 0 }}
    >
      <div
        className="projects-sticky sticky bg-white flex flex-col"
        style={{ top: '56px', height: 'calc(100vh - 56px)', padding: '44px 0 28px' }}
      >
        {/* Header */}
        <div className="flex items-baseline justify-between px-10 max-[600px]:px-5 mb-7 flex-shrink-0">
          <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5">
            Mini Projects
          </p>
          <div className="text-[13px] text-ink4 tabular-nums">
            <span className="text-[13px] font-semibold text-ink2">
              {String(activeIdx + 1).padStart(2, '0')}
            </span>
            <span> / 0{N}</span>
          </div>
        </div>

        {/* Track */}
        <div className="projects-track-overflow flex-1 px-10 max-[600px]:px-5 min-h-0 overflow-hidden">
          <div
            ref={trackRef}
            className="projects-track flex gap-6 h-full"
            style={{ willChange: 'transform' }}
          >
            {projects.map((project, i) => (
              <ProjectCardLarge
                key={project.name}
                project={project}
                isActive={i === activeIdx}
              />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 pt-4 flex-shrink-0">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`rounded-full border-0 p-0 cursor-pointer transition-[background-color,transform] duration-300 ${
                i === activeIdx ? 'bg-accent scale-[1.4]' : 'bg-rule'
              }`}
              style={{ width: '6px', height: '6px' }}
              aria-label={`Go to ${p.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type CardProps = {
  project: Project
  isActive: boolean
}

function ProjectCardLarge({ project, isActive }: CardProps) {
  const { name, tagline, description, tags, url, displayUrl, previewBg } = project
  const isBullshit = name === 'Bullshit Factory'

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    e.currentTarget.style.transition = 'opacity 0.55s ease, box-shadow 0.12s ease'
    e.currentTarget.style.transform = `scale(1) perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`
    e.currentTarget.style.boxShadow = '0 24px 52px rgba(0,0,0,0.12)'
  }

  function onMouseLeave(e: React.MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.transition = 'opacity 0.55s ease, transform 0.55s ease, box-shadow 0.55s ease'
    e.currentTarget.style.transform = ''
    e.currentTarget.style.boxShadow = ''
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`proj-card group flex flex-col flex-shrink-0 overflow-hidden rounded-2xl bg-white cursor-pointer transition-[opacity,transform,box-shadow] duration-[550ms] ease-[ease] ${
        isActive
          ? 'opacity-100 scale-100 shadow-[0_16px_48px_rgba(0,0,0,0.09)]'
          : 'opacity-45 scale-[0.955]'
      }`}
      style={{ width: '520px', minWidth: '520px', height: '100%', border: '0.5px solid #e5e5ea' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Preview band */}
      <div
        className="flex flex-shrink-0 overflow-hidden"
        style={{ height: '46%', background: previewBg ?? '#f5f5f7' }}
      >
        {/* Left: brand poster */}
        <div
          className="flex flex-col items-center justify-center flex-shrink-0"
          style={{
            width: '38%',
            borderRight: '0.5px solid rgba(0,0,0,0.07)',
            padding: '16px',
            background: 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.58) 0%, transparent 72%)',
          }}
        >
          <ProjectLogo name={name} />
        </div>
        {/* Right: product scene */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{ background: 'radial-gradient(ellipse at 80% -10%, rgba(255,255,255,0.4) 0%, transparent 55%)' }}
          />
          <ProjectScene name={name} />
        </div>
      </div>

      {/* Card body */}
      <div
        className={`flex-1 flex flex-col overflow-hidden min-h-0 ${isBullshit ? 'group-hover:bg-[#FFF9EC]' : ''} transition-colors duration-300`}
        style={{ padding: '22px 26px 20px', gap: '8px' }}
      >
        <div className="flex items-center flex-wrap" style={{ gap: '7px', marginBottom: '3px' }}>
          <span className="text-[16px] font-semibold text-ink group-hover:text-accent transition-colors duration-200">
            {name}
          </span>
          <span
            className="inline-flex items-center text-[10px] font-semibold tracking-[0.4px] text-[#15803d] bg-[#f0fdf4] border-[#bbf7d0] rounded-full flex-shrink-0"
            style={{ gap: '5px', padding: '2px 7px', border: '0.5px solid #bbf7d0' }}
          >
            <span
              className="rounded-full bg-[#22c55e] flex-shrink-0"
              style={{ width: '5px', height: '5px', animation: 'pulse-dot 2.5s ease-in-out infinite' }}
            />
            LIVE
          </span>
        </div>

        <p className="text-[13px] text-ink3 leading-[1.5]">{tagline}</p>
        <p className="text-[14px] leading-[1.72] text-ink2 flex-1">{description}</p>

        <div className="flex flex-wrap" style={{ gap: '5px' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-ink4"
              style={{ border: '0.5px solid #e5e5ea', borderRadius: '5px', padding: '2px 7px' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between" style={{ marginTop: '4px' }}>
          <span className="text-[11px] text-ink5">{displayUrl}</span>
          <svg
            className="text-ink5 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-[color,transform] duration-200 flex-shrink-0"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </a>
  )
}
