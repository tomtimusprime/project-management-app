import axios from "axios";

export const API = {
  addIssue: async (id, issue) => {
    const data = await axios.post("/api/user/issues" + id, issue);
    return data;
  },
  setProjectStatus: async (id, field, status) => {
    const data = await axios.post("/api/user/projects/inProgress/" + id, {field: field, status: status});
    return data;
  },
  deleteProject: async id => {
    const data = await axios.delete('')
  }
};
