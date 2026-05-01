import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, MoreVertical, Bed, User } from 'lucide-react';

const rooms = [
  { id: 101, type: 'Double', beds: 2, occupied: 2, status: 'Full' },
  { id: 102, type: 'Single', beds: 1, occupied: 0, status: 'Available' },
  { id: 103, type: 'Double', beds: 2, occupied: 1, status: 'Partial' },
  { id: 104, type: 'Suite', beds: 3, occupied: 3, status: 'Full' },
  { id: 105, type: 'Double', beds: 2, occupied: 0, status: 'Available' },
  { id: 106, type: 'Single', beds: 1, occupied: 1, status: 'Full' },
];

const RoomCard = ({ room }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Full': return 'var(--danger)';
      case 'Partial': return 'var(--warning)';
      case 'Available': return 'var(--success)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="room-card glass"
    >
      <div className="room-header">
        <div className="room-id">Room {room.id}</div>
        <button className="icon-btn"><MoreVertical size={18} /></button>
      </div>
      
      <div className="room-details">
        <div className="detail-item">
          <span className="label">Type</span>
          <span className="value">{room.type}</span>
        </div>
        <div className="detail-item">
          <span className="label">Occupancy</span>
          <div className="bed-icons">
            {[...Array(room.beds)].map((_, i) => (
              <Bed 
                key={i} 
                size={16} 
                color={i < room.occupied ? 'var(--primary)' : 'var(--text-muted)'} 
                style={{ fill: i < room.occupied ? 'var(--primary)' : 'transparent', opacity: i < room.occupied ? 1 : 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="room-footer">
        <span className="status-badge" style={{ backgroundColor: `${getStatusColor(room.status)}20`, color: getStatusColor(room.status) }}>
          {room.status}
        </span>
        <span className="occupancy-text">{room.occupied}/{room.beds} Beds</span>
      </div>

      <style>{`
        .room-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .room-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .room-id {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .room-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .label {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .value {
          font-weight: 500;
          font-size: 0.9rem;
        }

        .bed-icons {
          display: flex;
          gap: 6px;
        }

        .room-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .status-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .occupancy-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </motion.div>
  );
};

const Rooms = () => {
  return (
    <div className="rooms-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Room Management</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '-1.5rem', marginBottom: '2rem' }}>
            Manage room allocations and occupancy status
          </p>
        </div>
        <div className="header-actions">
          <button className="glass flex-center" style={{ padding: '10px', borderRadius: '8px' }}>
            <Filter size={20} />
          </button>
          <button className="btn-primary">
            <Plus size={20} /> Add Room
          </button>
        </div>
      </div>

      <div className="rooms-grid">
        {rooms.map(room => <RoomCard key={room.id} room={room} />)}
      </div>

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Rooms;
