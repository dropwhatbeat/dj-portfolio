type BadgeProps = {
  status: 'live' | 'building'
}

export default function Badge({ status }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink4">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'live' ? 'bg-ink4' : 'bg-ink5'
        }`}
      />
      {status === 'live' ? 'Live' : 'Building'}
    </span>
  )
}
