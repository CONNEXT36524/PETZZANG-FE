import axios from "axios";

const COMMUNITY_API_BASE_URL = "/api/community";

class PostingService {
	//게시글 불러오기
	getPosts() {
		return axios.get("/api/community/posts");
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

	uploadThumbnail(img) {
		return axios.post(COMMUNITY_API_BASE_URL + "/image", img, {
			headers: {
				"Content-Type": `multipart/form-data; `,
			},
		});
	}

	// uploadThumbnail(img) {
	// 	return axios.put(COMMUNITY_API_BASE_URL + "/image", img, {
	// 		headers: {
	// 			"X-AUTH-TOKEN": token,
	// 			"Content-Type": `multipart/form-data`,
	// 		},
	// 	});
	// }
}

export default new PostingService();
