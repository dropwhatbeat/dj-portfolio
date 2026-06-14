import FadeUp from '@/components/motion/FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[0.5px] border-rule">
      <div className="max-w-5xl mx-auto px-10 max-md:px-6">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[1.6px] uppercase text-ink5 mb-12">
            Contact
          </p>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2 className="text-5xl max-md:text-4xl font-semibold tracking-[-1.5px] text-ink mb-12 max-w-xl leading-[1.1]">
            Reach out if you&apos;re working on something interesting.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-8">
            <a
              href="mailto:dropwhatbeat@gmail.com"
              className="group inline-flex flex-col gap-1"
            >
              <span className="text-[11px] font-semibold tracking-[1.2px] uppercase text-ink5">
                Email
              </span>
              <span className="relative text-[17px] font-medium text-ink2 group-hover:text-ink transition-colors duration-200">
                dropwhatbeat@gmail.com
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>

            <a
              href="https://linkedin.com/in/deng-jing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col gap-1"
            >
              <span className="text-[11px] font-semibold tracking-[1.2px] uppercase text-ink5">
                LinkedIn
              </span>
              <span className="relative text-[17px] font-medium text-ink2 group-hover:text-ink transition-colors duration-200">
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
