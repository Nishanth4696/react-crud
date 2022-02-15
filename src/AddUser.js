import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function AddUser({ Users, setUsers }) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [batch, setBatch] = useState("");
  const [avatar, setAvatar] = useState("");
  

  const history = useHistory();



  const addUser = () => {

    console.log("adding");
    const newUser = {
      name,
      userName,
       batch,
      avatar,
      
    };
    console.log(newUser);
    setUsers([...Users, newUser]);
    history.push("/users")

  };
  return (

    <div className='add-user-form'>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label='Enter the name'
        id="standard-basic"
        variant="standard" />

      <TextField
        className='add-user-input'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        label='Enter the username'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={batch}
        onChange={(event) => setBatch(event.target.value)}
        label='Enter the batch'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={avatar}
        onChange={(event) => setAvatar(event.target.value)}
        label='Enter the avatar'
        id="standard-basic"
        variant="standard" />



      <Button onClick={addUser} variant="outlined">AddUser</Button>

    </div>

  );
}
