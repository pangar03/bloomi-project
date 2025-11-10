import { useState } from "react";
import type { IconVariant } from "../../types/IconVariants";
import AddHabitButton from "../buttons/addHabitButton";
import Input from "../Input/input";
import Button from "../buttons/button";
import IconButton from "../buttons/iconButton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { createTask } from "../../services/tasksDb";
import { addTask } from "../../store/slices/taskListSlice";
import type { Goal } from "../../types/Goal";
import { addGoal } from "../../store/slices/goalListSlice";

// const habitIcons = [
//   '🦷', // tooth icon placeholder
//   '📚', // book icon placeholder
//   '⚽', // sport icon placeholder
// ];

// const NewHabit: React.FC = () => {
//   const [habitName, setHabitName] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedIcon, setSelectedIcon] = useState(habitIcons[0]);

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
//   };

//   const handleIconClick = (icon: string) => {
//     setSelectedIcon(icon);
//     setModalOpen(false);
//   };

//   const handleCancel = () => {
//     setHabitName('');
//     setSelectedIcon(habitIcons[0]);
//     setModalOpen(false);
//   };

//   const handleSave = () => {

//     alert(`Habit saved: ${habitName} with icon ${selectedIcon}`);
//     setHabitName('');
//     setSelectedIcon(habitIcons[0]);
//     setModalOpen(false);
//   };

//   return (
//     <div
//       className={`${modalOpen ? 'bg-[#b0a090]' : 'bg-[#f5e6d3]'} rounded-[15px] p-5 w-[300px] [font-family:Arial,sans-serif]`}
//     >
//       <h3 className="mb-[10px]">Create a new habit</h3>
//       <hr className="mb-[15px]" />
//       <div className="relative mb-5">
//         <button
//           onClick={toggleModal}
//           className="absolute left-[5px] top-1/2 -translate-y-1/2 border-none bg-transparent text-2xl cursor-pointer"
//           aria-label="Toggle icon modal"
//           type="button"
//         >
//           {selectedIcon}
//         </button>
//         <input
//           type="text"
//           placeholder="Text Input"
//           value={habitName}
//           onChange={(e) => setHabitName(e.target.value)}
//           className="pl-[40px] pr-[10px] py-[10px] rounded-[10px] border-2 border-[#2a4d7c] w-full text-[16px]"
//         />
//         {modalOpen && (
//           <div
//             className="absolute top-1/2 left-[40px] -translate-y-1/2 bg-[#cce4ff] rounded-[15px] px-[20px] py-[10px] flex gap-[15px] shadow-[0_2px_5px_rgba(0,0,0,0.2)] z-10"
//           >
//             {habitIcons.map((icon) => (
//               <button
//                 key={icon}
//                 onClick={() => handleIconClick(icon)}
//                 className="text-2xl border-2 border-[#2a4d7c] rounded-full bg-white cursor-pointer w-10 h-10 flex items-center justify-center"
//                 type="button"
//                 aria-label={`Select icon ${icon}`}
//               >
//                 {icon}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="flex justify-between">
//         <button
//           onClick={handleCancel}
//           className="bg-[#b94a48] text-white border-none rounded-[10px] px-[20px] py-[10px] cursor-pointer shadow-[2px_2px_3px_#7a2e2d] font-bold"
//           type="button"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleSave}
//           className="bg-[#d87e1f] text-white border-none rounded-[10px] px-[20px] py-[10px] cursor-pointer shadow-[2px_2px_3px_#7a5a1a] font-bold disabled:opacity-50"
//           type="button"
//           disabled={habitName.trim() === ''}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewHabit;

const iconOptions: IconVariant[] = ["BookIcon", "ToothIcon"];

const NewHabit = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState("");
    const [icon, setIcon] = useState<IconVariant>("BookIcon");
    const [modalOpen, setModalOpen] = useState(false);
    const [iconModalOpen, setIconModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const toggleIconModal = () => {
        setIconModalOpen(!iconModalOpen);
    };

    const handleIconChange = (iconValue: IconVariant) => {
        setIcon(iconValue);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        const { task, goal, error } = await createTask(
            taskName,
            icon,
            user!.id
        );
        if (error) {
            console.error("Error creating task:", error);
            return;
        }

        const newTask = {
            id: task.id,
            taskName: task.description,
            reward: task.reward,
            variant: "basic" as const,
            iconVariant: task.icon as IconVariant,
        };

        const newGoal = {
            id: goal?.id,
            goalName: goal?.description,
            goal: goal?.goal,
            reward: goal?.reward,
            trackedTaskId: goal?.task_id,
            progress: 0,
        } as Goal;

        dispatch(addGoal(newGoal));
        dispatch(addTask(newTask));
        toggleModal();
        setTaskName("");
        setIcon("BookIcon");
    };

    return (
        <>
            <AddHabitButton onClick={toggleModal} />
            {modalOpen && (
                <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-100">
                    <div
                        className={`${iconModalOpen ? "bg-[#C0AF9F]" : "bg-primary-lighter"} p-8 rounded-default flex flex-col gap-2`}
                    >
                        <h2 className="text-m font-bold colors-black">
                            Create a new habit
                        </h2>
                        <div className="flex gap-4 mt-2">
                            <IconButton
                                variant={icon}
                                onClick={toggleIconModal}
                            />
                            <form
                                className="flex flex-col gap-4"
                                onSubmit={(e: React.FormEvent) => handleSave(e)}
                            >
                                <Input
                                    placeholder="Name your task"
                                    value={taskName}
                                    className="w-full bg-white"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleNameChange(e)}
                                />
                                <div className="flex gap-4 w-full justify-between">
                                    <Button
                                        variant="red"
                                        onClick={toggleModal}
                                        className="w-full"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-full"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {iconModalOpen && (
                <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-100">
                    <div className="bg-accent-lighter p-4 rounded-default flex gap-4">
                        {iconOptions.map((iconOption) => (
                            <IconButton
                                key={iconOption}
                                variant={iconOption}
                                onClick={() => {
                                    handleIconChange(iconOption);
                                    toggleIconModal();
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default NewHabit;
