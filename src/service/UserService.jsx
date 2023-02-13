import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api";

class UserService {
	getProfile(token) {
		return axios.get(
			USER_API_BASE_URL + "/me", //수정 필요
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
