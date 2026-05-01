import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

const transactions = [
  { id: 1, user: 'John Doe', type: 'Rent', amount: 1200, status: 'Completed', date: 'May 1, 2026' },
  { id: 2, user: 'Jane Smith', type: 'Deposit', amount: 500, status: 'Pending', date: 'Apr 28, 2026' },
  { id: 3, user: 'Alice Wilson', type: 'Rent', amount: 1200, status: 'Completed', date: 'Apr 25, 2026' },
  { id: 4, user: 'Charlie Davis', type: 'Laundry', amount: 50, status: 'Failed', date: 'Apr 20, 2026' },
];

const Payments = () => {
  return (
    <div className="payments-page">
      <h1 className="page-title">Fee Management</h1>
      
      <div className="stats-grid">
        <div className="stat-card glass">
          <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}><ArrowUpRight /></div>
          <div className="stat-info"><h3>Monthly Revenue</h3><p>$45,200</p></div>
        </div>
        <div className="stat-card glass">
          <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}><Clock /></div>
          <div className="stat-info"><h3>Pending Fees</h3><p>$3,400</p></div>
        </div>
      </div>

      <div className="table-container glass">
        <h3>Transaction History</h3>
        <table className="payments-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id}>
                <td>{t.user}</td>
                <td>{t.type}</td>
                <td style={{ fontWeight: 600 }}>${t.amount}</td>
                <td>{t.date}</td>
                <td>
                  <span className={`status-pill ${t.status.toLowerCase()}`}>{t.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .table-container { padding: 1.5rem; margin-top: 2rem; }
        h3 { margin-bottom: 1.5rem; }
        .payments-table { width: 100%; border-collapse: collapse; }
        .payments-table th { text-align: left; padding: 1rem; color: var(--text-muted); font-size: 0.85rem; border-bottom: 1px solid var(--glass-border); }
        .payments-table td { padding: 1rem; border-bottom: 1px solid var(--glass-border); }
        .status-pill { padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; }
        .status-pill.completed { background: rgba(16, 185, 129, 0.1); color: var(--success); }
        .status-pill.pending { background: rgba(245, 158, 11, 0.1); color: var(--warning); }
        .status-pill.failed { background: rgba(239, 68, 68, 0.1); color: var(--danger); }
      `}</style>
    </div>
  );
};

export default Payments;
