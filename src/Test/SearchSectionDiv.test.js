import React from 'react';
import SearchSectionDiv from "../components/community/SearchSectionDiv";
import { render } from "@testing-library/react";

describe('SearchSectionDiv props 전달 테스트', () => {

    it("props에 daily 전달", () => {
        // 컴포넌트 생성 테스트
        const renderState = render(<SearchSectionDiv boardName="daily"/>);
        expect(renderState).not.toBe(null);
        renderState.getByText("일상 게시판");

    });

    it("props에 boast 전달", () => {
        const renderState = render(<SearchSectionDiv boardName='boast'/>);
        expect(renderState).not.toBe(null);
        renderState.getByText("자랑 게시판");
    });

    it("props에 question 전달", () => {
        const renderState = render(<SearchSectionDiv boardName='question'/>);
        expect(renderState).not.toBe(null);
        renderState.getByText("질문 게시판");
    });

    it("props에 recommendation 전달", () => {
        const renderState = render(<SearchSectionDiv boardName='recommendation'/>);
        expect(renderState).not.toBe(null);
        renderState.getByText("제품 추천 게시판");
    });


    
});