import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);

    return (
        <div className="max-w-screen-lg mx-auto my-10">
            {
                tasks.map((task) => (
                    <TaskCard task={task} />
                ))
            }
        </div>
    );
};

export default Tasks;