import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {

    const dispatch = useAppDispatch();

    const handleToggleCompleteState = (id: string) => {
        dispatch(toggleCompleteState(id));
    };

    const handleDeleteTask = (id: string) => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="border px-5 py-3 rounded-md mb-5">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority === "high",
                        "bg-orange-500": task.priority === "medium",
                        "bg-red-500": task.priority === "low",
                    })}></div>
                    <h1 className={cn({"line-through": task.isCompleted})}>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button
                        onClick={() => handleDeleteTask(task.id)}
                        variant={'link'}
                        className="p-0 text-red-500"
                    >
                        <Trash2 size={20} />
                    </Button>
                    <Checkbox
                        checked={task.isCompleted}
                        onClick={() => handleToggleCompleteState(task.id)}
                    />
                </div>
            </div>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;