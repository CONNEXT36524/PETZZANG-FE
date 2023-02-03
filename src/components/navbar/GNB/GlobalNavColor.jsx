import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changepagetype } from "../../../Slice/Navslice";
function GlobalNavColor(pageType) {
	// 상단 navbar 색깔 바꾸기
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changepagetype(pageType));
	}, [dispatch]);
}

export default GlobalNavColor;
