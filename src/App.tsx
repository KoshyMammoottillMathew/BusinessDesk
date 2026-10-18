import { useState } from 'react'
import {
  LayoutDashboard, WalletCards, Users, TrendingUp, ReceiptText,
  FileText, FolderKanban, Package, UserRound, BarChart3, Target,
  Settings, Database, Search, Bell, Plus, ArrowUpRight, ArrowDownRight,
  Menu, X, ShieldCheck
} from 'lucide-react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const nav = [
  ['Dashboard', LayoutDashboard], ['Finance', WalletCards], ['Customers', Users],
  ['Sales', TrendingUp], ['Invoices', ReceiptText], ['Quotations', FileText],
  ['Projects', FolderKanban], ['Inventory', Package], ['Team', UserRound],
  ['Reports', BarChart3], ['Goals', Target],
] as const

const revenueData = [
  { month: 'May', revenue: 28400, expenses: 16400 },
  { month: 'Jun', revenue: 32100, expenses: 17200 },
  { month: 'Jul', revenue: 30500, expenses: 18100 },
  { month: 'Aug', revenue: 38900, expenses: 19400 },
  { month: 'Sep', revenue: 42100, expenses: 20500 },
  { month: 'Oct', revenue: 48240, expenses: 21420 },
]

const money = (value: number) => `$${value.toLocaleString()}`

function App() {
  const [active, setActive] = useState('Dashboard')
  const [menuOpen, setMenuOpen] = useState(false)

  const metrics = [
    { label: 'Revenue', value: '$48,240', change: '+14.6%', up: true },
    { label: 'Expenses', value: '$21,420', change: '+4.5%', up: false },
    { label: 'Net profit', value: '$26,820', change: '+23.9%', up: true },
    { label: 'Receivable', value: '$8,450', change: '5 overdue', up: false },
  ]

  return <div className="app-shell">
    <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="brand"><div className="brand-mark">B</div><div><strong>BusinessDesk</strong><span>Local business OS</span></div></div>
      <button className="mobile-close" onClick={() => setMenuOpen(false)}><X size={20}/></button>
      <nav>
        {nav.map(([label, Icon]) => <button key={label} className={active === label ? 'active' : ''} onClick={() => { setActive(label); setMenuOpen(false) }}>
          <Icon size={18}/><span>{label}</span>
        </button>)}
      </nav>
      <div className="sidebar-bottom">
        <button><Settings size={18}/>Settings</button>
        <button><Database size={18}/>Backup & restore</button>
        <div className="privacy-chip"><ShieldCheck size={16}/><span>Local-first<br/><small>Your data stays here</small></span></div>
      </div>
    </aside>

    <main>
      <header className="topbar">
        <button className="menu-button" onClick={() => setMenuOpen(true)}><Menu size={21}/></button>
        <div className="search"><Search size={17}/><input aria-label="Search" placeholder="Search anything…"/></div>
        <div className="top-actions"><button className="icon-button"><Bell size={19}/></button><div className="avatar">KM</div></div>
      </header>

      <div className="content">
        <section className="welcome">
          <div><p className="eyebrow">OVERVIEW</p><h1>{active === 'Dashboard' ? 'Good afternoon' : active}</h1><p>{active === 'Dashboard' ? "Here’s how your business is performing today." : `${active} workspace is coming next in the build.`}</p></div>
          <button className="primary"><Plus size={17}/>Quick add</button>
        </section>

        {active !== 'Dashboard' ? <section className="placeholder card"><div className="placeholder-icon"><LayoutDashboard/></div><h2>{active}</h2><p>This module is scaffolded in the navigation and will be connected to the local IndexedDB data layer as we build the product.</p></section> : <>
          <section className="metrics">
            {metrics.map(item => <article className="metric card" key={item.label}><div className="metric-top"><span>{item.label}</span><span className={item.up ? 'positive' : 'neutral'}>{item.up ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {item.change}</span></div><strong>{item.value}</strong><small>vs. previous month</small></article>)}
          </section>

          <section className="grid-two">
            <article className="card chart-card"><div className="card-heading"><div><h2>Revenue overview</h2><p>Income and expenses over six months</p></div><select aria-label="Chart period"><option>Last 6 months</option></select></div>
              <div className="chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={revenueData}><defs><linearGradient id="rev" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#635bff" stopOpacity={.28}/><stop offset="100%" stopColor="#635bff" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf0f5"/><XAxis dataKey="month" axisLine={false} tickLine={false}/><YAxis axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}k`}/><Tooltip formatter={(v) => money(Number(v))}/><Area type="monotone" dataKey="revenue" stroke="#635bff" strokeWidth={2.5} fill="url(#rev)"/><Area type="monotone" dataKey="expenses" stroke="#aab2c0" strokeWidth={2} fill="transparent"/></AreaChart></ResponsiveContainer></div>
            </article>

            <article className="card"><div className="card-heading"><div><h2>Smart insights</h2><p>Calculated locally from your data</p></div></div><div className="insights"><div className="insight good"><span>↗</span><div><strong>Revenue is growing</strong><p>Revenue is 14.6% higher than last month.</p></div></div><div className="insight warn"><span>!</span><div><strong>5 invoices are overdue</strong><p>$8,450 is currently awaiting payment.</p></div></div><div className="insight"><span>◎</span><div><strong>Healthy margin</strong><p>Your current net margin is 55.6%.</p></div></div></div></article>
          </section>

          <section className="grid-two lower">
            <article className="card"><div className="card-heading"><div><h2>Outstanding invoices</h2><p>Payments needing attention</p></div><button className="text-button">View all</button></div><div className="table-list">{[['INV-1042','Northstar Studio','$2,500','7 days'],['INV-1041','Arbor & Co.','$1,800','3 days'],['INV-1038','Lumina Works','$4,150','12 days']].map(row => <div className="table-row" key={row[0]}><div><strong>{row[0]}</strong><span>{row[1]}</span></div><strong>{row[2]}</strong><span className="overdue">{row[3]} overdue</span></div>)}</div></article>
            <article className="card"><div className="card-heading"><div><h2>Sales pipeline</h2><p>Current opportunities</p></div><button className="text-button">Open CRM</button></div><div className="pipeline">{[['New leads',12,42],['Qualified',8,64],['Proposal',5,48],['Won',8,82]].map(([label,count,width]) => <div className="pipe" key={String(label)}><div><span>{label}</span><strong>{count}</strong></div><div className="bar"><i style={{width:`${width}%`}}/></div></div>)}</div></article>
          </section>
        </>}
      </div>
    </main>
    {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)}/>} 
  </div>
}

export default App
