import http from "../http-common";

class TodoDataService {
  getAll() {
    return http.get("/todos");
  }

  get(id) {
    return http.get(`/todos/${id}`);
  }

  create(data) {
    return http.post("/todos", data);
  }

  update(id, data) {
    return http.put(`/todos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/todos/${id}`);
  }

  deleteAll() {
    return http.delete(`/todos`);
  }

  //Add function to ruby on rails back end later
  // findByCompleted(completed) {
  //   return http.get(`/todos?completed=${completed}`);
  // }
}

export default new TodoDataService();