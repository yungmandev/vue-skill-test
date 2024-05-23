import http from "@/http-common";

class RedditDataService {
  getAll() {
    return http.get("/reddits");
  }
}

export default new RedditDataService();
