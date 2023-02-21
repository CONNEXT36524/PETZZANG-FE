import axios from "axios";


class UserService {
	getProfile(token) {
		return axios.get("/api/me", //수정 필요
			{
				headers: {
					Authorization: token,
				},
			}
		);
	}
	updateProfile(formData) {
		return axios.post("/api/profile", formData, {
			headers: {
				"Content-Type": `multipart/form-data`,
			},
		});
	}
}

export default new UserService();
