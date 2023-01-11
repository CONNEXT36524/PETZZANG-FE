import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home=()=>{
    const [hello, sethello] = useState('')

    useEffect(()=> {
        axios.get('/api/hello')
        .then(response => sethello(response.data))
        .catch(error=> console.log(error))
    }, []);

    return(
        <div>
            연동성공 ? : {hello}
        </div>
        

    );

}
export default Home;