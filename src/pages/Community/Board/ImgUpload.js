import React, {useState, useEffect} from 'react';
//import {instance, fileInstance} from "../hooks/useAxiosLoader";

import axios from "axios";

function ImgUpload() {
    const [imgBase64, setImgBase64] = useState([]);
    const [imgFile, setImgFile] = useState(null);
    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        readImages();
    }, [])


    const handleChangeFile = (e) => {
        console.log(e.target.files);
        setImgFile(e.target.files);
        console.log(imgFile)
        setImgBase64([]);
        for(let i=0 ; i<e.target.files.length ; i++) {
            if(e.target.files[i]) {
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[i]);
                reader.onloadend = () => {
                    const base64 = reader.result; // 비트맵 데이터 리턴, 이 데이터를 통해 파일 미리보기가 가능함
                    console.log(base64)
                    if(base64) {
                        let base64Sub = base64.toString()
                        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                    }
                }
            }
        }
    }

    const WriteBoard = async () => {
        const fd = new FormData();
        for(let i=0 ; i<imgFile.length ; i++) {
            fd.append("file", imgFile[i]);
        }
        // 안돌아감.
        // Object.values(imgFile).forEach((file) => {
        //     fd.append("file", file as Blob)
        // });

        fd.append(
            "comment",
            "hello world"
        );

        console.log(fd)
        await axios({
            method: 'put',
            url: '/api/profile',
            data: fd
        })
        .then((response) => {
            if(response.data) {
                console.log(response.data)
                readImages();
                setImgFile(null);
                setImgBase64([]);
                alert("업로드 완료!");
            }
        })
        .catch((error) => {
            console.log(error)
            alert("실패!");
        })
    }

    const readImages = async () => {
        await axios({ url: `/api/file/image`})
            .then((response) => {
                console.log('======= 이미지 목록 조회 성공 =======')
                setImgList(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('======= 이미지 목록 조회 실패 =======')
                console.log(error);
            })
    }

    const downloadImage = async (filename) => {
        const url = process.env.REACT_APP_API_URL+"/api/file/image/download?filename="+filename;
        const download = document.createElement('a');

        download.href = url;
        download.setAttribute('download', filename);
        download.setAttribute('type', 'application/json');
        download.click();
    }

    return (
        <div>
            <h2>사진 업로드</h2>
            <input type="file" id="file" onChange={handleChangeFile} multiple/>
            <h3>업로드 한 사진 미리보기</h3>
            {imgBase64.map((item) => {
                return (
                    <img
                        key={item}
                        src={item}
                        alt={"First slide"}
                        style={{width:"200px", height:"150px"}}
                    />
                )
            })}
            <button onClick={WriteBoard} style={{border: '2px solid black'}}>이미지 업로드</button>
            <br/>


            <div>
                <h2>사진 목록</h2>
                {imgList.map((item) => {
                    return (
                        <div key={item.pid}>
                            <img
                                src={process.env.REACT_APP_API_URL+"/images/"+item.filename}
                                alt={"img"+item.pid}
                                style={{width:"200px", height:"150px"}}
                            />
                            <button onClick={() => downloadImage(item.filename)}>다운로드</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ImgUpload;