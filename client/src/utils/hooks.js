import {useEffect, useState} from 'react';
import axios from 'axios';

// Custom hook to fetch user data by email. Requires an email
// as first argument and a default response that will be used as
// the intial state of the response as the second argument.
// Returns the axios data object.
// export const useFetchByEmail = (email, defaultResponse) => {
//   const [data, setData] = useState(defaultResponse);

//   const fetchUserData = async (email) => {
//     try {
//       const data = axios.get(`/api/user/${email}`);
//       return data;
//     } catch (error) {
//       console.error(error, 'in fetchdata');
//     }
//   };

//   useEffect(() => {
//       const userData = fetchUserData(email);
//       setData(userData)
//   }, [email]);

//   return data;
// };