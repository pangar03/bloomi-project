import TaskIcon from './taskIcon'
import CheckButton from '../../checkButton/checkButton'
import IconButton from '../../buttons/iconButton'
import Icon from '../../Icon/Icon'

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
    const getCardStyle = () => {
        if (variant === "completed") return "bg-gray-light grayscale";
        return "bg-primary-lighter";
    };

    return (
        <div 
            className={`${getCardStyle()} rounded-default p-4 flex items-center max-w-sm justify-between shadow-task`}
            {...props}
        >
            <div className="flex items-center gap-4">
                <TaskIcon variant="TaskIcon" />
                <h3 className="text-base font-medium text-black">{taskName}</h3>
            </div>
            
            <div className="flex flex-col items-center gap-1">
                {variant === "completed" ? (
                    <>
                        <CheckButton isChecked={true} onClick={onCheck} />
                        <span className="text-sm font-medium text-gray-dark">Completed</span>
                    </>
                ) : variant === "deletable" ? (
                    <IconButton variant="TrashcanIcon" onClick={onDelete} />
                ) : variant === "active" ? (
                    <>
                        <CheckButton isChecked={false} onClick={onCheck} />
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-medium">{reward}</span>
                            <Icon variant="CoinIcon" className="w-4 h-4" />
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default TaskCard;