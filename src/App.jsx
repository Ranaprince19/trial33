import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Students from './pages/Students';
import Payments from './pages/Payments';
import Maintenance from './pages/Maintenance';
import { Search, Bell, User } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'rooms':
        return <Rooms />;
      case 'students':
        return <Students />;
      case 'payments':
        return <Payments />;
      case 'maintenance':
        return <Maintenance />;
      default:
        return <Dashboard />;
    }
  };


  return (
    <div className="layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="main-content">
        <header className="top-nav glass">
          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input type="text" placeholder="Search for students, rooms..." />
          </div>
          
          <div className="top-nav-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge"></span>
            </button>
            <div className="profile-pill glass">
              <div className="avatar-small"></div>
              <span>Admin User</span>
            </div>
          </div>
        </header>

        {renderPage()}
      </main>

      <style>{`
        .top-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          margin-bottom: 2rem;
          position: sticky;
          top: 1rem;
          z-index: 50;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 12px;
          width: 300px;
          border: 1px solid var(--glass-border);
        }

        .search-icon {
          color: var(--text-muted);
        }

        .search-bar input {
          background: transparent;
          border: none;
          color: var(--text-main);
          width: 100%;
          outline: none;
          font-size: 0.9rem;
        }

        .top-nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-btn {
          background: transparent;
          color: var(--text-muted);
          position: relative;
        }

        .icon-btn:hover {
          color: var(--text-main);
        }

        .notification-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          background: var(--danger);
          border-radius: 50%;
          border: 2px solid var(--bg-dark);
        }

        .profile-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
        }

        .avatar-small {
          width: 28px;
          height: 28px;
          background: #334155;
          border-radius: 50%;
        }

        .profile-pill span {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .page-content {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .search-bar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
