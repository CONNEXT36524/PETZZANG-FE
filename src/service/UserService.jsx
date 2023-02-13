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
	updateProfile(token, formData) {
		// console.log(token)
		// for (let key of formData.keys()) {
        //     console.log(key, ":", formData.get('profileImage'));
        // }
		return axios.post("api/profile", formData, {

			headers: {
				Authorization: token,
			},
		});
	}
}

export default new UserService();
