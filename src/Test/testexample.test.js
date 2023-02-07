import SearchSectionDiv from "../components/community/SearchSectionDiv";
import { render } from "@testing-library/react";

// 기본 예제 버튼
// describe("Button 컴포넌트 (@testing-library/react)", () => {
//   it("컴포넌트가 정상적으로 생성된다.", () => {
//     const button = render(<Button />);
//     expect(button).not.toBe(null);
//   });
// });


describe('props 전달 테스트', () => {
  it("컴포넌트가 정상적으로 생성된다.", () => {
    
    const renderState = render(<SearchSectionDiv props={{data:'daily'}}/>);
    expect(renderState).not.toBe(null);
     
  });
    // render(<SearchSectionDiv props={{data:'daily'}}/>);
    // const textState = screen.getByText('일상 게시판');
    // expect(textState).toBeInTheDocument();
    
});