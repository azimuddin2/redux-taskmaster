import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();

    return (
        <section className="max-w-screen-lg mx-auto my-12">
            <div className="flex justify-between">
                <h1 className="text-2xl">Tasks</h1>
                <Tabs defaultValue="all" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("all"))}
                            value="all"
                        >
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("low"))}
                            value="low"
                        >
                            Low
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("medium"))}
                            value="medium"
                        >
                            Medium
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter('high'))}
                            value="high"
                        >
                            High
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="my-10">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </section>
    );
};

export default Tasks;