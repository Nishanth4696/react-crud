import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';


export function EditUser({Users, setUsers }) {
  const { id } = useParams();
  const history = useHistory();
  const user = Users[id];
  const [name, setName] = useState(user.name);
  const [userName, setUserName] = useState(user.userName);
  const [batch, setBatch] = useState(user.batch);
  const [avatar, setAvatar] = useState(user.avatar);




  const editUser = () => {

    console.log("Edited...");
    const updateUser = {
      name,
      userName,
       batch,
      avatar,
     
    };

    const copy_userlist = [...Users];
    copy_userlist[id] = updateUser;
    setUsers(copy_userlist);
    history.push("/users");
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

     

      <Button onClick={editUser} variant="outlined">Save</Button>

    </div>

  );
}
