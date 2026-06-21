import type { CSSProperties } from 'react'

// ─── EXPORTS ─────────────────────────────────────────────────────────────────

export default function ProjectScene({ name }: { name: string }) {
  if (name === 'Next Ketchup') return <NextKetchupScene />
  if (name === 'Bullshit Factory') return <BullshitFactoryScene />
  if (name === 'Vibe Meter') return <VibeMeterScene />
  return null
}

export function ProjectLogo({ name }: { name: string }) {
  if (name === 'Next Ketchup') return <NKLogo />
  if (name === 'Bullshit Factory') return <BSFLogo />
  if (name === 'Vibe Meter') return <VMLogo />
  return null
}

// ─── SHARED ──────────────────────────────────────────────────────────────────

const KF = `
  @keyframes sc-in { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
  @keyframes sc-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  @keyframes sc-float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes sc-growx { from{transform:scaleX(0)} to{transform:scaleX(1)} }
`

function inn(delay: number, dur = 0.38): CSSProperties {
  return { animation: `sc-in ${dur}s ease-out ${delay}s both` }
}

// ─── LEFT LOGOS ──────────────────────────────────────────────────────────────

function NKLogo() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:11, textAlign:'center' }}>
      <style>{KF}</style>
      <div style={{ animation:'sc-float 3.5s ease-in-out infinite' }}>
        <svg width="84" height="84" viewBox="0 0 108 108" fill="none">
          <ellipse cx="54" cy="101" rx="24" ry="4.5" fill="rgba(0,0,0,0.06)" />
          <path d="M54 26 Q57 18 62 15" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M54 26 C50 16 39 11 33 17 C37 24 47 24 54 26Z" fill="#5DBE60" />
          <path d="M54 26 C54 14 61 7 70 9 C68 18 61 22 54 26Z" fill="#43A047" />
          <path d="M54 26 C46 18 44 7 51 4 C55 12 55 19 54 26Z" fill="#66BB6A" />
          <circle cx="54" cy="62" r="33" fill="#E84A2D" />
          <ellipse cx="42" cy="50" rx="11" ry="7" fill="rgba(255,255,255,0.22)" transform="rotate(-20 42 50)" />
          <circle cx="46" cy="63" r="3.2" fill="#7A1A06" />
          <circle cx="62" cy="63" r="3.2" fill="#7A1A06" />
          <circle cx="47.4" cy="61.6" r="1.1" fill="white" />
          <circle cx="63.4" cy="61.6" r="1.1" fill="white" />
          <path d="M45 72 Q54 80 63 72" stroke="#7A1A06" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <ellipse cx="39" cy="70" rx="5.5" ry="3.5" fill="rgba(255,100,60,0.28)" />
          <ellipse cx="69" cy="70" rx="5.5" ry="3.5" fill="rgba(255,100,60,0.28)" />
        </svg>
      </div>
      <span className="font-display" style={{ fontSize:'1.1rem', color:'#1a1a1a', opacity:0.82, lineHeight:1.1 }}>Next Ketchup</span>
      <span style={{ fontSize:10, color:'#999', letterSpacing:'0.1px' }}>Don't be saucy — just ketchup.</span>
    </div>
  )
}

function BSFLogo() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, textAlign:'center' }}>
      <style>{KF}</style>
      <div style={{ animation:'sc-float 4s ease-in-out infinite' }}>
        <svg width="104" height="88" viewBox="0 0 140 118" fill="none">
          <ellipse cx="38" cy="23" rx="14" ry="12" fill="#EDE8E0" />
          <ellipse cx="29" cy="17" rx="10" ry="9" fill="#EDE8E0" />
          <ellipse cx="47" cy="15" rx="11" ry="10" fill="#EDE8E0" />
          <text x="36" y="24" fontSize="8.5" fontWeight="800" fill="#B03020" textAnchor="middle" fontFamily="Georgia, serif">BS</text>
          <ellipse cx="102" cy="23" rx="14" ry="12" fill="#EDE8E0" />
          <ellipse cx="93" cy="17" rx="10" ry="9" fill="#EDE8E0" />
          <ellipse cx="111" cy="15" rx="11" ry="10" fill="#EDE8E0" />
          <text x="100" y="24" fontSize="8.5" fontWeight="800" fill="#B03020" textAnchor="middle" fontFamily="Georgia, serif">BS</text>
          <rect x="30" y="33" width="16" height="26" rx="1" fill="#4A2008" />
          <rect x="94" y="33" width="16" height="26" rx="1" fill="#4A2008" />
          <rect x="12" y="57" width="116" height="8" rx="2" fill="#A8281A" />
          <rect x="15" y="62" width="110" height="48" rx="2" fill="#C0392B" />
          <rect x="35" y="69" width="70" height="15" rx="2" fill="#A8281A" />
          <text x="70" y="80" fontSize="7.5" fill="#F0EAE0" textAnchor="middle" fontFamily="monospace" fontWeight="700" letterSpacing="1">BS FACTORY</text>
          <rect x="58" y="86" width="24" height="24" rx="2" fill="#8B1F0F" />
          <circle cx="79" cy="100" r="1.8" fill="#D4896A" />
          <rect x="22" y="86" width="18" height="14" rx="1.5" fill="#C8DDE6" opacity="0.85" />
          <line x1="31" y1="86" x2="31" y2="100" stroke="#8FA8B5" strokeWidth="0.8" />
          <line x1="22" y1="93" x2="40" y2="93" stroke="#8FA8B5" strokeWidth="0.8" />
          <rect x="100" y="86" width="18" height="14" rx="1.5" fill="#C8DDE6" opacity="0.85" />
          <line x1="109" y1="86" x2="109" y2="100" stroke="#8FA8B5" strokeWidth="0.8" />
          <line x1="100" y1="93" x2="118" y2="93" stroke="#8FA8B5" strokeWidth="0.8" />
          <ellipse cx="70" cy="113" rx="42" ry="3.5" fill="rgba(0,0,0,0.06)" />
        </svg>
      </div>
      <span className="font-display" style={{ fontSize:'1rem', color:'#1a1a1a', opacity:0.82, lineHeight:1.1 }}>Bullshit Factory</span>
      <span style={{ fontSize:10, color:'#999', fontStyle:'italic' }}>where lies are manufactured</span>
    </div>
  )
}

function VMLogo() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:11, textAlign:'center' }}>
      <style>{KF}</style>
      <div style={{ animation:'sc-float 3.8s ease-in-out infinite' }}>
        <svg width="84" height="84" viewBox="0 0 108 108" fill="none">
          <ellipse cx="54" cy="102" rx="36" ry="4.5" fill="rgba(0,0,0,0.06)" />
          <circle cx="54" cy="54" r="44" fill="#C4A472" />
          <circle cx="54" cy="54" r="36" fill="#B8946A" opacity="0.25" />
          <g transform="rotate(-32 54 54)">
            <rect x="18" y="46" width="72" height="16" rx="3.5" fill="white" opacity="0.95" />
            <line x1="28" y1="46" x2="28" y2="52" stroke="#C4A472" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="38" y1="46" x2="38" y2="55" stroke="#C4A472" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="48" y1="46" x2="48" y2="52" stroke="#C4A472" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="58" y1="46" x2="58" y2="55" stroke="#C4A472" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="68" y1="46" x2="68" y2="52" stroke="#C4A472" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="78" y1="46" x2="78" y2="55" stroke="#C4A472" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g transform="translate(82 26)">
            <line x1="0" y1="-7" x2="0" y2="7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="-7" y1="0" x2="7" y2="0" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
            <line x1="4.5" y1="-4.5" x2="-4.5" y2="4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
          </g>
          <circle cx="28" cy="32" r="3" fill="white" opacity="0.4" />
        </svg>
      </div>
      <span className="font-display" style={{ fontSize:'1.1rem', color:'#1a1a1a', opacity:0.82, lineHeight:1.1 }}>Vibe-Meter</span>
      <span style={{ fontSize:9, color:'#999', letterSpacing:'1px', textTransform:'uppercase' }}>A Stirring Committee Game</span>
    </div>
  )
}

// ─── RIGHT SCENES ─────────────────────────────────────────────────────────────

const NK_PEOPLE = [
  { i: 'A', name: 'Alex',  color: '#E84A2D', avail: [true,  true,  false] },
  { i: 'J', name: 'Jamie', color: '#F59E0B', avail: [false, true,  true]  },
  { i: 'S', name: 'Sam',   color: '#22C55E', avail: [true,  true,  true]  },
]
const NK_DAYS = ['Fri', 'Sat', 'Sun']

function NextKetchupScene() {
  return (
    <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', padding:'0 14px' }}>
      <style>{KF}</style>
      <span style={{ position:'absolute', top:12, right:10, fontSize:20, animation:'sc-float 3.2s ease-in-out infinite', opacity:0.4, lineHeight:1 }}>🍅</span>
      <span style={{ position:'absolute', bottom:14, right:14, fontSize:13, animation:'sc-float2 4.1s 0.8s ease-in-out infinite', opacity:0.22, lineHeight:1 }}>🍅</span>

      <div style={{ background:'white', borderRadius:12, boxShadow:'0 4px 18px rgba(0,0,0,0.07)', width:'100%', padding:'13px 14px', ...inn(0) }}>
        <div style={{ fontSize:11, fontWeight:700, color:'#1a1a1a', marginBottom:10, display:'flex', alignItems:'center', gap:5 }}>
          <span>🗓</span> Who's free this weekend?
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 42px 42px 42px', gap:5, marginBottom:4 }}>
          <div />
          {NK_DAYS.map(d => (
            <div key={d} style={{ fontSize:9, fontWeight:600, color:'#aaa', textAlign:'center' }}>{d}</div>
          ))}
        </div>
        {NK_PEOPLE.map((p, ri) => (
          <div key={p.name} style={{ display:'grid', gridTemplateColumns:'1fr 42px 42px 42px', gap:5, marginBottom:5 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, ...inn(0.07 + ri * 0.07) }}>
              <div style={{ width:18, height:18, borderRadius:'50%', background:p.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:8, fontWeight:800, color:'white', flexShrink:0 }}>
                {p.i}
              </div>
              <span style={{ fontSize:11, color:'#333', fontWeight:500 }}>{p.name}</span>
            </div>
            {p.avail.map((av, ci) => (
              <div key={ci} style={{
                height:22, borderRadius:6,
                background: av ? '#dcfce7' : '#fee2e2',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:11, fontWeight:700,
                color: av ? '#16a34a' : '#dc2626',
                ...inn(0.18 + ri * 0.09 + ci * 0.04),
              }}>
                {av ? '✓' : '✗'}
              </div>
            ))}
          </div>
        ))}
        <div style={{ marginTop:7, padding:'7px 10px', background:'#FEF9EB', borderRadius:7, display:'flex', alignItems:'center', gap:6, ...inn(0.58) }}>
          <span style={{ fontSize:13 }}>🎉</span>
          <span style={{ fontSize:10, color:'#888' }}>Best pick:</span>
          <span style={{ fontSize:11, fontWeight:700, color:'#E84A2D' }}>Saturday — everyone's free!</span>
        </div>
      </div>
    </div>
  )
}

const BSF_ANSWERS = [
  { text: 'Sir Isaac Newton', votes: 5, pct: 100, truth: true  },
  { text: 'My goldfish',      votes: 3, pct: 60,  truth: false },
  { text: 'A magic apple',   votes: 2, pct: 40,  truth: false },
]

function BullshitFactoryScene() {
  return (
    <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'14px 18px' }}>
      <style>{KF}</style>
      <div style={{ fontSize:9, fontWeight:600, color:'#aaa', textTransform:'uppercase', letterSpacing:'0.9px', marginBottom:5, ...inn(0) }}>
        Question 2 of 5
      </div>
      <div style={{ fontSize:13, fontWeight:700, color:'#1a1a1a', marginBottom:14, lineHeight:1.35, ...inn(0.07) }}>
        "Who discovered gravity?"
      </div>
      {BSF_ANSWERS.map((a, i) => (
        <div key={i} style={{ marginBottom:10, ...inn(0.14 + i * 0.08) }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:4 }}>
            <span style={{ fontSize:12, fontWeight:600, color:'#1a1a1a' }}>{a.text}</span>
            <span style={{ fontSize:8, fontWeight:800, letterSpacing:'0.4px', color: a.truth ? '#16a34a' : '#C0392B', flexShrink:0, marginLeft:8 }}>
              {a.truth ? '✓ TRUTH' : '☠ BS'}
            </span>
          </div>
          <div style={{ height:5, background:'#f0f0f0', borderRadius:3, overflow:'hidden', marginBottom:3 }}>
            <div style={{
              height:'100%', width:`${a.pct}%`, borderRadius:3,
              background: a.truth ? '#22c55e' : '#C0392B',
              transformOrigin:'left', transform:'scaleX(0)',
              animation:`sc-growx 0.65s ease-out ${0.32 + i * 0.12}s forwards`,
            }} />
          </div>
          <span style={{ fontSize:9, color:'#ccc' }}>{a.votes} votes</span>
        </div>
      ))}
      <div style={{ display:'flex', alignItems:'center', gap:4, marginTop:2, ...inn(0.56) }}>
        <span style={{ fontSize:9, color:'#bbb' }}>Bluffing:</span>
        {['🐙','🦊','🐸','🦄','🐼'].map((e, i) => (
          <span key={i} style={{ fontSize:13 }}>{e}</span>
        ))}
      </div>
    </div>
  )
}

const VM_OPTIONS = [
  { label: 'A', text: 'Speed dating',     correct: false },
  { label: 'B', text: 'Through a friend', correct: true  },
  { label: 'C', text: 'At a concert',     correct: false },
]

const VM_SCORES = [
  { name: 'Sarah', score: '1,240', medal: '🥇' },
  { name: 'Mike',  score: '980',   medal: '🥈' },
  { name: 'Tom',   score: '650',   medal: '🥉' },
]

function VibeMeterScene() {
  return (
    <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', gap:12, padding:'12px 16px' }}>
      <style>{KF}</style>
      <div style={{ flex:'1 1 0', minWidth:0 }}>
        <div style={{ fontSize:9, fontWeight:600, color:'#9784C0', textTransform:'uppercase', letterSpacing:'0.9px', marginBottom:6, ...inn(0) }}>
          Couple trivia ♥
        </div>
        <div style={{ fontSize:12, fontWeight:700, color:'#1a1a1a', marginBottom:10, lineHeight:1.35, ...inn(0.06) }}>
          How did the couple first meet?
        </div>
        {VM_OPTIONS.map((o, i) => (
          <div key={i} style={{
            display:'flex', alignItems:'center', gap:7,
            padding:'6px 9px', borderRadius:8, marginBottom:5,
            background: o.correct ? '#C4A472' : 'rgba(255,255,255,0.65)',
            border: `1.5px solid ${o.correct ? '#B8946A' : 'rgba(196,164,114,0.22)'}`,
            ...inn(0.12 + i * 0.08),
          }}>
            <span style={{ fontSize:9, fontWeight:700, width:12, color: o.correct ? 'white' : '#B8946A', flexShrink:0 }}>{o.label}</span>
            <span style={{ fontSize:11, color: o.correct ? 'white' : '#444', fontWeight: o.correct ? 600 : 400 }}>{o.text}</span>
            {o.correct && <span style={{ marginLeft:'auto', fontSize:11 }}>✓</span>}
          </div>
        ))}
      </div>
      <div style={{ width:106, flexShrink:0, ...inn(0.1) }}>
        <div style={{ marginBottom:12 }}>
          <div style={{ fontSize:8, fontWeight:700, color:'#B8946A', textTransform:'uppercase', letterSpacing:'0.7px', marginBottom:5 }}>Room vibe</div>
          <div style={{ height:5, background:'rgba(196,164,114,0.2)', borderRadius:4, overflow:'hidden', marginBottom:3 }}>
            <div style={{
              height:'100%', borderRadius:4, background:'#C4A472',
              width:'82%', transformOrigin:'left', transform:'scaleX(0)',
              animation:'sc-growx 1.1s ease-out 0.45s forwards',
            }} />
          </div>
          <span style={{ fontSize:12, fontWeight:700, color:'#B8946A' }}>82%</span>
        </div>
        <div style={{ fontSize:8, fontWeight:700, color:'#B8946A', textTransform:'uppercase', letterSpacing:'0.7px', marginBottom:7 }}>Leaderboard</div>
        {VM_SCORES.map((s, i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:4, marginBottom:6, ...inn(0.42 + i * 0.09) }}>
            <span style={{ fontSize:12 }}>{s.medal}</span>
            <span style={{ fontSize:10, color:'#444', flex:1 }}>{s.name}</span>
            <span style={{ fontSize:10, fontWeight:700, color:'#B8946A', fontVariantNumeric:'tabular-nums' }}>{s.score}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
