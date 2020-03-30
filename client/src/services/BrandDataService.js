import http from "../http-common";

class BrandDataService {
  getAll() {
    return http.get("/brands");
  }

  get(id) {
    return http.get(`/brands/${id}`);
  }

  create(data) {
    return http.post("/brands", data);
  }

  update(id, data) {
    return http.put(`/brands/${id}`, data);
  }

  delete(id) {
    return http.delete(`/brands/${id}`);
  }

  deleteAll() {
    return http.delete(`/brands`);
  }

  findByName(name) {
    return http.get(`/brands?title=${name}`);
  }
}

export default new BrandDataService();