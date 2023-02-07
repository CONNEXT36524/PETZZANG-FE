import axios from "axios";

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api/community";

class PostService {
	//게시글 불러오기
	getPosts(postId) {
		return axios.get(COMMUNITY_API_BASE_URL + "/posts", {
			params: {
				postId: postId,
			},
		});
	}
}

export default new PostService();
