import axios from "axios";

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api/community";

class PostingService {
	//게시글 불러오기
	getPosts() {
		return axios.get(COMMUNITY_API_BASE_URL + "/posts");
	}

	//게시글 업로드하기
	createPosts(posting) {
		return axios.post(COMMUNITY_API_BASE_URL + "/posting", posting, {
			headers: {
				//"X-AUTH-TOKEN": token,
				"Content-Type": `multipart/form-data`,
			},
		});
	}
}

export default new PostingService();
