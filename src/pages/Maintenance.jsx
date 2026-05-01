import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const tickets = [
  { id: 'T-1021', room: '101', issue: 'Leaking Faucet', priority: 'High', status: 'Open', date: '2 hours ago' },
  { id: 'T-1022', room: '204', issue: 'AC Not Cooling', priority: 'Medium', status: 'In Progress', date: '5 hours ago' },
  { id: 'T-1023', room: '305', issue: 'Bulb Replacement', priority: 'Low', status: 'Resolved', date: '1 day ago' },
];

const Maintenance = () => {
  return (
    <div className="maintenance-page">
      <h1 className="page-title">Maintenance Requests</h1>
      
      <div className="tickets-list">
        {tickets.map((ticket, idx) => (
          <motion.div 
            key={ticket.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="ticket-card glass"
          >
            <div className="ticket-header">
              <span className="ticket-id">{ticket.id}</span>
              <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
            </div>
            <div className="ticket-body">
              <h3>{ticket.issue}</h3>
              <p>Room: <strong>{ticket.room}</strong></p>
              <div className="ticket-meta">
                <Clock size={14} /> <span>{ticket.date}</span>
              </div>
            </div>
            <div className="ticket-footer">
              <span className={`status-text ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                {ticket.status === 'Resolved' ? <CheckCircle size={16} /> : <Wrench size={16} />}
                {ticket.status}
              </span>
              <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Update</button>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .tickets-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
        .ticket-card { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
        .ticket-header { display: flex; justify-content: space-between; align-items: center; }
        .ticket-id { color: var(--text-muted); font-size: 0.85rem; font-family: monospace; }
        .priority-badge { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; }
        .priority-badge.high { background: rgba(239, 68, 68, 0.1); color: var(--danger); }
        .priority-badge.medium { background: rgba(245, 158, 11, 0.1); color: var(--warning); }
        .priority-badge.low { background: rgba(16, 185, 129, 0.1); color: var(--success); }
        .ticket-body h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .ticket-body p { font-size: 0.9rem; color: var(--text-muted); }
        .ticket-meta { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; }
        .ticket-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--glass-border); }
        .status-text { display: flex; align-items: center; gap: 6px; font-size: 0.9rem; font-weight: 600; }
        .status-text.resolved { color: var(--success); }
        .status-text.open { color: var(--danger); }
        .status-text.in-progress { color: var(--warning); }
      `}</style>
    </div>
  );
};

export default Maintenance;
