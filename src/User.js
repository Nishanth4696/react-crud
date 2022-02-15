import { useState } from "react";
import Counter from "./Counter";
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";



export default function User({name,userName,batch, avatar, id, deleteButton, editButton}){
    const [show, setShow] = useState(false);

    const history = useHistory();

    const summarystyles = { display :show ? 'block' : 'none'} 
    return (
      
      <div className="user-container">
        <img 
          src={avatar} 
          alt={name} 
          className="user-poster"/>
        <div className="user-specs">
              <h3 className="user-name">{name}

              <IconButton 
                onClick={() =>{
                  history.push("/users/" + id);
                }} 
                
                  aria-label="delete" 
                  color="primary">
                    <InfoIcon />
                </IconButton>

              <IconButton 
                  onClick ={() => setShow(!show)} 
                  className="user-show-button" 
                  aria-label="delete" 
                  color="primary">
                    {show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
              </IconButton>
                
              </h3>

              
              </div>

       
        
        {/* <p   style={summarystyles} className="user-summary">{summary}</p>   */}

        {show ?<div>
        <h4   style={summarystyles} className="user-batch"> {userName}</h4> 
        <p   style={summarystyles} className="user-batch"> {batch}</p></div> : ""}
        <Counter /> {editButton} {deleteButton}
        
  
      </div>
      
    );
  }

 