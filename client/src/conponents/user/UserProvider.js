import { useState, useEffect } from "react";
import UserContext from './UserContext';
//import { getUser } from '../../services/user';

const UserProvider = ({ children, userId_ }) => {

    const [userId, setUserId] = useState({});

    useEffect(() => {
        if(userId_){
           
            setUserId(userId_);
        }
    }, [userId_]);

    return (
        <UserContext.Provider value={{userId, setUserId}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;