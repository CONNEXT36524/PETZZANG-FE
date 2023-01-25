import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
//이미지 크기 조정을 위한 Image Resize 모듈(quill-image-resize) 적용
import ImageResize from "quill-image-resize";
Quill.register("modules/ImageResize", ImageResize);

class QuillEditor extends Component {
	constructor(props) {
		super(props);
	}

	modules = {
		toolbar: [
			//[{ 'font': [] }],
			[{ header: [1, 2, 3, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link", "image"],
			[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
			["clean"],
		],

		ImageResize: {
			parchment: Quill.import("parchment"),
		},
	};

	formats = [
		//'font',
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"align",
		"color",
		"background",
	];

	render() {
		const { value, onChange } = this.props;
		return (
			<div style={{ height: "650px" }}>
				<ReactQuill
					style={{ height: "600px" }}
					theme="snow"
					modules={this.modules}
					formats={this.formats}
					value={value || ""}
					onChange={(content, delta, source, editor) =>
						onChange(editor.getHTML())
					}
				/>
			</div>
		);
	}
}
export default QuillEditor;
