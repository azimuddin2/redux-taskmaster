import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {
    return (
        <div className="border px-5 py-3 rounded-md mb-5">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority === "High",
                        "bg-orange-500": task.priority === "Medium",
                        "bg-red-500": task.priority === "Low",
                    })}></div>
                    <h1>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant={'link'} className="p-0 text-red-500">
                        <Trash2 size={20} />
                    </Button>
                    <Checkbox />
                </div>
            </div>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;