import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import './enhancements.css'
import './reset.css'
import './customer-activity.css'
import './invoices.css'
import './invoice-interactive.css'
import './workspace-polish.css'
import { startAutoBackupWatcher } from './database/autoBackup'

startAutoBackupWatcher()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
