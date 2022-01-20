import { User } from "../types";

interface UserProps {
    user: User;
 }

export default function UserDetails({user}: UserProps){
    return(
           <div style={{marginBottom: "10px"}}>
                <strong>Name: </strong>{user.name} <br></br>
                <strong>Username: </strong>{user.username} <br></br>
                <strong>Email: </strong>{user.email}
            </div>
        )
}