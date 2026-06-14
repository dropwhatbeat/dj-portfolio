import FadeUp from '@/components/motion/FadeUp'
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger'

const facts = [
  { label: 'Current role', value: 'Product Owner, Singtel · AI & Insurance Products' },
  { label: 'Stack', value: 'Python · TypeScript · SQL · React · Databricks' },
  { label: 'Education', value: 'SUTD–SMU Dual Degree, Magna Cum Laude' },
  { label: 'Languages', value: 'English & Mandarin (native) · Japanese (basic)' },
  { label: 'Status', value: 'Open to PM roles at data-driven tech companies. Remote-friendly a plus.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[0.5px] border-rule">
      <div className="max-w-5xl mx-auto px-10 max-md:px-6">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-12">
            About
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-5">
            <FadeUp>
              <p className="text-[15px] leading-relaxed text-ink2">
                Technical PM at Singtel, where I shipped a production GenAI chatbot with
                end-to-end chat-to-buy capability. Before that, founding PM at Pactly — a B2B
                SaaS contract platform — where I integrated OpenAI to build AI-powered contract
                review from scratch.
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="text-[15px] leading-relaxed text-ink2">
                My background is unusual for a PM: I started as a ReactJS developer at OCBC Bank,
                shipping Singapore&apos;s first digital bank account opening for foreigners. That
                engineering foundation means I can debug an API, write my own dashboards, and ship
                side projects without waiting for a team.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[15px] leading-relaxed text-ink2">
                I build things because the gap between &ldquo;this should exist&rdquo; and
                &ldquo;I can make this&rdquo; is smaller than most people think.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.08} className="space-y-0">
            {facts.map(({ label, value }) => (
              <StaggerItem key={label}>
                <div className="flex flex-col gap-0.5 py-4 border-b border-[0.5px] border-rule first:border-t">
                  <span className="text-[11px] font-semibold tracking-[1.2px] uppercase text-ink5">
                    {label}
                  </span>
                  <span className="text-[15px] text-ink2">{value}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
