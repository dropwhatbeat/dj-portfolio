type TagProps = {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block text-[12px] text-ink4 border border-rule rounded-md px-2 py-0.5">
      {label}
    </span>
  )
}
