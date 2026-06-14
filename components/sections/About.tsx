import FadeUp from '@/components/motion/FadeUp'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[0.5px] border-rule">
      <div className="max-w-[1040px] mx-auto px-10 max-[600px]:px-5">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-12">
            About
          </p>
        </FadeUp>

        <div className="max-w-[560px]">
          <FadeUp>
            <p
              className="text-[15px] leading-[1.78] text-ink2 mb-[22px]"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              I like building things. Started with physical stuff — soft robotics, mechanisms that
              actually moved. These days it&apos;s software. The medium changed; the impulse didn&apos;t.
            </p>
          </FadeUp>
          <FadeUp delay={0.09}>
            <p
              className="text-[15px] leading-[1.78] text-ink2"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              I also really like party games. Two of the projects on this page are party games I made
              because I wanted to play them. That&apos;s basically how I decide what to build — if
              I&apos;d use it or play it, it&apos;s probably worth making.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
