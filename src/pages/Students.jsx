import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, MoreHorizontal, Mail, Phone } from 'lucide-react';

const students = [
  { id: 1, name: 'John Doe', room: '101', email: 'john@example.com', phone: '+1 234 567 890', status: 'Active' },
  { id: 2, name: 'Jane Smith', room: '103', email: 'jane@example.com', phone: '+1 234 567 891', status: 'Active' },
  { id: 3, name: 'Robert Brown', room: '201', email: 'robert@example.com', phone: '+1 234 567 892', status: 'On Leave' },
  { id: 4, name: 'Alice Wilson', room: '104', email: 'alice@example.com', phone: '+1 234 567 893', status: 'Active' },
  { id: 5, name: 'Charlie Davis', room: '302', email: 'charlie@example.com', phone: '+1 234 567 894', status: 'Inactive' },
];

const Students = () => {
  return (
    <div className="students-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Student Records</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '-1.5rem', marginBottom: '2rem' }}>
            View and manage all residents in the hostel
          </p>
        </div>
        <div className="header-actions">
          <button className="glass flex-center" style={{ padding: '10px 15px', borderRadius: '8px', gap: '8px' }}>
            <Download size={18} /> Export
          </button>
          <button className="btn-primary">
            + Add New Student
          </button>
        </div>
      </div>

      <div className="table-container glass">
        <div className="table-filters">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search by name, room or email..." />
          </div>
          <button className="filter-btn"><Filter size={18} /> Filter</button>
        </div>

        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Room</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={student.id}
              >
                <td>
                  <div className="student-info">
                    <div className="avatar">{student.name.charAt(0)}</div>
                    <span>{student.name}</span>
                  </div>
                </td>
                <td>{student.room}</td>
                <td>
                  <div className="contact-icons">
                    <Mail size={16} title={student.email} />
                    <Phone size={16} title={student.phone} />
                  </div>
                </td>
                <td>
                  <span className={`status-pill ${student.status.toLowerCase().replace(' ', '-')}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <button className="icon-btn"><MoreHorizontal size={18} /></button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .table-container {
          padding: 1.5rem;
          overflow-x: auto;
        }

        .table-filters {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--glass-border);
          flex: 1;
          max-width: 400px;
        }

        .search-box input {
          background: transparent;
          border: none;
          color: var(--text-main);
          width: 100%;
          outline: none;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--text-main);
          border: 1px solid var(--glass-border);
          padding: 0.5rem 1rem;
          border-radius: 10px;
        }

        .students-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .students-table th {
          padding: 1rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.85rem;
          text-transform: uppercase;
          border-bottom: 1px solid var(--glass-border);
        }

        .students-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--glass-border);
          font-size: 0.95rem;
        }

        .student-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          width: 32px;
          height: 32px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .contact-icons {
          display: flex;
          gap: 12px;
          color: var(--text-muted);
        }

        .status-pill {
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-pill.active { background: rgba(16, 185, 129, 0.1); color: var(--success); }
        .status-pill.on-leave { background: rgba(245, 158, 11, 0.1); color: var(--warning); }
        .status-pill.inactive { background: rgba(239, 68, 68, 0.1); color: var(--danger); }

        .icon-btn {
          color: var(--text-muted);
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default Students;
