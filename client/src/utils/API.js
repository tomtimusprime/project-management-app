import axios from "axios";

export const API = {
  addIssue: async (id, issue) => {
    const data = await axios.post("/api/user/issues" + id, issue);
    return data;
  },
  setProjectStatus: async (id, field, status) => {
    const data = await axios.put("/api/user/projects/inProgress/" + id, {field: field, status: status});
    return data;
  },
};
