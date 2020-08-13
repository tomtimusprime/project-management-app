import axios from "axios";

export const API = {
  addIssue: async (id, issue) => {
    try {
      const data = await axios.post("/api/user/issues/" + id, issue);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  setProjectStatus: async (id, field, status) => {
    try {
      const data = await axios.post("/api/user/projects/inProgress/" + id, {
        field: field,
        status: status,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  deleteProject: async (id) => {
    try {
      const data = await axios.put("/api/user/projects", { id: id });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  addProject: async (proj) => {
    try {
      const data = await axios.post("/api/user/projects", proj);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  getUser: async () => {
    try {
      const data = await axios.get("/api/user");
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  completeIssue: async (projectId, issueId) => {
    try {
      const data = await axios.put("/api/user/issues/" + projectId, {
        completed: true,
        issueId: issueId,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  deleteCookie: async () => {
    try {
      const data = await axios.get('/cookie')
      return data;
    } catch (error) {
      console.error(error)
    }
  },

};
