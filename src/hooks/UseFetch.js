import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
  
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
           
            setData(data);
        })
        
  }, [url]);

  return { data, setUrl };
};

export default UseFetch;