import React, { useState, useRef } from "react";
import "./Posts.css";
import "../../../components/form/select/PostingSelection.css";
import { Form, Button, Container } from "react-bootstrap";
import MiddleNav from "../../../components/navbar/MNB/MiddleNav";
import Editor from "../../../components/editor/QuillEditor";
import PostingBanner from "../../../components/banner/PostingBanner";
import SavePostingModal from "../../../components/modal/SavePostingModal";
import PostingService from "../../../service/PostingService";

function Posting(props) {
	//Posting Inputs
	const [inputs, setInputs] = useState({
		titleName: "",
		boardType: "",
		pet: "",
		kind: "",
		sex: "",
		thumbnail: "",
	});

	// 비구조화 할당을 통해 값 추출
	const { titleName, boardType, pet, kind, sex, thumbnail } = inputs;

	const onChange = (e) => {
		const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
		setInputs({
			...inputs, // 기존의 input 객체를 전개 구문으로 펼쳐서 복사한 뒤
			[name]: value, // name 키를 가진 값을 value 로 설정 (이때 [name]은 계산된 속성명 구문 사용),
		});
	};

	//File Input
	const [imgFile, setImgFile] = useState("");
	const imgRef = useRef();

	// 이미지 업로드 input의 onChange
	const showImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	//Editor
	const [desc, setDesc] = useState("");
	function onEditorChange(value) {
		setDesc(value);
		//여기서 desc는 description
	}

	const data = new FormData();
	data.append("key", inputs);
	//input 데이터 확인용 함수
	function setContentsShow() {
		console.log(desc);
		//console.log(inputs.thumbnail);
	}

	//Modal
	const [modalShow, setModalShow] = React.useState(false);

	//Posting Upload State
	const [uploadedState, setUploadedState] =
		useState("업로드를 하시겠습니까?");

	//axios로 input 데이터 보내기
	async function onUpload() {
		PostingService.createPosts(inputs)
			.then(function (response) {
				console.log(response.data);
				// response
				//useState 업데이트 완료 상태로 바꿔주는 코드 작성하기!
				setUploadedState("업로드가 안료되었습니다.");
			})
			.catch(function (error) {
				// 오류발생시 실행
				setUploadedState(
					"업로드 중 오류가 발생했습니다.\n다시 시도해주세요."
				);
			})
			.then(function () {
				// 항상 실행
			});
	}
	//Posting Type Options
	const BoardOptions = [
		{ key: "daily", value: "🖼 일상 게시판" },
		{ key: "boast", value: "👏 자랑 게시판 " },
		{ key: "question", value: "🙋 질문 게시판" },
		{ key: "recommendation", value: "🎁 제품 추천 게시판" },
	];

	const PetSpeciesOptions = [
		{ key: 1, value: "강아지" },
		{ key: 2, value: "고양이" },
		{ key: 3, value: "관상어" },
		{ key: 4, value: "햄스터" },
		{ key: 5, value: "토끼" },
		{ key: 6, value: "새" },
		{ key: 7, value: "거북이" },
		{ key: 8, value: "기타" },
	];

	let PetKindOptions = [];

	if (pet.length === 3) {
		// 강아지가 클릭되었을때
		if (pet.includes("강아지")) {
			PetKindOptions = [
				{ key: 1, value: "시츄" },
				{ key: 2, value: "말티즈" },
				{ key: 3, value: "시바견" },
				{ key: 4, value: "비숑" },
				{ key: 5, value: "포메라니안" },
				{ key: 6, value: "그레이하운드" },
				{ key: 7, value: "푸들" },
				{ key: 8, value: "보더콜리" },
				{ key: 9, value: "웰시코기" },
				{ key: 10, value: "리트리버" },
				{ key: 11, value: "진돗개" },
				{ key: 12, value: "귀한 종" },
				{ key: 13, value: "이외 견종" },
			];
		}

		// 고양이가 클릭되었을때
		else if (pet.includes("고양이")) {
			PetKindOptions = [
				{ key: 1, value: "러시안 블루" },
				{ key: 2, value: "먼치킨" },
				{ key: 3, value: "터키시 앙고라" },
				{ key: 4, value: "엑조틱" },
				{ key: 5, value: "메인쿤" },
				{ key: 6, value: "스핑크스" },
				{ key: 7, value: "랙돌" },
				{ key: 8, value: "코리안 숏헤어" },
				{ key: 9, value: "아메리칸 숏헤어" },
				{ key: 10, value: "브리티시 숏헤어" },
				{ key: 11, value: "페르시안" },
				{ key: 12, value: "귀한 종" },
				{ key: 13, value: "이외 묘종" },
			];
		}
	}

	const PetSexOptions = [
		{ key: 1, value: "수컷" },
		{ key: 2, value: "암컷" },
	];
	//MNB 정보
	//const location = useLocation();

	return (
		<div>
			<PostingBanner />

			<MiddleNav contents={"HOME>커뮤니티>게시글 작성"} />

			<Container className="posting">
				<br />
				<div className="containerHeader">
					<Form.Group className="mb-3">
						<Form.Label className="formLabel">제목</Form.Label>
						<Form.Control
							type="text"
							size="lg"
							placeholder="제목을 입력하세요"
							name="titleName"
							onChange={onChange}
							value={titleName || ""}
						/>
					</Form.Group>
					<br />
					<Form.Group className="mb-3" id="FileInputForm">
						<div>
							<img
								// require()를 통해 이미지 불러오긴
								src={
									imgFile
										? imgFile
										: require("../../../assets/noImage.png")
								}
								alt="프로필 이미지"
								className="thumbnailImg"
							/>
						</div>
						<div>
							<Form.Label className="formLabel">
								썸네일 사진 첨부
							</Form.Label>

							<Form.Control
								name="thumnail"
								type="file"
								accept="image/*"
								id="thumbnailImg"
								onChange={showImgFile}
								ref={imgRef}
							/>
						</div>
					</Form.Group>
					<br />
					<Form.Select
						name="boardType"
						className="selectBoardType"
						aria-label="Board Type Selection"
						onChange={onChange}
						value={boardType}
						required
					>
						<option>커뮤니티 게시판</option>
						{BoardOptions.map((item, index) => (
							<option key={item.key} value={item.key}>
								{item.value}
							</option>
						))}
					</Form.Select>
					<div className="selectPostingType">
						<Form.Select
							name="pet"
							id="selection1"
							className="selection"
							aria-label="Pet Species"
							onChange={onChange}
							value={pet}
							required
						>
							<option>동물</option>
							{PetSpeciesOptions.map((item, index) => (
								<option key={item.key} value={item.value}>
									{item.value || ""}
								</option>
							))}
						</Form.Select>

						<Form.Select
							name="kind"
							id="selection2"
							className="selection"
							aria-label="Pet Kind"
							onChange={onChange}
							value={kind}
						>
							<option>종</option>
							{PetKindOptions.map((item, index) => (
								<option key={item.key} value={item.value}>
									{item.value}
								</option>
							))}
						</Form.Select>

						<Form.Select
							name="sex"
							id="selection3"
							className="selection"
							aria-label="Pet Sex"
							onChange={onChange}
							value={sex}
						>
							<option>성별</option>
							{PetSexOptions.map((item, index) => (
								<option key={item.key} value={item.value}>
									{item.value}
								</option>
							))}
						</Form.Select>
					</div>
					<br />
				</div>
				<br />
				<div>
					<Button variant="warning" onClick={() => setContentsShow()}>
						check contents
					</Button>

					<Editor
						id="textEditor"
						value={desc}
						onChange={onEditorChange}
					/>
				</div>
				<br />
				<div className="containerFooter">
					<Button
						className="postingBtn"
						variant="primary"
						onClick={() => setModalShow(true)}
					>
						✏️ 작성하기
					</Button>

					<SavePostingModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						//업로드 함수 구현하기
						onUpload={() => onUpload()}
						//setModalShow를 axios 관련 쪽으로 넘기기
						uploadedState={uploadedState}
					/>
				</div>
			</Container>
		</div>
	);
}

export default Posting;