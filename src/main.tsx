import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Church,
  Clock3,
  Cross,
  Feather,
  Flame,
  Heart,
  Lightbulb,
  Menu,
  Moon,
  PanelTop,
  Search,
  ScrollText,
  Sparkles,
  Sprout,
  Sun,
  SunMedium,
  Wheat,
  X,
} from 'lucide-react'
import { lessonPlans, type Audience, type LessonPlan } from '../frontend/data/lessonPlans'
import { parables, type Parable, type ParableAudience } from '../frontend/data/parables'
import { sacramentCategories, sacraments, type Sacrament, type SacramentCategory } from '../frontend/data/sacraments'
import { saintCategories, saints, type Saint, type SaintCategory } from '../frontend/data/saints'
import './index.css'

const parableImageUrls = import.meta.glob('../frontend/images/parables/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const saintImageUrls = import.meta.glob('../frontend/images/saints/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const sacramentImageUrls = import.meta.glob('../frontend/images/sacraments/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const lessonDownloadUrls = import.meta.glob('../frontend/downloads/lessons/*/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

type View = 'home' | 'lessons' | 'parables' | 'saints' | 'sacraments' | 'about'

const audienceFilters: Array<'All' | Audience> = ['All', 'Grade 3', 'Grade 7', 'Adults']
const saintCategoryFilters: Array<'All' | SaintCategory> = ['All', ...saintCategories]
const sacramentCategoryFilters: Array<'All' | SacramentCategory> = ['All', ...sacramentCategories]

const audienceDownloadFolders: Record<Audience, 'grade3' | 'grade7' | 'adult'> = {
  'Grade 3': 'grade3',
  'Grade 7': 'grade7',
  Adults: 'adult',
}

type LessonDownloadMap = Record<string, Record<string, Partial<Record<'pdf' | 'pptx', string>>>>

const lessonDownloadMap = Object.entries(lessonDownloadUrls).reduce<LessonDownloadMap>((accumulator, [filePath, url]) => {
  const match = filePath.match(/\/lessons\/([^/]+)\/([^/]+)\.(pdf|pptx)$/i)
  if (!match) return accumulator

  const [, folder, lessonId, extension] = match
  const type = extension.toLowerCase() as 'pdf' | 'pptx'

  const folderMap = accumulator[folder] ?? {}
  const lessonFiles = folderMap[lessonId] ?? {}
  lessonFiles[type] = url
  folderMap[lessonId] = lessonFiles
  accumulator[folder] = folderMap

  return accumulator
}, {})

function App() {
  const [view, setView] = useState<View>('home')
  const [selectedLesson, setSelectedLesson] = useState<LessonPlan | null>(null)
  const [selectedParable, setSelectedParable] = useState<Parable | null>(null)
  const [selectedSaint, setSelectedSaint] = useState<Saint | null>(null)
  const [selectedSacrament, setSelectedSacrament] = useState<Sacrament | null>(null)
  const [filter, setFilter] = useState<'All' | Audience>('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem('cc-theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('cc-theme', dark ? 'dark' : 'light')
  }, [dark])

  const openLessons = (nextFilter: 'All' | Audience = 'All') => {
    setFilter(nextFilter)
    setSelectedLesson(null)
    setSelectedParable(null)
    setSelectedSaint(null)
    setSelectedSacrament(null)
    setView('lessons')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openParables = () => {
    setSelectedParable(null)
    setSelectedLesson(null)
    setSelectedSaint(null)
    setSelectedSacrament(null)
    setView('parables')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openSaints = () => {
    setSelectedSaint(null)
    setSelectedParable(null)
    setSelectedLesson(null)
    setSelectedSacrament(null)
    setView('saints')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openSacraments = () => {
    setSelectedSacrament(null)
    setSelectedSaint(null)
    setSelectedParable(null)
    setSelectedLesson(null)
    setView('sacraments')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openAbout = () => {
    setSelectedSaint(null)
    setSelectedParable(null)
    setSelectedLesson(null)
    setSelectedSacrament(null)
    setView('about')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openLesson = (lesson: LessonPlan) => {
    setSelectedLesson(lesson)
    setView('lessons')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8f2] text-[#24332d] transition-colors duration-500 dark:bg-[#18231f] dark:text-[#edf2e9]">
      <header className="relative z-30 border-b border-[#dfe5da] bg-[#f7f8f2]/90 backdrop-blur-md dark:border-[#34453d] dark:bg-[#18231f]/90">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <button onClick={() => { setView('home'); setSelectedLesson(null); setSelectedParable(null); setSelectedSaint(null); setSelectedSacrament(null); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="group flex items-center gap-3" aria-label="Go to homepage">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7ead2] text-[#346148] transition-transform group-hover:rotate-[-8deg] dark:bg-[#2d5140] dark:text-[#d7ead2]"><Sprout size={19} strokeWidth={1.8} /></span>
            <span className="font-serif text-[20px] tracking-[-0.03em] text-[#24332d] dark:text-[#edf2e9]">Catechist<span className="text-[#6a9172]">Corner</span></span>
          </button>
          <nav className="hidden items-center gap-8 text-[13px] font-semibold text-[#6b786d] md:flex dark:text-[#b6c5b8]">
            <button onClick={() => openLessons()} className="transition-colors hover:text-[#346148] dark:hover:text-[#d7ead2]">Lesson plans</button>
            <button onClick={openParables} className="transition-colors hover:text-[#346148] dark:hover:text-[#d7ead2]">Parables</button>
            <button onClick={openSaints} className="transition-colors hover:text-[#346148] dark:hover:text-[#d7ead2]">Saints</button>
            <button onClick={openSacraments} className="transition-colors hover:text-[#346148] dark:hover:text-[#d7ead2]">Sacraments</button>
            <button onClick={openAbout} className="transition-colors hover:text-[#346148] dark:hover:text-[#d7ead2]">About</button>
          </nav>
          <button onClick={() => setMenuOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d5ddd2] text-[#456050] transition-all hover:border-[#6a9172] hover:bg-[#eaf1e5] dark:border-[#40544a] dark:text-[#d7ead2] dark:hover:bg-[#263a31]" aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </header>

      {menuOpen && <>
        <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-40 bg-[#17251d]/30 backdrop-blur-sm" />
        <aside className="fixed right-0 top-0 z-50 flex h-full w-[min(360px,90vw)] flex-col bg-[#f7f8f2] p-7 shadow-2xl dark:bg-[#1d2c25]">
          <div className="flex items-center justify-between"><span className="font-serif text-2xl">Menu</span><button onClick={() => setMenuOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5ddd2] dark:border-[#40544a]" aria-label="Close menu"><X size={18} /></button></div>
          <div className="mt-12 space-y-2 text-lg">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#819087]">Explore</p>
            <button onClick={() => openLessons()} className="flex w-full items-center justify-between border-b border-[#dfe5da] py-4 text-left dark:border-[#34453d]">Lesson plans <ArrowRight size={18} /></button>
            <button onClick={openParables} className="flex w-full items-center justify-between border-b border-[#dfe5da] py-4 text-left dark:border-[#34453d]">Parables <ArrowRight size={18} /></button>
            <button onClick={openSaints} className="flex w-full items-center justify-between border-b border-[#dfe5da] py-4 text-left dark:border-[#34453d]">Saints <ArrowRight size={18} /></button>
            <button onClick={openSacraments} className="flex w-full items-center justify-between border-b border-[#dfe5da] py-4 text-left dark:border-[#34453d]">Sacraments <ArrowRight size={18} /></button>
            <button onClick={openAbout} className="flex w-full items-center justify-between border-b border-[#dfe5da] py-4 text-left dark:border-[#34453d]">About CatechistCorner <ArrowRight size={18} /></button>
          </div>
          <div className="mt-auto border-t border-[#dfe5da] pt-6 dark:border-[#34453d]"><button onClick={() => setDark(!dark)} className="flex w-full items-center justify-between text-sm font-semibold"><span className="flex items-center gap-3">{dark ? <Moon size={18} /> : <Sun size={18} />} {dark ? 'Dark theme' : 'Light theme'}</span><span className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${dark ? 'bg-[#6a9172]' : 'bg-[#cad5c5]'}`}><span className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${dark ? 'translate-x-5' : ''}`} /></span></button></div>
        </aside>
      </>}

      {view === 'home' ? <Home openLessons={openLessons} openParables={openParables} openSaints={openSaints} openSacraments={openSacraments} /> : view === 'lessons' ? <Lessons filter={filter} setFilter={setFilter} selectedLesson={selectedLesson} openLesson={openLesson} onBack={() => setSelectedLesson(null)} /> : view === 'parables' ? <Parables selectedParable={selectedParable} openParable={setSelectedParable} onBack={() => setSelectedParable(null)} /> : view === 'saints' ? <Saints selectedSaint={selectedSaint} openSaint={setSelectedSaint} onBack={() => setSelectedSaint(null)} /> : view === 'sacraments' ? <Sacraments selectedSacrament={selectedSacrament} openSacrament={setSelectedSacrament} onBack={() => setSelectedSacrament(null)} /> : <About />}
      <footer className="border-t border-[#dfe5da] px-5 py-8 dark:border-[#34453d]"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 text-[12px] text-[#819087] sm:flex-row"><span>© 2026 CatechistCorner</span><span>Made for the people who make room for faith.</span></div></footer>
    </div>
  )
}

function Home({ openLessons, openParables, openSaints, openSacraments }: { openLessons: (filter?: 'All' | Audience) => void; openParables: () => void; openSaints: () => void; openSacraments: () => void }) {
  return <main>
    <section className="relative overflow-hidden border-b border-[#dfe5da] dark:border-[#34453d]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-20 pt-20 sm:px-8 md:pb-28 md:pt-28 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
        <div className="animate-rise">
          <p className="mb-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6a9172]">Faith formation, made ready</p>
          <h1 className="max-w-[650px] font-serif text-[clamp(3.6rem,7vw,6.4rem)] leading-[.94] tracking-[-0.055em] text-[#24332d] dark:text-[#edf2e9]">Make space for<br /><em className="font-serif text-[#6a9172]">wonder.</em></h1>
          <p className="mt-8 max-w-[470px] text-[17px] leading-8 text-[#66756b] dark:text-[#b6c5b8]">Thoughtful lesson plans and gentle resources for the people who help faith take root.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button onClick={() => openLessons()} className="flex items-center gap-3 rounded-full bg-[#315d43] px-6 py-3.5 text-sm font-bold text-white shadow-[0_9px_24px_rgba(49,93,67,.18)] transition-all hover:-translate-y-0.5 hover:bg-[#264d36]">Explore lesson plans <ArrowRight size={17} /></button>
            <span className="text-xs font-semibold text-[#809087]">For every season of teaching</span>
          </div>
        </div>

        <div className="animate-rise delay-2 flex flex-col items-center justify-center gap-3 lg:items-end">
          <Sprout className="h-32 w-32 text-[#7ea17f]/45 dark:text-[#b9d1b4]/35" strokeWidth={1.5} />
          <p className="font-serif text-lg italic tracking-[-0.04em] text-[#6a9172]/75 dark:text-[#d1dec9]/60">The seed is already growing.</p>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28 lg:px-10"><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6a9172]">Start here</p><h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">A place to begin.</h2><p className="mt-4 max-w-[500px] text-[15px] leading-7 text-[#718078] dark:text-[#b6c5b8]">A growing library for teaching the faith with clarity, warmth, and wonder.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"><ResourceCard icon={BookOpen} eyebrow="For every season of teaching" title="Lesson plans" description="Ready-to-use formation plans built around Doctrine, Moral, and Worship." onClick={() => openLessons()} /><ResourceCard icon={Wheat} eyebrow="Stories that open the heart" title="Parables" description="Explore the stories Jesus told, with meaning, themes, and ways to share them." onClick={openParables} /><ResourceCard icon={SunMedium} eyebrow="Lives of holiness" title="Saints" description="Discover saints through their virtues, feast days, and stories that can inspire teaching and prayer." onClick={openSaints} /><ResourceCard icon={Cross} eyebrow="The Church’s living signs" title="Sacraments" description="Explore the seven sacraments, from Baptism to Matrimony, with their rites, signs, and catechetical depth." onClick={openSacraments} /></div></section>
    <section className="bg-[#eaf1e5] dark:bg-[#21372d]"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-20 lg:px-10"><div><span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f8f2] text-[#315d43] dark:bg-[#2d5140] dark:text-[#d7ead2]"><Heart size={19} /></span><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em]">Good teaching starts<br />with a present heart.</h2></div><p className="max-w-[530px] text-[17px] leading-8 text-[#5e7063] dark:text-[#b6c5b8]">CatechistCorner is a growing collection of simple, beautiful resources for sharing the life of faith. Come as you are. Bring your questions.</p></div></section>
  </main>
}

function ResourceCard({ icon: Icon, eyebrow, title, description, onClick }: { icon: typeof BookOpen; eyebrow: string; title: string; description: string; onClick: () => void }) {
  return <button onClick={onClick} className="group flex min-h-[240px] flex-col justify-between rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#9fbea0] hover:shadow-[0_18px_35px_rgba(53,84,60,.1)] dark:border-[#34453d] dark:bg-[#1d2c25] dark:hover:border-[#6a9172]"><div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf1e5] text-[#315d43] dark:bg-[#2d5140] dark:text-[#d7ead2]"><Icon size={21} /></span><ArrowRight size={19} className="text-[#9aaca0] transition-transform group-hover:translate-x-1 group-hover:text-[#315d43]" /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6a9172]">{eyebrow}</p><h3 className="mt-2 font-serif text-3xl tracking-[-0.04em]">{title}</h3><p className="mt-3 max-w-[420px] text-sm leading-6 text-[#718078] dark:text-[#b6c5b8]">{description}</p></div></button>
}

const parableAudienceFilters: Array<{ label: string; value: 'all' | ParableAudience }> = [
  { label: 'All', value: 'all' }, { label: 'Grade 3', value: 'grade3' }, { label: 'Grade 7', value: 'grade7' }, { label: 'Adults', value: 'adult' },
]

function SearchBar({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
  return <label className="mt-8 flex w-full max-w-[420px] items-center gap-3 rounded-full border border-[#dfe5da] bg-[#fbfcf7] px-4 py-3 text-[#687d73] shadow-sm transition-colors focus-within:border-[#6a9172] dark:border-[#34453d] dark:bg-[#1d2c25] dark:text-[#c7d4c8]">
    <Search size={16} className="text-[#6a9172]" />
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full border-0 bg-transparent text-sm text-[#24332d] placeholder:text-[#8b9c90] focus:outline-none dark:text-[#edf2e9] dark:placeholder:text-[#94a698]"
      aria-label={placeholder}
    />
  </label>
}

function Saints({ selectedSaint, openSaint, onBack }: { selectedSaint: Saint | null; openSaint: (saint: Saint) => void; onBack: () => void }) {
  const [filter, setFilter] = useState<'All' | SaintCategory>('All')
  const [search, setSearch] = useState('')

  if (selectedSaint) return <SaintDetail saint={selectedSaint} onBack={onBack} />

  const normalizedSearch = search.trim().toLowerCase()
  const matchesSaint = (saint: Saint) => {
    if (!normalizedSearch) return true

    const haystack = [
      saint.name,
      saint.category,
      saint.tagline,
      saint.feastDay,
      saint.patronage.join(' '),
      saint.biography,
      saint.virtue,
      saint.quote ?? '',
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalizedSearch)
  }

  const filteredSaints = saints.filter((saint) => (filter === 'All' ? matchesSaint(saint) : saint.category === filter && matchesSaint(saint)))

  const filteredGroups = (filter === 'All'
    ? saintCategories.map((category) => ({ category, saints: filteredSaints.filter((saint) => saint.category === category) }))
    : [{ category: filter, saints: filteredSaints }])
    .filter((group) => group.saints.length > 0)

  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-16 sm:px-8 md:py-24 lg:px-10"><div className="animate-rise max-w-[680px]"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6a9172]">The witness library</p><h1 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">Saints for<br /><em className="text-[#6a9172]">holy inspiration.</em></h1><p className="mt-6 text-[16px] leading-7 text-[#66756b] dark:text-[#b6c5b8]">Meet saints from across the Church—apostles, doctors, martyrs, founders, and more—whose lives invite us to live with courage, grace, and love.</p></div><div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#dfe5da] pb-5 dark:border-[#34453d]"><SearchBar value={search} onChange={setSearch} placeholder="Search saints" /></div><div className="mt-8 flex flex-wrap items-center gap-2">{saintCategoryFilters.map((option) => <button key={option} onClick={() => setFilter(option)} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${filter === option ? 'bg-[#315d43] text-white' : 'text-[#718078] hover:bg-[#eaf1e5] dark:text-[#b6c5b8] dark:hover:bg-[#2d5140]'}`}>{option}</button>)}</div>{filteredSaints.length === 0 ? <div className="mt-10 rounded-3xl border border-dashed border-[#dfe5da] bg-[#fbfcf7] p-10 text-center text-[#64766d] dark:border-[#40544a] dark:bg-[#1d2c25] dark:text-[#c7d4c8]">No saints match your search.</div> : filter === 'All' ? <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredSaints.map((saint, index) => <SaintCard key={saint.id} saint={saint} index={index} onClick={() => openSaint(saint)} />)}</div> : <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredSaints.map((saint, index) => <SaintCard key={saint.id} saint={saint} index={index} onClick={() => openSaint(saint)} />)}</div> }</main>
}

function SaintCard({ saint, index, onClick }: { saint: Saint; index: number; onClick: () => void }) {
  return <button onClick={onClick} className={`animate-rise delay-${index + 1} group flex min-h-[220px] flex-col justify-between rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#9fbea0] hover:shadow-[0_18px_35px_rgba(53,84,60,.1)] dark:border-[#34453d] dark:bg-[#1d2c25] dark:hover:border-[#6a9172]`}>
    <div>
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#eaf1e5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#52725b] dark:bg-[#2d5140] dark:text-[#d7ead2]">{saint.category}</span>
        <ArrowRight size={18} className="text-[#9aaca0] transition-transform group-hover:translate-x-1 group-hover:text-[#315d43]" />
      </div>
      <h3 className="font-serif text-[29px] leading-[1.05] tracking-[-0.035em]">{saint.name}</h3>
      <p className="mt-2 text-sm font-medium text-[#6a9172] dark:text-[#d7ead2]">{saint.tagline}</p>
      <p className="mt-3 text-sm leading-6 text-[#718078] dark:text-[#b6c5b8]">{saint.feastDay}</p>
    </div>
    <div className="mt-5 flex items-center gap-2 border-t border-[#e5ebe1] pt-4 text-[11px] font-semibold text-[#809087] dark:border-[#34453d]">
      <Sparkles size={14} /> {saint.virtue}
    </div>
  </button>
}

function SaintDetail({ saint, onBack }: { saint: Saint; onBack: () => void }) {
  const imageFile = saint.image ?? `${saint.id}.png`
  const imageUrl = saintImageUrls[`../frontend/images/saints/${imageFile}`] ?? saintImageUrls['../frontend/images/saints/saint_default_image.png']

  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-12 sm:px-8 md:py-20 lg:px-10">
    <button onClick={onBack} className="mb-14 flex items-center gap-2 text-sm font-bold text-[#6a9172] transition-colors hover:text-[#315d43]">
      <ArrowLeft size={17} /> All saints
    </button>
    <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
      <div className="animate-rise lg:sticky lg:top-10 lg:self-start">
        {imageUrl && <img src={imageUrl} alt={saint.name} className="mb-8 block w-full rounded-2xl border border-[#dfe5da] bg-[#eef3ea] object-cover dark:border-[#34453d] dark:bg-[#263a31]" />}
        <span className="rounded-full bg-[#eaf1e5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#52725b] dark:bg-[#2d5140] dark:text-[#d7ead2]">{saint.category}</span>
        <h1 className="mt-6 font-serif text-5xl leading-[.98] tracking-[-0.05em] sm:text-6xl">{saint.name}</h1>
        <div className="mt-7 space-y-3 text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">
          <div className="flex items-center gap-2"><BookOpen size={15} className="text-[#6a9172]" /><span><strong>Feast Day:</strong> {saint.feastDay}</span></div>
          <div><strong>Patronage:</strong> {saint.patronage.join(', ')}</div>
          <div><strong>Tagline:</strong> {saint.tagline}</div>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">{saint.patronage.map((patron) => <span key={patron} className="rounded-full border border-[#dfe5da] px-3 py-1.5 text-[11px] font-semibold text-[#718078] dark:border-[#40544a] dark:text-[#b6c5b8]">{patron}</span>)}</div>
      </div>
      <div className="animate-rise delay-1 space-y-5">
        <section className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">
            Overview
          </p>

          <div className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">
            {Array.isArray(saint.biography)
              ? saint.biography.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))
              : saint.biography.split(/\n{2,}/).map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Key virtue or theme</p>
          <p className="mt-4 font-serif text-2xl leading-[1.3] tracking-[-0.025em] text-[#24332d] dark:text-[#edf2e9]">{saint.virtue}</p>
        </section>
        {saint.quote && <section className="rounded-3xl border border-[#dfe5da] bg-[#f4f6ee] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#263a31]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a25e4b]">Quote</p>
          <p className="mt-3 font-serif text-lg leading-7 text-[#596a60] dark:text-[#d4e0d4]">{saint.quote}</p>
        </section>}
      </div>
    </div>
  </main>
}

function Sacraments({ selectedSacrament, openSacrament, onBack }: { selectedSacrament: Sacrament | null; openSacrament: (sacrament: Sacrament) => void; onBack: () => void }) {
  const [filter, setFilter] = useState<'All' | SacramentCategory>('All')
  const [search, setSearch] = useState('')

  if (selectedSacrament) return <SacramentDetail sacrament={selectedSacrament} onBack={onBack} />

  const normalizedSearch = search.trim().toLowerCase()
  const filteredSacraments = sacraments.filter((sacrament) => {
    const matchesFilter = filter === 'All' || sacrament.category === filter
    if (!matchesFilter) return false
    if (!normalizedSearch) return true

    const haystack = [
      sacrament.name,
      sacrament.summary,
      sacrament.whatItIs,
      sacrament.form,
      sacrament.matter,
      sacrament.rite.join(' '),
      sacrament.sacramentals.join(' '),
      sacrament.notes.join(' '),
    ].join(' ').toLowerCase()

    return haystack.includes(normalizedSearch)
  })

  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-16 sm:px-8 md:py-24 lg:px-10">
    <div className="animate-rise max-w-[680px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6a9172]">The sacramental life</p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">The seven sacraments<br /><em className="text-[#6a9172]">for living faith.</em></h1>
      <p className="mt-6 text-[16px] leading-7 text-[#66756b] dark:text-[#b6c5b8]">Visible signs of God’s grace, given to the Church to strengthen, heal, and nourish the Christian life.</p>
    </div>
    <div className="mt-10">
      <SearchBar value={search} onChange={setSearch} placeholder="Search sacraments" />
    </div>
    <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#dfe5da] pb-5 dark:border-[#34453d]">
      {sacramentCategoryFilters.map((option) => (
        <button key={option} onClick={() => setFilter(option)} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${filter === option ? 'bg-[#315d43] text-white' : 'text-[#718078] hover:bg-[#eaf1e5] dark:text-[#b6c5b8] dark:hover:bg-[#2d5140]'}`}>
          {option}
        </button>
      ))}
    </div>
    <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filteredSacraments.map((sacrament, index) => (
        <SacramentCard key={sacrament.id} sacrament={sacrament} index={index} onClick={() => openSacrament(sacrament)} />
      ))}
    </div>
  </main>
}

function SacramentCard({ sacrament, index, onClick }: { sacrament: Sacrament; index: number; onClick: () => void }) {
  return <button onClick={onClick} className={`animate-rise delay-${index + 1} group flex min-h-[280px] flex-col justify-between rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#9fbea0] hover:shadow-[0_18px_35px_rgba(53,84,60,.1)] dark:border-[#34453d] dark:bg-[#1d2c25] dark:hover:border-[#6a9172]`}>
    <div>
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#eaf1e5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#52725b] dark:bg-[#2d5140] dark:text-[#d7ead2]">{sacrament.category}</span>
        <ArrowRight size={18} className="text-[#9aaca0] transition-transform group-hover:translate-x-1 group-hover:text-[#315d43]" />
      </div>
      <h3 className="mt-10 font-serif text-[29px] leading-[1.05] tracking-[-0.035em]">{sacrament.name}</h3>
      <p className="mt-3 text-sm leading-6 text-[#718078] dark:text-[#b6c5b8]">{sacrament.summary}</p>
    </div>
    <div className="flex items-center gap-2 border-t border-[#e5ebe1] pt-4 text-[11px] font-semibold text-[#809087] dark:border-[#34453d]">
      <BookOpen size={14} /> {sacrament.form.slice(0, 40)}...
    </div>
  </button>
}

function SacramentDetail({ sacrament, onBack }: { sacrament: Sacrament; onBack: () => void }) {
  const imageFile = sacrament.image ?? 'sacrament_default_image.svg'
  const imageUrl = sacramentImageUrls[`../frontend/images/sacraments/${imageFile}`] ?? sacramentImageUrls['../frontend/images/sacraments/sacrament_default_image.svg']

  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-12 sm:px-8 md:py-20 lg:px-10">
    <button onClick={onBack} className="mb-14 flex items-center gap-2 text-sm font-bold text-[#6a9172] transition-colors hover:text-[#315d43]">
      <ArrowLeft size={17} /> All sacraments
    </button>
    <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
      <div className="animate-rise lg:sticky lg:top-10 lg:self-start">
        {imageUrl && <img src={imageUrl} alt={sacrament.name} className="mb-8 block w-full rounded-2xl border border-[#dfe5da] bg-[#eef3ea] object-cover dark:border-[#34453d] dark:bg-[#263a31]" />}
        <span className="rounded-full bg-[#eaf1e5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#52725b] dark:bg-[#2d5140] dark:text-[#d7ead2]">{sacrament.category}</span>
        <h1 className="mt-6 font-serif text-5xl leading-[.98] tracking-[-0.05em] sm:text-6xl">{sacrament.name}</h1>
        <p className="mt-7 max-w-[420px] text-[16px] leading-7 text-[#66756b] dark:text-[#b6c5b8]">{sacrament.summary}</p>
        <div className="mt-8 space-y-3 text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">
          <div><strong>Form:</strong> {sacrament.form}</div>
          <div><strong>Matter:</strong> {sacrament.matter}</div>
        </div>
      </div>
      <div className="animate-rise delay-1 space-y-5">
        <section className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">What it is</p>
          <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">{sacrament.whatItIs}</p>
        </section>

        <section className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">The rite</p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">
            {sacrament.rite.map((step, index) => <li key={index}>{step}</li>)}
          </ol>
        </section>

        <section className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Sacramentals</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {sacrament.sacramentals.map((item) => (
              <span key={item} className="rounded-full border border-[#dfe5da] px-3 py-1.5 text-[11px] font-semibold text-[#718078] dark:border-[#40544a] dark:text-[#b6c5b8]">{item}</span>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfe5da] bg-[#f4f6ee] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#263a31]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a25e4b]">Notes for catechesis</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-[#596a60] dark:text-[#d4e0d4]">
            {sacrament.notes.map((note, index) => <li key={index}>{note}</li>)}
          </ul>
        </section>
      </div>
    </div>
  </main>
}

function About() {
  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-16 sm:px-8 md:py-24 lg:px-10">
    <div className="animate-rise max-w-[760px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6a9172]">About</p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">CatechistCorner is a gentle place to help faith grow.</h1>
      <p className="mt-6 text-[17px] leading-8 text-[#66756b] dark:text-[#b6c5b8]">This project is designed for catechists, teachers, parish leaders, and anyone who wants to share the faith with clarity, warmth, and wonder. The goal is simple: make useful resources easier to find, easier to pray with, and easier to teach from.</p>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-3">
      <div className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 dark:border-[#34453d] dark:bg-[#1d2c25]">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Purpose</p>
        <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Form the heart</h2>
        <p className="mt-3 text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">We want catechesis to be shaped by love, story, and truth—not just information alone.</p>
      </div>
      <div className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 dark:border-[#34453d] dark:bg-[#1d2c25]">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Resources</p>
        <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Build confidence</h2>
        <p className="mt-3 text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">From lesson plans to parables and saints, each resource is meant to be practical and immediately usable in teaching.</p>
      </div>
      <div className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 dark:border-[#34453d] dark:bg-[#1d2c25]">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Approach</p>
        <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">Lead with wonder</h2>
        <p className="mt-3 text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">The best teaching invites encounter: scripture, story, reflection, and a prayerful openness to the Spirit.</p>
      </div>
    </div>

    <section className="mt-14 rounded-[32px] border border-[#dfe5da] bg-[#eaf1e5] p-8 dark:border-[#34453d] dark:bg-[#21372d] sm:p-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Why it exists</p>
      <p className="mt-4 max-w-[700px] text-[17px] leading-8 text-[#4b5f54] dark:text-[#d7ead2]">CatechistCorner exists to support the people who make room for faith in homes, classrooms, and parish communities. We hope these tools help you teach with gentleness, clarity, and conviction—while always keeping Christ at the center.</p>
    </section>
  </main>
}

function Parables({ selectedParable, openParable, onBack }: { selectedParable: Parable | null; openParable: (parable: Parable) => void; onBack: () => void }) {
  const [filter, setFilter] = useState<'all' | ParableAudience>('all')
  const [search, setSearch] = useState('')
  if (selectedParable) return <ParableDetail parable={selectedParable} onBack={onBack} />

  const normalizedSearch = search.trim().toLowerCase()
  const filteredParables = parables.filter((parable) => {
    const matchesFilter = filter === 'all' || parable.audience.includes(filter)
    if (!matchesFilter) return false
    if (!normalizedSearch) return true

    const haystack = [
      parable.title,
      parable.scripture,
      parable.summary,
      parable.themes.join(' '),
      parable.meaning,
      parable.teachingNotes,
      parable.audience.join(' '),
    ].join(' ').toLowerCase()

    return haystack.includes(normalizedSearch)
  })

  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-16 sm:px-8 md:py-24 lg:px-10"><div className="animate-rise max-w-[680px]"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6a9172]">The story library</p><h1 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">Parables for<br /><em className="text-[#6a9172]">open hearts.</em></h1><p className="mt-6 text-[16px] leading-7 text-[#66756b] dark:text-[#b6c5b8]">Stories Jesus told to help us see the kingdom of God in the ordinary moments of life.</p></div><div className="mt-10"><SearchBar value={search} onChange={setSearch} placeholder="Search parables" /></div><div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#dfe5da] pb-5 dark:border-[#34453d]">{parableAudienceFilters.map((option) => <button key={option.value} onClick={() => setFilter(option.value)} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${filter === option.value ? 'bg-[#315d43] text-white' : 'text-[#718078] hover:bg-[#eaf1e5] dark:text-[#b6c5b8] dark:hover:bg-[#2d5140]'}`}>{option.label}</button>)}</div><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredParables.map((parable, index) => <ParableCard key={parable.title} parable={parable} index={index} onClick={() => openParable(parable)} />)}</div></main>
}

function ParableCard({ parable, index, onClick }: { parable: Parable; index: number; onClick: () => void }) {
  return <button onClick={onClick} className={`animate-rise delay-${index + 1} group flex min-h-[280px] flex-col justify-between rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#9fbea0] hover:shadow-[0_18px_35px_rgba(53,84,60,.1)] dark:border-[#34453d] dark:bg-[#1d2c25] dark:hover:border-[#6a9172]`}><div><div className="flex items-center justify-between"><span className="rounded-full bg-[#f5edda] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b6b30] dark:bg-[#514528] dark:text-[#e6cd8e]">Parable</span><ArrowRight size={18} className="text-[#9aaca0] transition-transform group-hover:translate-x-1 group-hover:text-[#315d43]" /></div><h3 className="mt-10 font-serif text-[29px] leading-[1.05] tracking-[-0.035em]">{parable.title}</h3><p className="mt-3 text-sm leading-6 text-[#718078] dark:text-[#b6c5b8]">{parable.summary}</p></div><div className="flex items-center gap-2 border-t border-[#e5ebe1] pt-4 text-[11px] font-semibold text-[#809087] dark:border-[#34453d]"><BookOpen size={14} /> {parable.scripture}</div></button>
}

function ParableDetail({ parable, onBack }: { parable: Parable; onBack: () => void }) {
  const imageUrl = parable.image ? parableImageUrls[`../frontend/images/parables/${parable.image}`] : undefined
  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-12 sm:px-8 md:py-20 lg:px-10">
    <button onClick={onBack} className="mb-14 flex items-center gap-2 text-sm font-bold text-[#6a9172] transition-colors hover:text-[#315d43]">
      <ArrowLeft size={17} /> All parables
    </button>
    <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
      <div className="animate-rise lg:sticky lg:top-10 lg:self-start">

        {imageUrl && (
          <img
            src={imageUrl}
            alt={parable.title}
            className="mb-8 block w-full rounded-2xl"
          />
        )}
        <span className="rounded-full bg-[#f5edda] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b6b30] dark:bg-[#514528] dark:text-[#e6cd8e]">Parable</span>
        <h1 className="mt-6 font-serif text-5xl leading-[.98] tracking-[-0.05em] sm:text-6xl">{parable.title}</h1>
        <p className="mt-7 max-w-[390px] text-[16px] leading-7 text-[#66756b] dark:text-[#b6c5b8]">{parable.summary}</p>
        <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#819087]"><BookOpen size={15} /> {parable.scripture}</div>
        <div className="mt-7 flex flex-wrap gap-2">{parable.themes.map((theme) => <span key={theme} className="rounded-full border border-[#dfe5da] px-3 py-1.5 text-[11px] font-semibold text-[#718078] dark:border-[#40544a] dark:text-[#b6c5b8]">{theme}</span>)}</div>
      </div>
      <div className="animate-rise delay-1 space-y-5">
        <section className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Meaning</p>
          <p className="mt-4 max-w-[650px] font-serif text-2xl leading-[1.3] tracking-[-0.025em]">{parable.meaning}</p>
        </section>
        <section className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a9172]">Teaching notes</p>
          <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">{parable.teachingNotes}</p>
          {parable.activities && <div className="mt-7 border-l-2 border-[#b6d0af] pl-4"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6a9172]">Activities</p><ul className="mt-2 space-y-2 text-[14px] leading-6 text-[#596a60] dark:text-[#c2d0c3]">{parable.activities.map((activity) => <li key={activity}>• {activity}</li>)}</ul></div>}
        </section>
        {parable.prayer && <section className="rounded-3xl border border-[#dfe5da] bg-[#f4f6ee] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#263a31]"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a25e4b]">Prayer</p><p className="mt-3 font-serif text-lg leading-7 text-[#596a60] dark:text-[#d4e0d4]">{parable.prayer}</p></section>}
      </div>
    </div>
  </main>
}

function LessonCard({ lesson, index, onClick }: { lesson: LessonPlan; index: number; onClick: () => void }) {
  return <button onClick={onClick} className={`animate-rise delay-${index + 1} group flex min-h-[280px] flex-col justify-between rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#9fbea0] hover:shadow-[0_18px_35px_rgba(53,84,60,.1)] dark:border-[#34453d] dark:bg-[#1d2c25] dark:hover:border-[#6a9172]`}><div><div className="flex items-center justify-between"><span className="rounded-full bg-[#eaf1e5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#52725b] dark:bg-[#2d5140] dark:text-[#d7ead2]">{lesson.audience}</span><ArrowRight size={18} className="text-[#9aaca0] transition-transform group-hover:translate-x-1 group-hover:text-[#315d43]" /></div><h3 className="mt-10 max-w-[230px] font-serif text-[29px] leading-[1.05] tracking-[-0.035em]">{lesson.title}</h3></div><div className="flex items-center gap-4 border-t border-[#e5ebe1] pt-4 text-[11px] font-semibold text-[#809087] dark:border-[#34453d]"><span className="flex items-center gap-1.5"><BookOpen size={14} /> {lesson.scripture}</span><span className="flex items-center gap-1.5"><Clock3 size={14} /> {lesson.duration}</span></div></button>
}

function Lessons({ filter, setFilter, selectedLesson, openLesson, onBack }: { filter: 'All' | Audience; setFilter: (value: 'All' | Audience) => void; selectedLesson: LessonPlan | null; openLesson: (lesson: LessonPlan) => void; onBack: () => void }) {
  const [search, setSearch] = useState('')

  if (selectedLesson) return <LessonDetail lesson={selectedLesson} onBack={onBack} />

  const normalizedSearch = search.trim().toLowerCase()
  const filteredPlans = (filter === 'All' ? lessonPlans : lessonPlans.filter((lesson) => lesson.audience === filter)).filter((lesson) => {
    if (!normalizedSearch) return true
    const haystack = [lesson.title, lesson.scripture, lesson.summary, lesson.doctrine.body, lesson.moral.body, lesson.worship.body].join(' ').toLowerCase()
    return haystack.includes(normalizedSearch)
  })

  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-16 sm:px-8 md:py-24 lg:px-10"><div className="animate-rise max-w-[680px]"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6a9172]">The library</p><h1 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">Lesson plans for<br /><em className="text-[#6a9172]">growing faith.</em></h1><p className="mt-6 text-[16px] leading-7 text-[#66756b] dark:text-[#b6c5b8]">A simple rhythm for meaningful formation: meet the truth, live the truth, celebrate the truth.</p></div><div className="mt-10"><SearchBar value={search} onChange={setSearch} placeholder="Search lesson plans" /></div><div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#dfe5da] pb-5 dark:border-[#34453d]">{audienceFilters.map((option) => <button key={option} onClick={() => setFilter(option)} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${filter === option ? 'bg-[#315d43] text-white' : 'text-[#718078] hover:bg-[#eaf1e5] dark:text-[#b6c5b8] dark:hover:bg-[#2d5140]'}`}>{option}</button>)}</div><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredPlans.map((lesson, index) => <LessonCard key={lesson.id} lesson={lesson} index={index} onClick={() => openLesson(lesson)} />)}</div></main>
}

function LessonDetail({ lesson, onBack }: { lesson: LessonPlan; onBack: () => void }) {
  const sections = [{ icon: BookOpen, name: 'Doctrine', data: lesson.doctrine, color: 'bg-[#eaf1e5] text-[#315d43] dark:bg-[#2d5140] dark:text-[#d7ead2]' }, { icon: Lightbulb, name: 'Moral', data: lesson.moral, color: 'bg-[#f5edda] text-[#8b6b30] dark:bg-[#514528] dark:text-[#e6cd8e]' }, { icon: Flame, name: 'Worship', data: lesson.worship, color: 'bg-[#f3e4de] text-[#a25e4b] dark:bg-[#54352f] dark:text-[#edb5a2]' }]
  const lessonFolder = audienceDownloadFolders[lesson.audience]
  const availableDownloads = lessonFolder ? lessonDownloadMap[lessonFolder]?.[lesson.id] ?? {} : {}

  return <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1240px] px-5 py-12 sm:px-8 md:py-20 lg:px-10"><button onClick={onBack} className="mb-14 flex items-center gap-2 text-sm font-bold text-[#6a9172] transition-colors hover:text-[#315d43]"><ArrowLeft size={17} /> All lesson plans</button><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div className="animate-rise lg:sticky lg:top-10 lg:self-start"><span className="rounded-full bg-[#eaf1e5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#52725b] dark:bg-[#2d5140] dark:text-[#d7ead2]">{lesson.audience}</span><h1 className="mt-6 font-serif text-5xl leading-[.98] tracking-[-0.05em] sm:text-6xl">{lesson.title}</h1><p className="mt-7 max-w-[370px] text-[16px] leading-7 text-[#66756b] dark:text-[#b6c5b8]">{lesson.summary}</p><div className="mt-8 flex gap-5 text-xs font-semibold text-[#819087]"><span className="flex items-center gap-2"><BookOpen size={15} /> {lesson.scripture}</span><span className="flex items-center gap-2"><Clock3 size={15} /> {lesson.duration}</span></div>{Object.keys(availableDownloads).length > 0 && <div className="mt-6 flex flex-wrap gap-3">{availableDownloads.pdf && <a href={availableDownloads.pdf} download className="inline-flex items-center rounded-full bg-[#315d43] px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#264d36]">Download PDF</a>}{availableDownloads.pptx && <a href={availableDownloads.pptx} download className="inline-flex items-center rounded-full border border-[#dfe5da] bg-white px-4 py-2 text-xs font-bold text-[#315d43] transition-colors hover:border-[#9fbea0] hover:bg-[#f1f7ee] dark:border-[#40544a] dark:bg-[#1d2c25] dark:text-[#d7ead2] dark:hover:border-[#6a9172]">Download PPT</a>}</div>}<div className="mt-12 hidden items-center gap-2 text-xs font-bold text-[#6a9172] lg:flex"><Check size={16} /> Ready to teach</div></div><div className="animate-rise delay-1 space-y-5">{sections.map(({ icon: Icon, name, data, color }) => <section key={name} className="rounded-3xl border border-[#dfe5da] bg-[#fbfcf7] p-6 sm:p-8 dark:border-[#34453d] dark:bg-[#1d2c25]"><div className="flex items-start justify-between gap-4"><div className="flex items-center gap-4"><span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${color}`}><Icon size={19} /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#819087]">{name}</p><h2 className="mt-1 font-serif text-2xl tracking-[-0.03em]">{data.label}</h2></div></div><span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-[#a1afa5] sm:block">0{sections.findIndex((section) => section.name === name) + 1}</span></div><p className="mt-7 max-w-[640px] text-[15px] leading-7 text-[#596a60] dark:text-[#c2d0c3]">{data.body}</p>{'activity' in data && <div className="mt-6 border-l-2 border-[#b6d0af] pl-4"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6a9172]">Suggested activity</p><p className="mt-2 text-[14px] leading-6 text-[#596a60] dark:text-[#c2d0c3]">{data.activity}</p></div>}{'prayer' in data && <div className="mt-6 rounded-2xl bg-[#f4f6ee] p-5 dark:bg-[#263a31]"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a25e4b]">Prayer / song</p><p className="mt-2 font-serif text-[16px] leading-6 text-[#596a60] dark:text-[#d4e0d4]">{data.prayer}</p></div>}</section>)}</div></div></main>
}

export default App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
