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
      className={`${modalOpen ? 'bg-[#b0a090]' : 'bg-[#f5e6d3]'} rounded-[15px] p-5 w-[300px] [font-family:Arial,sans-serif]`}
    >
      <h3 className="mb-[10px]">Create a new habit</h3>
      <hr className="mb-[15px]" />
      <div className="relative mb-5">
        <button
          onClick={toggleModal}
          className="absolute left-[5px] top-1/2 -translate-y-1/2 border-none bg-transparent text-2xl cursor-pointer"
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
          className="pl-[40px] pr-[10px] py-[10px] rounded-[10px] border-2 border-[#2a4d7c] w-full text-[16px]"
        />
        {modalOpen && (
          <div
            className="absolute top-1/2 left-[40px] -translate-y-1/2 bg-[#cce4ff] rounded-[15px] px-[20px] py-[10px] flex gap-[15px] shadow-[0_2px_5px_rgba(0,0,0,0.2)] z-10"
          >
            {habitIcons.map((icon) => (
              <button
                key={icon}
                onClick={() => handleIconClick(icon)}
                className="text-2xl border-2 border-[#2a4d7c] rounded-full bg-white cursor-pointer w-10 h-10 flex items-center justify-center"
                type="button"
                aria-label={`Select icon ${icon}`}
              >
                {icon}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleCancel}
          className="bg-[#b94a48] text-white border-none rounded-[10px] px-[20px] py-[10px] cursor-pointer shadow-[2px_2px_3px_#7a2e2d] font-bold"
          type="button"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-[#d87e1f] text-white border-none rounded-[10px] px-[20px] py-[10px] cursor-pointer shadow-[2px_2px_3px_#7a5a1a] font-bold disabled:opacity-50"
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
