import API from "./axios/api";

export default class requestProjectApiProvider {
  async readRequestProjects() {
    try {
      const { data } = await API.get("/req-projects");
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async readContributeProjects() {
    try {
      const { data } = await API.get("/req-projects:{request_id}");
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async updateRequestProject() {
    try {
      const { data } = await API.put("/req-projects:{request_id}");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
