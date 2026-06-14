export type Project = {
  name: string
  status: 'live' | 'building'
  tagline: string
  description: string
  tags: string[]
  url?: string
  displayUrl?: string
  previewBg?: string
  emoji?: string
  posthogKey?: string
}

export type ProjectStats = {
  visitors: number
  sessions: number
} | null

export type StatsResponse = {
  [projectName: string]: ProjectStats
}
