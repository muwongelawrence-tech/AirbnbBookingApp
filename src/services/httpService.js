
import  axios from "axios";

import toast from 'react-hot-toast';

axios.interceptors.response.use(null, error => {
    
    const ExpectedError = error.response && error.response.status >= 400 && error.response.status <=500;

    if(!ExpectedError){
        console.log("Logging the Error", error );
       // alert("An unexpected error occurred");
        toast.error("An unexpected error occurred");
        
    }
    
    return Promise.reject(error);
});


export default {
    get: axios.get,
    post : axios.post,
    put : axios.put,
    delete : axios.delete,
    patch : axios.patch,
};

