import { Button, createStyles, Divider, Grid, makeStyles, Theme } from '@mui/material'
import { width } from '@mui/system';
import React, { useState } from 'react'
import { User } from './User'
import * as UserService from './UserService';

interface userProps {
    user : User
    
}

const updateUsers = async () => {
    const res = await UserService.updateUsers();
    
}



const UserItem = ({user}: userProps) => {

    const [count, setCount] = useState(0);


const onCount = () => {
    setCount(count + 1);
    updateUsers();

}

    console.log(user,count)
    return (
        <Grid container spacing={2} alignContent="center">
            <Grid item padding={2} xs={12}>
                    <Button size="large" 
                    style={{
                        borderRadius: 4,
                        backgroundColor: "#E3F2F0",
                        padding: "4px 4px",
                        fontSize: "18px",
                        alignContent: "center",
                        width:"100%",  
                        color: "black"  
                    }}
                    onClick={() =>
                        onCount()
                      }
                    
                    variant="contained">
                    <p color="#fffff"> {user}</p>  
                    
                    </Button>
                

            </Grid>
            
            <Divider />
            
        </Grid>
    )
}

export default UserItem;