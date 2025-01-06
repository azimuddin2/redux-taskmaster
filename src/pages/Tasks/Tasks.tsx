import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);

    return (
        <section className="max-w-screen-lg mx-auto my-10">
            <div className="flex justify-between">
                <h1>Tasks</h1>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="my-8">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} key={task.id}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Tasks;