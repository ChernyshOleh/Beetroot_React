import { User, Posts } from "../../types";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import React from "react";
import styles from "./UserDetails.module.css";

interface UserProps {
  user: User;
}

export default function UserDetails({ user }: UserProps) {
  const [posts, setPosts] = React.useState<Posts[]>([]);

  async function getPosts() {
    if (posts.length) {
      setPosts([]);
    } else {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );
      let result = await response.json();
      setPosts(result);
    }
  }

  return (
    <>
      <ListItem>
        <ListItemText
          primary={user.name}
          secondary={[
            "Username: ",
            user.username,
            " - ",
            "Email: ",
            user.email,
          ]}
        />
        <Button onClick={getPosts}>Posts</Button>
      </ListItem>
      <ul className={styles.titles}>
        {posts.map((item, index) => (
          <li className={styles.title} key={item.id}>
            {[index + 1, ". ", item.title]}
          </li>
        ))}
      </ul>
    </>
  );
}
