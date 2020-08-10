import {useEffect, useState} from 'react';
import axios from 'axios';

// Custom hook to fetch user data by email. Requires an email
// as first argument and a default response that will be used as
// the intial state of the response as the second argument.
// Returns the axios data object.
export const useFetch = () => {
  const [data, setData] = useState(null);

  const fetchUserData = async () => {
    try {
      const data = axios.get(`/api/user`);
      return data;
    } catch (error) {
      console.error(error, 'in fetchdata');
    }
  };

  useEffect(() => {
      const userData = fetchUserData();
      setData(userData)
  }, [email]);

  return data;
};