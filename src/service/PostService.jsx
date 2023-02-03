import axios from "axios";

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api/community";

class PostService {
	//게시글 불러오기
	getPosts(postId) {
		return axios
			.get(COMMUNITY_API_BASE_URL + "/posts", {
				params: {
					postId: postId,
				},
			})
			.then(function (response) {
				// 성공 핸들링
				console.log(response);
			})
			.catch(function (error) {
				// 에러 핸들링
				console.log(error);
			})
			.then(function () {
				// 항상 실행되는 영역
			});
	}
}

export default new PostService();
