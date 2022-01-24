import React from "react";
import "./App.css";
import Search from "./components/searchComponent/Search";
import UserList from "./components/UserList";
import { User } from "./types";

function App() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [searchText, setText] = React.useState("");
  let [isFetching, setIsFetching] = React.useState(true);

  React.useEffect(() => {
    async function getUsers() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let result = await response.json();
      setUsers(result);
      setIsFetching(false);
    }
    getUsers();
  }, []);

  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Search value={searchText} checkChange={(value) => setText(value)} />
          <UserList users={users} searchText={searchText} />
        </div>
      )}
    </>
  );
}

export default App;
