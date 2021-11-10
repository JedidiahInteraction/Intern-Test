import axios from 'axios';


export const getUsers = async () => {
   return await axios.get('getNames')
     
}

export const updateUsers = async () => {
   return await axios.put('updateName')
     
}

