import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoLogin = () => {
	// get auth code from kakao server
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		// pass auth code to backend server
		// get JWT token from backend server
		//현재 윈도우 창의 주소값 불러옴
		const href = window.location.href;
		//현재 url의 파라미터를 가져옴
		let params = new URL(window.location.href).searchParams;
		//params에 저장된 파라미터 안에서 'code'의 값을 가져옴
		let code = params.get("code");

		(async () => {
			try {
				const res = await axios
					.get("/api/kakao?code", {
						params: {
							code: code,
						},
					})
					// response from backend server
					.then((response) => {
						console.log("ok response", response);
						const token = response.headers.authorization;

						console.log(token);
						// store token in local storage
						window.sessionStorage.setItem("token", token);

						navigate("/");
					})
					.catch(function (e) {
						console.log(e);
						navigate("/");
					});
				// console.log(res);
			} catch (e) {
				// response fail error message
				console.log(e);
				navigate("/");
			}

			// get token from local storage
			const token = window.sessionStorage.getItem("token");
			console.log(token);
			// pass token to backend
			try {
				const res = await axios
					.get(
						// 백엔드에서 설정한 주소
						"/api/me", //수정 필요
						{
							headers: {
								Authorization: token,
							},
						}
					)
					.then((response) => {
						window.sessionStorage.setItem(
							"userCode",
							response.data.kakaoid
						);
						window.sessionStorage.setItem(
							"userName",
							response.data.kakaonickname
						);
						window.sessionStorage.setItem(
							"userImg",
							response.data.kakaoprofileimg
						);
						console.log(response);
					});
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return <></>;
};
export default KakaoLogin;
