import { openDB, type DBSchema } from 'idb'

export type TransactionType = 'income' | 'expense'
export type CustomerStatus = 'Lead' | 'Active' | 'Inactive'

export interface BusinessSettings { id:'business'; businessName:string; businessType:string; country:string; currency:string; taxRate:number; financialYearStart:string; setupComplete:boolean }
export interface Transaction { id?:number; type:TransactionType; amount:number; category:string; description:string; date:string; paymentMethod:string; createdAt:string }
export interface Customer { id?:number; name:string; company:string; email:string; phone:string; status:CustomerStatus; notes:string; createdAt:string }
export interface BackupFile { format:'BusinessDesk Backup'; version:1; exportedAt:string; settings:BusinessSettings[]; transactions:Transaction[]; customers:Customer[] }

interface BusinessDeskDB extends DBSchema {
 settings:{key:string;value:BusinessSettings}
 transactions:{key:number;value:Transaction;indexes:{'by-date':string;'by-type':TransactionType}}
 customers:{key:number;value:Customer;indexes:{'by-name':string;'by-status':CustomerStatus}}
}

const dbPromise=openDB<BusinessDeskDB>('businessdesk',2,{upgrade(db,oldVersion){
 if(oldVersion<1){db.createObjectStore('settings',{keyPath:'id'});const t=db.createObjectStore('transactions',{keyPath:'id',autoIncrement:true});t.createIndex('by-date','date');t.createIndex('by-type','type')}
 if(oldVersion<2){const c=db.createObjectStore('customers',{keyPath:'id',autoIncrement:true});c.createIndex('by-name','name');c.createIndex('by-status','status')}
}})
export const getSettings=async()=>(await dbPromise).get('settings','business')
export const saveSettings=async(s:BusinessSettings)=>(await dbPromise).put('settings',s)
export const getTransactions=async()=>(await dbPromise).getAll('transactions')
export const addTransaction=async(t:Transaction)=>(await dbPromise).add('transactions',t)
export const deleteTransaction=async(id:number)=>(await dbPromise).delete('transactions',id)
export const getCustomers=async()=>(await dbPromise).getAll('customers')
export const addCustomer=async(c:Customer)=>(await dbPromise).add('customers',c)
export const updateCustomer=async(c:Customer)=>{if(c.id===undefined)throw new Error('Customer ID is required');return(await dbPromise).put('customers',c)}
export const deleteCustomer=async(id:number)=>(await dbPromise).delete('customers',id)

export async function exportBackup():Promise<BackupFile>{const db=await dbPromise;return{format:'BusinessDesk Backup',version:1,exportedAt:new Date().toISOString(),settings:await db.getAll('settings'),transactions:await db.getAll('transactions'),customers:await db.getAll('customers')}}
export async function restoreBackup(data:unknown){
 if(!data||typeof data!=='object')throw new Error('Invalid backup file')
 const b=data as Partial<BackupFile>;if(b.format!=='BusinessDesk Backup'||b.version!==1||!Array.isArray(b.settings)||!Array.isArray(b.transactions)||!Array.isArray(b.customers))throw new Error('This is not a valid BusinessDesk backup')
 const db=await dbPromise;const tx=db.transaction(['settings','transactions','customers'],'readwrite');await Promise.all([tx.objectStore('settings').clear(),tx.objectStore('transactions').clear(),tx.objectStore('customers').clear()]);for(const s of b.settings)await tx.objectStore('settings').put(s);for(const t of b.transactions)await tx.objectStore('transactions').put(t);for(const c of b.customers)await tx.objectStore('customers').put(c);await tx.done
}
