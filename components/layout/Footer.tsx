export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[0.5px] border-rule mt-auto">
      <div className="max-w-5xl mx-auto px-10 max-md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px] text-ink5">
          © {year} Deng Jing. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:dropwhatbeat@gmail.com"
            className="text-[13px] text-ink4 hover:text-ink2 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/deng-jing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-ink4 hover:text-ink2 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
