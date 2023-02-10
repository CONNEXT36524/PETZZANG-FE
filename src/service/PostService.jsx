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

	updateLikeNum(postId) {
		return axios.post(COMMUNITY_API_BASE_URL + "/likeNum", postId, {
			headers: {
				//"X-AUTH-TOKEN": token,
			},
			params: {
				postId: postId,
			},
		});
	}

	updateView(postId) {
		return axios.post(COMMUNITY_API_BASE_URL + "/view", postId, {
			headers: {
				//"X-AUTH-TOKEN": token,
			},
			params: {
				postId: postId,
			},
		});
	}
}

export default new PostService();
