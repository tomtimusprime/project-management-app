import axios from "axios";

export const API = {
  addIssue: async (id, issue) => {
    const data = await axios.post("/api/user/issues/" + id, issue);
    return data;
  },
  setProjectStatus: async (id, field, status) => {
    const data = await axios.post("/api/user/projects/inProgress/" + id, {
      field: field,
      status: status,
    });
    return data;
  },
  deleteProject: async (id) => {
    const data = await axios.put("/api/user/projects", { id: id });
    return data;
  },
  addProject: async (proj) => {
    const data = await axios.post("/api/user/projects", proj);
    return data;
  },
  getUser: async () => {
    const data = await axios.get("/api/user");
    return data;
  },
  completeIssue: async (projectId, issueId) => {
    const data = await axios.put("/api/user/issues/" + projectId, {
      completed: true,
      issueId: issueId,
    });
    return data;
  },
};
