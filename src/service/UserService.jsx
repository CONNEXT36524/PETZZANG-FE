import axios from "axios";

const COMMUNITY_API_BASE_URL = '/api/community';

class UserService {
	getProfile(token) {
		return axios.get(
			COMMUNITY_API_BASE_URL+"/me", //수정 필요
			{
				headers: {
					Authorization: token,
				},
			}
		);
	}

	updateProfile(token, data) {
		console.log(token)
		return axios.post(COMMUNITY_API_BASE_URL+"/profile", data, {
			headers: {
				Authorization: token,
			},
		});
	}
}

export default new UserService();
