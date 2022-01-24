import UserDetails from "./userDetailsComponent/UserDetails";
import { User } from "../types";
import List from "@mui/material/List";

interface UserListProps {
  users: User[];
  searchText: string;
}

export default function UserList({ users, searchText }: UserListProps) {
  return (
    <List sx={{ width: "50%", margin: "0 auto" }}>
      <h1>Userlist: </h1>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(searchText.toLowerCase().trim())
        )
        .map((user) => (
          <UserDetails user={user} key={user.id} />
        ))}
    </List>
  );
}
