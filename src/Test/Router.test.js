import Home from "../pages/Home/Home";
import { render } from "@testing-library/react";


describe('<Home/>', ()=>{
    test('home으로 렌더링', ()=>{
        const renderState = render(<Home/>);
        //const text = getByTestId('text')

        expect(renderState.getByText("PETZZANG RANKING")).toBeInTheDocument();
        //expect(text).toContainElement(link);
    })
})