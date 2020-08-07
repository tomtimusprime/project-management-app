import axios from 'axios';

export const API = {
  getOneProject: async () => {
    const data = await axios.get('/api/projects/latest');
    return data;
  },
  getAllProjects: async () => {
    const data = await axios.get('/api/projects');
    return data;
  },
  updateProject: async id => {
    const data = await axios.post('/api/projects/' + id);
    return data;
  },
  deleteOne: async id => {
    const data = await axios.delete('/api/projects/' + id);
    return data;
  },
}