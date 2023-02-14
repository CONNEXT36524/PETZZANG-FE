import axios from "axios";

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api/community";
const token =
	"gAAAAABj5fHxBhZ-39uXunxm_77tDYNf7nS1gDGbp9Bo-SU41wUi-UsEHpjC997jmYxnAkx9PytaQRBcIlkho9WoPYSykwHi7F0_laOwbQLuCjK7iQd2kZqWiRFiifrBw1EBJzwa1K1W0wzluPUrbIB7BtRxrUy79xlxx0q3b17SQ-Q8_NV9B4bPN9exMcRjX9qv-Sw41fwT";
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

	uploadThumbnail(img) {
		return axios.put(COMMUNITY_API_BASE_URL + "/image", img, {
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
