import './App.css';
import { useState } from 'react';

import UserList from './UserList';
import { Welcome } from './Welcome';
import { AddUser } from './AddUser';
import {NotFound} from './NotFound'
import { Switch, Route, Link } from "react-router-dom";
import { UserDetails } from './UserDetails';
import { EditUser } from './EditUser';




export default function App() {
  const List_of_Users=[
    {
      "createdAt": "2022-02-03T06:28:05.613Z",
      "name": "Laverne Hettinger",
      "userName": "Laverne56",       
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8i1P2aj7F_xRhMU7Pk90vpLzJoXfxgaYKg&usqp=CAU",
      "id": "1",
      "fork": 0,
      "star": 1,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     },
     {
      "createdAt": "2022-02-03T07:12:06.712Z",
      "name": "Marilyn Jakubowski",
      "userName": "Marilyn46",
      "avatar": "data:image/jpeg;base64,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",
      "id": "2",
      "fork": 1,
      "star": 0,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     },
     {
      "createdAt": "2022-02-03T05:35:23.616Z",
      "name": "Mr. Tracy Schmeler",
      "userName": "Tracy11",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwsoA10WcFMyHkyWsADrzhBEYeIo5ZuN5pQ&usqp=CAU",
      "id": "3",
      "fork": 0,
      "star": 1,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     },
     {
      "createdAt": "2022-02-03T01:34:18.864Z",
      "name": "Julius Dickens",
      "userName": "Julius55",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXUA8i_XkolHaG72wChky5ycJP1xBBQ4gPA&usqp=CAU",
      "id": "4",
      "fork": 1,
      "star": 0,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     },
     {
      "createdAt": "2022-02-02T13:41:08.633Z",
      "name": "Mandy Stanton",
      "userName": "Mandy475",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZCTcq2ZiAj6s-2S171-urH_35RBx-rRDUA&usqp=CAU",
      "id": "5",
      "fork": 0,
      "star": 1,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     },
     {
      "createdAt": "2022-02-03T07:06:10.145Z",
      "name": "Brandy Herzog",
      "userName": "Brandy5897",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4gZGp6eGFTUXlDvYXoi837M4b_vsvWJtmg&usqp=CAU",
      "id": "6",
      "fork": 1,
      "star": 0,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     },
     {
      "createdAt": "2022-02-03T02:57:20.951Z",
      "name": "Armando Smith DVM",
      "userName": "Armando444",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyE3kntxudeS0YH751vL31rbDehpO53V79kg&usqp=CAU",
      "id": "7",
      "fork": 0,
      "star": 1,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     },
     {
      "createdAt": "2022-02-03T11:16:09.176Z",
      "name": "Milton Johnston",
      "userName": "Milton2020",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOyPqZMkRTUHuDaLkHnHTaLni0r7ELyHCZg&usqp=CAU",
      "id": "8",
      "fork": 1,
      "star": 0,
      "batch": "B28WD",
      "repo1": "Node Task",
      "repo2": "Python",
      "repo3": "React",
      "repo4": "Zen",
      "repo5": "Resume"
     }
    

  ];

  const [users, setUsers] = useState(List_of_Users);
  return (
    <div className="App">
      <nav>
        <Link to="/home" style={{textDecoration:"none"}}>Home</Link>
        <Link to="/users" style={{textDecoration:"none"}}>Users</Link>
        <Link to="/create-user" style={{textDecoration:"none"}}>Add Users</Link>
        
      </nav>
      <Switch>
        <Route path="/users/edit/:id">
          <EditUser Users={users} setUsers={setUsers}/>
        </Route>

        <Route path="/users/:id">
          <UserDetails Users={users}/>
        </Route>

       

        <Route path="/users">
          <UserList Users={users} setUsers={setUsers}/> 
        </Route>

        <Route path="/create-user">
            <AddUser Users={users} setUsers={setUsers}/>
        </Route>

      

        <Route path="/">
            <Welcome />
        </Route>

        <Route path="**">
          <NotFound />
        </Route>
      </Switch>      
    </div>
  );
}


