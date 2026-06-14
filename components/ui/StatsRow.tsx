import type { ProjectStats } from '@/lib/types'

type StatsRowProps = {
  stats: ProjectStats
}

export default function StatsRow({ stats }: StatsRowProps) {
  if (!stats) return null

  const formatK = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)

  return (
    <p className="text-[12px] text-ink5 mt-2">
      {formatK(stats.visitors)} visitors · {formatK(stats.sessions)} sessions
    </p>
  )
}
