import {Container, CssBaseline, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from "react";
import * as UserService from '../UserService';
import  {User} from "../User";
import UserItem from "../UserItem";


const App = ()=> {

    const [users, setUsers] = useState<User[]>([])
    const [count, setCount] = useState(0);

    

    const loadUsers = async () => {
        const res = await UserService.getUsers();
        setUsers(res.data);
        console.log(res.data);
    }



    useEffect(() => {

        const timer = setInterval(() => {
           loadUsers();
          }, 5000);
        
         return () => clearInterval(timer);

    },[])

  return (<>
    <CssBaseline />
    <Box bgcolor="#E3F2F0" minHeight="100vh" p={4}>
      <Container maxWidth="xs">
        <Paper>
          <Box p={4} alignItems="center">
              <Typography  mb={2} align="center" variant="h5" fontWeight="600"> PEOPLE TO CLICK </Typography>
                {users.map((item) => {
                    return <UserItem user={item} 
                    key={item.name}
                    />
             
            })}
          </Box>
        </Paper>
      </Container>
    </Box>
  </>);
}

export default App;