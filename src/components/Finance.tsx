import { useMemo, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { addTransaction, deleteTransaction, type Transaction, type TransactionType } from '../database/db'

const today = () => new Date().toISOString().slice(0,10)

export default function Finance({ transactions, currency, onChange }: { transactions: Transaction[]; currency: string; onChange: () => Promise<void> }) {
  const [showForm,setShowForm]=useState(false)
  const [form,setForm]=useState({type:'income' as TransactionType,amount:'',category:'Sales',description:'',date:today(),paymentMethod:'Bank'})
  const formatter = useMemo(()=>new Intl.NumberFormat(undefined,{style:'currency',currency}),[currency])
  const income=transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), expenses=transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0)
  const submit=async(e:React.FormEvent)=>{e.preventDefault();await addTransaction({...form,amount:Number(form.amount),createdAt:new Date().toISOString()});setForm(v=>({...v,amount:'',description:''}));setShowForm(false);await onChange()}
  const remove=async(id?:number)=>{if(id===undefined)return;await deleteTransaction(id);await onChange()}
  return <section className="finance-page">
    <div className="finance-summary"><div className="card"><span>Total income</span><strong>{formatter.format(income)}</strong></div><div className="card"><span>Total expenses</span><strong>{formatter.format(expenses)}</strong></div><div className="card"><span>Net cash flow</span><strong>{formatter.format(income-expenses)}</strong></div></div>
    <div className="module-actions"><div><h2>Transactions</h2><p>Income and expenses stored locally in your browser.</p></div><button className="primary" onClick={()=>setShowForm(!showForm)}><Plus size={16}/>Add transaction</button></div>
    {showForm&&<form className="transaction-form card" onSubmit={submit}><div className="form-row"><label>Type<select value={form.type} onChange={e=>setForm({...form,type:e.target.value as TransactionType})}><option value="income">Income</option><option value="expense">Expense</option></select></label><label>Amount<input required type="number" min="0.01" step="0.01" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})}/></label></div><div className="form-row"><label>Category<input required value={form.category} onChange={e=>setForm({...form,category:e.target.value})}/></label><label>Date<input required type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label></div><label>Description<input value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="Optional note"/></label><label>Payment method<select value={form.paymentMethod} onChange={e=>setForm({...form,paymentMethod:e.target.value})}><option>Bank</option><option>Cash</option><option>Card</option><option>UPI</option><option>Other</option></select></label><button className="primary" type="submit">Save transaction</button></form>}
    <div className="card transaction-list">{transactions.length===0?<div className="empty-state"><h3>No transactions yet</h3><p>Add your first income or expense. Dashboard totals will update automatically.</p></div>:transactions.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(t=><div className="transaction-row" key={t.id}><div><strong>{t.description||t.category}</strong><span>{t.category} · {t.date} · {t.paymentMethod}</span></div><strong className={t.type==='income'?'positive':'expense-value'}>{t.type==='income'?'+':'−'}{formatter.format(t.amount)}</strong><button className="delete-button" aria-label="Delete transaction" onClick={()=>remove(t.id)}><Trash2 size={15}/></button></div>)}</div>
  </section>
}
