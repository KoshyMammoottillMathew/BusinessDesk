import { openDB, type DBSchema } from 'idb'

export type TransactionType = 'income' | 'expense'

export interface BusinessSettings {
  id: 'business'
  businessName: string
  businessType: string
  country: string
  currency: string
  taxRate: number
  financialYearStart: string
  setupComplete: boolean
}

export interface Transaction {
  id?: number
  type: TransactionType
  amount: number
  category: string
  description: string
  date: string
  paymentMethod: string
  createdAt: string
}

interface BusinessDeskDB extends DBSchema {
  settings: { key: string; value: BusinessSettings }
  transactions: { key: number; value: Transaction; indexes: { 'by-date': string; 'by-type': TransactionType } }
}

const dbPromise = openDB<BusinessDeskDB>('businessdesk', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath: 'id' })
    if (!db.objectStoreNames.contains('transactions')) {
      const store = db.createObjectStore('transactions', { keyPath: 'id', autoIncrement: true })
      store.createIndex('by-date', 'date')
      store.createIndex('by-type', 'type')
    }
  },
})

export const getSettings = async () => (await dbPromise).get('settings', 'business')
export const saveSettings = async (settings: BusinessSettings) => (await dbPromise).put('settings', settings)
export const getTransactions = async () => (await dbPromise).getAll('transactions')
export const addTransaction = async (transaction: Transaction) => (await dbPromise).add('transactions', transaction)
export const deleteTransaction = async (id: number) => (await dbPromise).delete('transactions', id)

export async function exportBackup() {
  const db = await dbPromise
  return {
    format: 'BusinessDesk Backup',
    version: 1,
    exportedAt: new Date().toISOString(),
    settings: await db.getAll('settings'),
    transactions: await db.getAll('transactions'),
  }
}
