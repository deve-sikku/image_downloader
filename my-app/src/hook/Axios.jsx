import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const Axios = (param) => {
  const [response , setresponse] = useState([]);
  const [loding , setloding] = useState(false);
  const [error , setrEorre] = useState('');

  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchdata = async(url)=>{
    try {
        setloding(true)
        const res = await axios(url);
        setresponse(res.data.results);
    } catch (err){
        setrEorre(err)
    } finally {
        setloding(false)
    }
  }

  useEffect(() => {
      fetchdata(param) 
  }, [param])

  return {
    response,
    loding,
    error,
    fetchdata: url => fetchdata(url)
  }
}

export default Axios
