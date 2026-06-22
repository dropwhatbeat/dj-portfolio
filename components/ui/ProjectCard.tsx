'use client'

import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import Badge from './Badge'
import Tag from './Tag'
import StatsRow from './StatsRow'
import type { Project, ProjectStats } from '@/lib/types'

type ProjectCardProps = {
  project: Project
  stats?: ProjectStats
}

export default function ProjectCard({ project, stats }: ProjectCardProps) {
  const { name, status, tagline, description, tags, url } = project
  const ph = usePostHog()

  const card = (
    <motion.div
      className="group border border-[0.5px] border-rule rounded-xl p-6 bg-white hover:bg-subtle transition-colors duration-200 cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-[17px] font-semibold text-ink">{name}</h3>
            <Badge status={status} />
          </div>
          <p className="text-[14px] text-ink3">{tagline}</p>
        </div>
        {url && (
          <svg
            className="w-4 h-4 text-ink5 flex-shrink-0 mt-0.5 group-hover:text-ink3 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        )}
      </div>
      <p className="text-[15px] leading-relaxed text-ink2 mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      {stats !== undefined && <StatsRow stats={stats} />}
    </motion.div>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onClick={() =>
          ph.capture('project_card_clicked', {
            project_name: name,
            project_status: status,
            project_tags: tags,
            project_url: url,
          })
        }
      >
        {card}
      </a>
    )
  }

  return card
}
