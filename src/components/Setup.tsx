import { useRef, useState } from 'react'
import { ShieldCheck, Upload } from 'lucide-react'
import { restoreBackup, saveSettings, type BusinessSettings } from '../database/db'

export default function Setup({ onComplete }: { onComplete: (settings: BusinessSettings) => void }) {
  const [form, setForm] = useState({ businessName: '', businessType: 'General Business', country: 'India', currency: 'INR', taxRate: 0, financialYearStart: 'April' })
  const [restoreMessage, setRestoreMessage] = useState('')
  const restoreInput = useRef<HTMLInputElement>(null)
  const update = (key: string, value: string | number) => setForm(v => ({ ...v, [key]: value }))
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const settings: BusinessSettings = { id: 'business', ...form, taxRate: Number(form.taxRate), setupComplete: true }
    await saveSettings(settings); onComplete(settings)
  }
  const restore = async (file?: File) => {
    if (!file) return
    setRestoreMessage('')
    try {
      const data = JSON.parse(await file.text())
      await restoreBackup(data)
      const restoredSettings = Array.isArray(data?.settings) ? data.settings.find((s: BusinessSettings) => s?.id === 'business') : undefined
      if (!restoredSettings?.setupComplete) throw new Error('This backup does not contain a completed BusinessDesk workspace.')
      onComplete(restoredSettings)
    } catch (e) {
      setRestoreMessage(e instanceof Error ? e.message : 'Could not restore backup')
    } finally {
      if (restoreInput.current) restoreInput.current.value = ''
    }
  }
  return <main className="setup-page"><section className="setup-card">
    <div className="setup-brand"><div className="brand-mark">B</div><strong>BusinessDesk</strong></div>
    <p className="eyebrow">WELCOME</p><h1>Set up your business</h1><p className="setup-copy">A few details will personalise your workspace. Your business data stays in this browser.</p>
    <form onSubmit={submit} className="setup-form">
      <label>Business name<input required value={form.businessName} onChange={e=>update('businessName',e.target.value)} placeholder="e.g. Acme Studio"/></label>
      <div className="form-row"><label>Business type<select value={form.businessType} onChange={e=>update('businessType',e.target.value)}><option>General Business</option><option>Freelancer</option><option>Agency / Service Business</option><option>Retail / Trading</option><option>Consultant</option></select></label><label>Country / region<input value={form.country} onChange={e=>update('country',e.target.value)}/></label></div>
      <div className="form-row"><label>Currency<select value={form.currency} onChange={e=>update('currency',e.target.value)}><option value="INR">INR — ₹</option><option value="USD">USD — $</option><option value="AED">AED</option><option value="EUR">EUR — €</option><option value="GBP">GBP — £</option></select></label><label>Tax rate (%)<input type="number" min="0" max="100" step="0.01" value={form.taxRate} onChange={e=>update('taxRate',e.target.value)}/></label></div>
      <label>Financial year starts<select value={form.financialYearStart} onChange={e=>update('financialYearStart',e.target.value)}><option>January</option><option>April</option><option>July</option><option>October</option></select></label>
      <button className="primary setup-submit" type="submit">Create my workspace</button>
    </form>
    <div className="setup-restore">
      <span>Already use BusinessDesk?</span>
      <input ref={restoreInput} type="file" accept="application/json,.json" hidden onChange={e=>restore(e.target.files?.[0])}/>
      <button type="button" className="secondary" onClick={()=>restoreInput.current?.click()}><Upload size={16}/>Restore from backup</button>
      <small>Select a BusinessDesk JSON backup to restore your existing workspace on this browser.</small>
      {restoreMessage&&<div className="backup-message">{restoreMessage}</div>}
    </div>
    <div className="setup-privacy"><ShieldCheck size={17}/><span><strong>Privacy-first</strong><br/>No account or BusinessDesk server is required for your core business records.</span></div>
  </section></main>
}
