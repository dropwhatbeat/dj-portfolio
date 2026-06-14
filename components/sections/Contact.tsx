import FadeUp from '@/components/motion/FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[0.5px] border-rule">
      <div className="max-w-[1040px] mx-auto px-10 max-[600px]:px-5">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-12">
            Contact
          </p>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            className="font-display font-normal text-ink mb-12 max-w-[520px]"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.1rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textWrap: 'pretty',
            } as React.CSSProperties}
          >
            Reach out if you want to work on something together!
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex gap-12 flex-wrap max-[600px]:flex-col max-[600px]:gap-6">
            <a href="mailto:dropwhatbeat@gmail.com" className="group flex flex-col gap-[5px]">
              <span className="text-[11px] font-semibold tracking-[1.2px] uppercase text-ink5">
                Email
              </span>
              <span className="relative text-[17px] font-medium text-ink2 group-hover:text-ink transition-colors duration-200 pb-[2px]">
                dropwhatbeat@gmail.com
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>

            <a
              href="https://linkedin.com/in/deng-jing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-[5px]"
            >
              <span className="text-[11px] font-semibold tracking-[1.2px] uppercase text-ink5">
                LinkedIn
              </span>
              <span className="relative text-[17px] font-medium text-ink2 group-hover:text-ink transition-colors duration-200 pb-[2px]">
                linkedin.com/in/deng-jing
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
