import TaskIcon from './taskIcon'
import CheckButton from '../../checkButton/checkButton'
import IconButton from '../../buttons/iconButton'

type TaskCardProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: "active" | "completed" | "deletable" | "basic";
    taskName?: string;
    reward?: number;
    onCheck?: () => void;
    onDelete?: () => void;
};

const TaskCard = ({ 
    variant = "active", 
    taskName = "Task Name", 
    reward = 10,
    onCheck = () => {},
    onDelete = () => {},
    ...props

    
}: TaskCardProps) => {
    const variants = {
        active: "bg-primary-lighter",
        completed: "bg-gray-light",
        deletable: "bg-primary-lighter", 
        basic: "bg-primary-lighter"
    };

    const renderRightContent = () => {
        switch (variant) {
            case "completed":
                return (
                    <div className="flex flex-col items-center gap-1">
                        <CheckButton isChecked={true} onClick={onCheck} />
                        <span className="text-sm font-medium text-gray-dark">Completed</span>
                    </div>
                );
            case "deletable":
                return <IconButton variant="TrashcanIcon" onClick={onDelete} />;
            case "active":
                return (
                    <div className="flex flex-col items-center gap-1">
                        <CheckButton isChecked={false} onClick={onCheck} />
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-medium">{reward}</span>
                            <IconButton variant="CoinIcon" onClick={() => {}} />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div 
            className={`${variants[variant]} rounded-default p-4 flex items-center  max-w-sm justify-between shadow-task ${variant === "completed" ? "grayscale" : ""}`}
            {...props}
        >
            <div className="flex items-center gap-4">
                <TaskIcon variant="TaskIcon" />
                <h3 className="text-base font-medium text-black">{taskName}</h3>
            </div>
            {renderRightContent()}
        </div>
    );
};

export default TaskCard;