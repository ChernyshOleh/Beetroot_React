import UserDetails from './UserDetails'
import { User } from '../types';

interface UserListProps {
    users: User[];
    searchText: string;
 }

export default function UserList({users, searchText}: UserListProps){

    return (
        <div className="users">
           {
              users
              .filter(user => user.name.toLowerCase().includes(searchText.toLowerCase().trim()))
              .map(user => <UserDetails user={user} key={user.id} />)}
        </div>
     )
}