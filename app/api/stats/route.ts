import { getAllStats } from '@/lib/posthog'

export const runtime = 'edge'
export const revalidate = 3600

export async function GET() {
  try {
    const stats = await getAllStats()
    return Response.json(stats)
  } catch {
    const { projects } = await import('@/lib/projects')
    const nullStats = Object.fromEntries(projects.map((p) => [p.name, null]))
    return Response.json(nullStats)
  }
}
