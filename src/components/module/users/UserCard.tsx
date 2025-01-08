import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    user: IUser;
}

const UserCard = ({ user }: IProps) => {
    return (
        <div className="border px-5 py-3 rounded-md mb-5">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-green-500"></div>
                    <h1>{user.name}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button
                        // onClick={() => handleDeleteTask(task.id)}
                        variant={'link'}
                        className="p-0 text-red-500"
                    >
                        <Trash2 size={20} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;