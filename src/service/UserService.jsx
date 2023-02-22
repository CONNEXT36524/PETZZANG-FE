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
	updateProfile(formData, token) {
		return axios.post("/api/updateProfile", formData, {
			headers: {
				"Content-Type": `multipart/form-data`,
				Authorization: token,
			},
		});
	}
	updateImg (formData, token) {
		return axios.post("/api/updateImg", formData, {
			headers: {
				"Content-Type": `multipart/form-data`,
				Authorization: token,
			},
		});
	}
	updateNickname (name, token) {
		return axios.post("/api/updateNickname", {name : name}, {
			headers: {
				Authorization: token,
			},
		});
	}

}

export default new UserService();
