import axios from "axios";
import useAxios  from 'axios-hooks'

const srv="http://localhost:3001/api/";

 export const useAxios1 = () => {
    const postData = async (url, body) => {
        
        try {
            const res = await axios.post(`${srv}${url}`, body);
           console.log(res);
           return res;
        }
        catch (err) {
            console.log('Error');
        return err;  
            
        }

    }
    const Post = (url, body={}) => {

        const [{ data, loading, error }, refetch]= useAxios(
            {
                url:srv+url,
                method:'post',
                data:body
            }
        );
        if(error)
            console.log(error);
       
        return { data, loading, error, refetch };
      
    };
    
    
    const Get = (url) => {

        const [{ data, loading, error }, refetch]= useAxios(srv+url
            // {
            //     url:url,
            //     method:'get',
            // }
        );
        
        if(error)
            console.log(error);
        return { data, loading, error, refetch };
      
      };
      
      
    const GetData = async (url) => {
        // try {
        //     console.log(url);
        //     const res = await axios.get(`${srv}${url}`);
        //     console.log(res);
        //     return res
        // }
        // catch (err) {
        //     console.error(`error ${err}`);
        // }
        const [{ data, loading, error }, refetch]= useAxios(
            {
                url:srv+url,
                method:'get',
            }
        );
        
        if(error)
            console.log(error);
        else
            console.log(data);
        return { data, loading, error, refetch };
      
    };
    // const getData = async (url, params) => {
    //     try {
    //         console.log(url);
    //         const res = await axios.get(`${srv}${url}/${params}`);
    //         console.log(res);
    //         return res
    //     }
    //     catch (err) {
    //         console.error(`error ${err}`);
    //     }
    // };

    const updateData = async (url, params, body) => {
        try {
            console.log(url);
            const res = await axios.put(`${srv}${url}/${params}`, body);
            console.log(res);
            return res
        }
        catch (err) {
            console.error(`error ${err}`);
        }
    };

    const deleteData = async (url, body) => {
        
        try {
            const res = await axios.delete(`${srv}${url}`,{ data: body });
           
            return res
        }
        catch (err) {
            return err
        }
    };

    return { GetData, postData, updateData, deleteData,Get,Post }
}
// export default {useAxios1 ,getData}