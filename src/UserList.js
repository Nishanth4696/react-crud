import  User  from './User.js';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'
import { useHistory } from 'react-router-dom';


export default function UserList({Users, setUsers}){
  const history = useHistory();
    return(
      <section className="userList">
         {Users.map(({name,userName, batch, avatar}, index) => 
          <User 
            name={name} 
            userName={userName} 
            batch={batch} 
            avatar={avatar}
            
            id={index}
            deleteButton={
              <IconButton 
                onClick={() =>{
                  const deleteIdx = index;
                  const remainingUsers = Users.filter((mv, idx) => idx !== deleteIdx) 
                  console.log("remaining", remainingUsers)
                  setUsers(remainingUsers)
                }} 
                  className="user-show-button"
                  aria-label="delete" 
                  color="error">
                    <DeleteIcon />
                </IconButton>
            }
            editButton={
              <IconButton 
                onClick={() =>{ history.push("/users/edit/" + index)
                 
                }} 
                style={{ marginLeft:"auto" }}
                className="user-show-button"
                  aria-label="delete" 
                  color="primary">
                    <EditIcon />
                </IconButton>
            }
            />)
          }
      </section>
    );
  }
  