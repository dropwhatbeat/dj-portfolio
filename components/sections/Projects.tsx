'use client'

import { useRef, useState, useEffect } from 'react'
import { projects } from '@/lib/projects'
import type { Project, StatsResponse } from '@/lib/types'
import ProjectScene, { ProjectLogo } from '@/components/ui/ProjectIllustration'

// The preview illustrations are authored at this fixed pixel size; the whole
// canvas is uniformly scaled to fit whatever width the card actually renders at,
// so it shrinks proportionally on narrow cards instead of clipping/overflowing.
const PREVIEW_W = 520
const PREVIEW_H = 230

type ProjectsProps = {
  stats: StatsResponse
}

export default function Projects({ stats: _stats }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="projects-section border-t border-[0.5px] border-rule"
      style={{ padding: '48px 0 72px' }}
    >
      {/* Header */}
      <div className="flex items-baseline justify-between px-10 max-[600px]:px-5 mb-8">
        <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5">
          Mini Projects
        </p>
        <div className="text-[13px] text-ink4 tabular-nums">
          <span className="text-[13px] font-semibold text-ink2">0{projects.length}</span>
          <span> projects</span>
        </div>
      </div>

      {/* Grid */}
      <div className="px-10 max-[600px]:px-5">
        <div className="grid gap-6 grid-cols-1 min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 items-stretch">
          {projects.map((project) => (
            <ProjectCardLarge key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

type CardProps = {
  project: Project
}

function ProjectCardLarge({ project }: CardProps) {
  const { name, tagline, description, tags, url, displayUrl, previewBg } = project
  const isBullshit = name === 'Bullshit Factory'

  const cardRef = useRef<HTMLAnchorElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setScale(el.clientWidth / PREVIEW_W)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    e.currentTarget.style.transition = 'box-shadow 0.12s ease'
    e.currentTarget.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`
    e.currentTarget.style.boxShadow = '0 24px 52px rgba(0,0,0,0.12)'
  }

  function onMouseLeave(e: React.MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.transition = 'transform 0.55s ease, box-shadow 0.55s ease'
    e.currentTarget.style.transform = ''
    e.currentTarget.style.boxShadow = ''
  }

  return (
    <a
      ref={cardRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card group flex flex-col overflow-hidden rounded-2xl bg-white cursor-pointer shadow-[0_10px_32px_rgba(0,0,0,0.07)] transition-[transform,box-shadow] duration-[550ms] ease-[ease]"
      style={{ border: '0.5px solid #e5e5ea' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Preview band — fixed-size canvas scaled to fit the card width */}
      <div
        className="flex-shrink-0 overflow-hidden"
        style={{ height: PREVIEW_H * scale, background: previewBg ?? '#f5f5f7' }}
      >
        <div
          className="flex"
          style={{
            width: PREVIEW_W,
            height: PREVIEW_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
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
      </div>

      {/* Card body */}
      <div
        className={`flex-1 flex flex-col ${isBullshit ? 'group-hover:bg-[#FFF9EC]' : ''} transition-colors duration-300`}
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
