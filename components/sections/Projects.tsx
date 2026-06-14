import FadeUp from '@/components/motion/FadeUp'
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/projects'
import type { StatsResponse } from '@/lib/types'

type ProjectsProps = {
  stats: StatsResponse
}

export default function Projects({ stats }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 border-t border-[0.5px] border-rule">
      <div className="max-w-5xl mx-auto px-10 max-md:px-6">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-12">
            Projects
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <ProjectCard
                project={project}
                stats={stats[project.name]}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
