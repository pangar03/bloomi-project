import { useState } from 'react';

const habitIcons = [
  '🦷', // tooth icon placeholder
  '📚', // book icon placeholder
  '⚽', // sport icon placeholder
];

const NewHabit: React.FC = () => {
  const [habitName, setHabitName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(habitIcons[0]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
    setModalOpen(false);
  };

  const handleCancel = () => {
    setHabitName('');
    setSelectedIcon(habitIcons[0]);
    setModalOpen(false);
  };

  const handleSave = () => {
 
    alert(`Habit saved: ${habitName} with icon ${selectedIcon}`);
    setHabitName('');
    setSelectedIcon(habitIcons[0]);
    setModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: modalOpen ? '#b0a090' : '#f5e6d3',
        borderRadius: '15px',
        padding: '20px',
        width: '300px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>Create a new habit</h3>
      <hr style={{ marginBottom: '15px' }} />
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <button
          onClick={toggleModal}
          style={{
            position: 'absolute',
            left: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            background: 'none',
            fontSize: '24px',
            cursor: 'pointer',
          }}
          aria-label="Toggle icon modal"
          type="button"
        >
          {selectedIcon}
        </button>
        <input
          type="text"
          placeholder="Text Input"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          style={{
            padding: '10px 10px 10px 40px',
            borderRadius: '10px',
            border: '2px solid #2a4d7c',
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '16px',
          }}
        />
        {modalOpen && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '40px',
              transform: 'translateY(-50%)',
              backgroundColor: '#cce4ff',
              borderRadius: '15px',
              padding: '10px 20px',
              display: 'flex',
              gap: '15px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              zIndex: 10,
            }}
          >
            {habitIcons.map((icon) => (
              <button
                key={icon}
                onClick={() => handleIconClick(icon)}
                style={{
                  fontSize: '24px',
                  border: '2px solid #2a4d7c',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                type="button"
                aria-label={`Select icon ${icon}`}
              >
                {icon}
              </button>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handleCancel}
          style={{
            backgroundColor: '#b94a48',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            boxShadow: '2px 2px 3px #7a2e2d',
            fontWeight: 'bold',
          }}
          type="button"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#d87e1f',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            boxShadow: '2px 2px 3px #7a5a1a',
            fontWeight: 'bold',
          }}
          type="button"
          disabled={habitName.trim() === ''}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewHabit;
