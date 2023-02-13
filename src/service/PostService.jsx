import axios from "axios";

const COMMUNITY_API_BASE_URL = '/api/community';

class PostService {
	//게시글 불러오기
	getPosts(postId) {
		return axios.get(COMMUNITY_API_BASE_URL+"/posts", {
			params: {
				postId: postId,
			},
		});
	}

	//글 삭제
	deletePosts(postId) {
		return axios.delete(COMMUNITY_API_BASE_URL+"/posts", {
			params: {
				postId: postId,
			},
		});
	}

	plusLikeNum(postId) {
		return axios.post(COMMUNITY_API_BASE_URL+"/pluslikeNum", postId, {
			headers: {
				//"X-AUTH-TOKEN": token,
			},
			params: {
				postId: postId,
			},
		});
	}

	minusLikeNum(postId) {
		return axios.post(COMMUNITY_API_BASE_URL+"/minuslikeNum", postId, {
			headers: {
				//"X-AUTH-TOKEN": token,
			},
			params: {
				postId: postId,
			},
		});
	}

	updateView(postId) {
		return axios.post(COMMUNITY_API_BASE_URL+"/view", postId, {
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
