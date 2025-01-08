import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/users/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
    const users = useAppSelector(selectUsers);

    return (
        <section className="max-w-screen-lg mx-auto my-12">
            <div className="flex justify-between">
                <h1 className="text-2xl">Users</h1>
                <AddUserModal></AddUserModal>
            </div>
            <div className="my-10 grid grid-cols-2 gap-5">
                {
                    users.map((user) => (
                        <UserCard user={user} key={user.id} />
                    ))
                }
            </div>
        </section>
    );
};

export default Users;