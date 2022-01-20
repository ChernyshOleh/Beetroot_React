import React from 'react';
import './App.css';
import Search from './components/Search';
import UserList from './components/UserList';
import { User } from './types';

function App() {
  const[users, setUsers] = React.useState<User[]>([]);
  const[searchText, setText] = React.useState('');

  React.useEffect(() => {
    async function fetchData(){
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let result = await response.json();
      setUsers(result);
    }
    fetchData();
  });
  
  return(
      <div>
          <Search value ={searchText} checkChange={value => setText(value)}/>
          <UserList users={users} searchText={searchText}/>
      </div>
  )
}

export default App;
