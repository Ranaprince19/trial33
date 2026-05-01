import React from 'react';
import { Users, Bed, CreditCard, AlertCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
];

const StatCard = ({ title, value, icon, color, trend }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="stat-card glass"
  >
    <div className="stat-icon" style={{ backgroundColor: `${color}20`, color: color }}>
      {icon}
    </div>
    <div className="stat-info">
      <h3>{title}</h3>
      <p>{value}</p>
      {trend && <span className="trend positive"><TrendingUp size={12} /> {trend}</span>}
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="page-header">
        <h1 className="page-title">Dashboard Overview</h1>
        <div className="user-welcome">
          <p>Welcome back, <strong>Admin</strong></p>
          <span>Friday, May 1, 2026</span>
        </div>
      </header>

      <div className="stats-grid">
        <StatCard title="Total Students" value="452" icon={<Users size={24} />} color="#6366f1" trend="+12% this month" />
        <StatCard title="Occupied Beds" value="380/400" icon={<Bed size={24} />} color="#10b981" />
        <StatCard title="Pending Fees" value="$12,450" icon={<CreditCard size={24} />} color="#f59e0b" trend="-5% from last month" />
        <StatCard title="Maintenance" value="8 Open" icon={<AlertCircle size={24} />} color="#ef4444" />
      </div>

      <div className="charts-grid">
        <div className="chart-container glass">
          <h3>Revenue Overview</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="recent-activity glass">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="activity-item">
                <div className="activity-avatar"></div>
                <div className="activity-details">
                  <p><strong>John Doe</strong> paid monthly rent</p>
                  <span>2 hours ago</span>
                </div>
                <div className="activity-amount">+$1,200</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .user-welcome p {
          font-size: 1.1rem;
        }

        .user-welcome span {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .trend {
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }

        .trend.positive { color: var(--success); }

        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }

        .chart-container, .recent-activity {
          padding: 1.5rem;
        }

        .chart-container h3, .recent-activity h3 {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: 12px;
          transition: background 0.2s ease;
        }

        .activity-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .activity-avatar {
          width: 40px;
          height: 40px;
          background: #334155;
          border-radius: 50%;
        }

        .activity-details {
          flex: 1;
        }

        .activity-details p {
          font-size: 0.9rem;
        }

        .activity-details span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .activity-amount {
          font-weight: 600;
          color: var(--success);
          font-size: 0.9rem;
        }

        @media (max-width: 1200px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
