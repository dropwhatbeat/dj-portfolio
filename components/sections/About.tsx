import FadeUp from '@/components/motion/FadeUp'

const facts = [
  { label: 'Current role', value: 'Product Owner, Singtel · AI & Insurance Products', accent: false },
  { label: 'Stack', value: 'Python · TypeScript · SQL · React · Databricks', accent: false },
  { label: 'Education', value: 'SUTD–SMU Dual Degree, Magna Cum Laude', accent: false },
  { label: 'Languages', value: 'English & Mandarin (native) · Japanese (basic)', accent: false },
  {
    label: 'Status',
    value: 'Open to PM roles at data-driven tech companies. Remote-friendly a plus.',
    accent: true,
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[0.5px] border-rule">
      <div className="max-w-[1040px] mx-auto px-10 max-[600px]:px-5">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-12">
            About
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: '48px 72px' }}>
          {/* Left: bio paragraphs */}
          <div>
            <FadeUp>
              <p
                className="text-[15px] leading-[1.78] text-ink2 mb-[22px]"
                style={{ textWrap: 'pretty' } as React.CSSProperties}
              >
                I&apos;m a Technical PM at Singtel, where I shipped a production GenAI chatbot with
                end-to-end chat-to-buy capability. Before that, I was founding PM at Pactly — a B2B
                SaaS contract platform — where I built AI-powered contract review from scratch. Before
                any of that, I was a ReactJS developer at OCBC Bank.
              </p>
            </FadeUp>
            <FadeUp delay={0.09}>
              <p
                className="text-[15px] leading-[1.78] text-ink2 mb-[22px]"
                style={{ textWrap: 'pretty' } as React.CSSProperties}
              >
                The engineering background stuck. I still write my own scripts, dig into data, and
                debug APIs. It means I understand what I&apos;m asking for — and occasionally just
                build it myself instead of asking.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p
                className="text-[15px] leading-[1.78] text-ink2"
                style={{ textWrap: 'pretty' } as React.CSSProperties}
              >
                I have a lot of ideas. Most of them die quietly in a notes app. The ones on this page
                are the ones that made it far enough to be used by actual humans — which, honestly, is
                harder than it sounds.
              </p>
            </FadeUp>
          </div>

          {/* Right: fact list */}
          <div>
            {facts.map(({ label, value, accent }, i) => (
              <FadeUp key={label} delay={i * 0.06}>
                <div
                  className={`flex flex-col gap-[3px] py-[14px] border-b border-[0.5px] border-rule ${i === 0 ? 'border-t border-[0.5px]' : ''}`}
                >
                  <span className="text-[11px] font-semibold tracking-[1.2px] uppercase text-ink5">
                    {label}
                  </span>
                  <span
                    className={`text-[14px] leading-[1.55] ${accent ? 'text-accent' : 'text-ink2'}`}
                  >
                    {value}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
