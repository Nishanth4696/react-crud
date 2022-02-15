import { useHistory, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 export function UserDetails({ Users }) {
  const { id  } = useParams();
  const history = useHistory();
  const user = Users[id];
 
  return (
    <section>
    <div>
      <Button onClick={() => history.goBack()} variant="outlined" startIcon={<ArrowBackIcon />}> Back </Button>
      
      </div>
    
    <div className="user-detail-container">
      
      
      
      
      <img 
          src={user.avatar} 
          alt={user.name} 
          className="user-poster"/>
      
        <div className="user-specs">
        <h3 className="user-name">{user.name}</h3> 


        
        
        </div>
        <h4 className="user-specs">{user.userName}</h4>

       

   <p className="user-summary">{user.batch}</p> 
   
   
          <li ><Link href="#" underline="none">{user.repo1}</Link></li>
          <li><Link href="#" underline="none">{user.repo2}</Link></li>
          <li><Link href="#" underline="none">{user.repo3}</Link></li>
          <li><Link href="#" underline="none">{user.repo4}</Link></li>
          <li><Link href="#" underline="none">{user.repo5}</Link></li>
        
    

  </div>
  </section>
  );
}
