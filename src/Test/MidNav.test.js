import React from 'react';
import MiddleNav from "../components/navbar/MNB/MiddleNav";
import { render } from "@testing-library/react";

describe('MiddleNav props 전달 테스트', () => {

    it("props에 daily 전달", () => {
        // 컴포넌트 생성 테스트
        const renderState = render(<MiddleNav contents={"HOME>커뮤니티>검색 결과"}/>);
        expect(renderState).not.toBe(null);
        renderState.getByText("HOME");
        renderState.getByText("커뮤니티");
        renderState.getByText("검색 결과");

    });


});