import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error,setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if(!url) return;
    setData(null);
    setError(null);
  
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
           if(data.cod>=400){
             setError(data.message);
             return;
           }
            setData(data);
        })
        .catch((error) => {
            setError(error);
        });
  }, [url]);

  return { data, error,setUrl };
};

export default UseFetch;