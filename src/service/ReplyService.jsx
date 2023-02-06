import axios from "axios";

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api/community";

class ReplyService {
	//댓글 불러오기
	getReplies(postId) {
		return axios.get(COMMUNITY_API_BASE_URL + "/get-replies", {
			params: {
				postId: postId,
			},
		});
	}

	//대댓글 불러오기
	getNreplies(bundleId) {
		return axios.get(COMMUNITY_API_BASE_URL + "/get-nreplies", {
			params: {
				bundleId: bundleId,
			},
		});
	}

	//댓글 작성하기
	createReplies(reply) {
		return axios.post(COMMUNITY_API_BASE_URL + "/post-replies", reply, {
			headers: {
				//"X-AUTH-TOKEN": token,
				"Content-Type": `multipart/form-data`,
			},
		});
	}

	//대댓글 작성하기
	createNReplies(nreply) {
		return axios.post(COMMUNITY_API_BASE_URL + "/post-nreplies", nreply, {
			headers: {
				//"X-AUTH-TOKEN": token,
				"Content-Type": `multipart/form-data`,
			},
		});
	}
}

export default new ReplyService();
