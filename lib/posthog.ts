import type { ProjectStats, StatsResponse } from './types'
import { projects } from './projects'

const POSTHOG_API = 'https://us.posthog.com'

async function queryProjectStats(
  apiKey: string,
  projectId: string,
  host: string,
): Promise<ProjectStats> {
  const query = `
    SELECT
      uniq(distinct_id) AS visitors,
      count() AS sessions
    FROM events
    WHERE
      event = '$pageview'
      AND properties.$host = '${host}'
      AND timestamp > now() - INTERVAL 30 DAY
  `

  const res = await fetch(`${POSTHOG_API}/api/projects/${projectId}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: { kind: 'HogQLQuery', query } }),
  })

  if (!res.ok) return null

  const data = await res.json()
  const row = data?.results?.[0]
  if (!row) return null

  return {
    visitors: Number(row[0]) ?? 0,
    sessions: Number(row[1]) ?? 0,
  }
}

export async function getAllStats(): Promise<StatsResponse> {
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY
  const projectId = process.env.POSTHOG_PROJECT_ID

  if (!apiKey || !projectId) {
    return Object.fromEntries(projects.map((p) => [p.name, null]))
  }

  const results = await Promise.allSettled(
    projects
      .filter((p) => p.posthogKey)
      .map(async (p) => {
        const stats = await queryProjectStats(apiKey, projectId, p.posthogKey!)
        return [p.name, stats] as const
      }),
  )

  const statsMap: StatsResponse = Object.fromEntries(
    projects.map((p) => [p.name, null]),
  )

  for (const result of results) {
    if (result.status === 'fulfilled') {
      const [name, stats] = result.value
      statsMap[name] = stats
    }
  }

  return statsMap
}
