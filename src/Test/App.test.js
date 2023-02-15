import { render, screen } from '@testing-library/react';
import App from '../App';
import Home from "../pages/Home/Home";

describe('App.js render 성공', () => {
    it("<App/> 렌더링", () => {
        const renderState = render(<App />);
        expect(renderState).not.toBe(null);
    })

    it("<Home/> 렌더링", () => {
        const renderState = render(<Home />);
        expect(renderState).not.toBe(null);
        renderState.getByText("PETZZANG RANKING");
    })
//    render(<App />);
//    const linkElement = screen.getByText('PETZZANG RANKING');
//    expect(linkElement).toBeInTheDocument();
//     const renderState = render(<App />);
//     expect(renderState).not.toBe(true);
    
});

// <App/>에서 axios를 import하는데 이거를 test모듈에서 지원을 안해서
// error 발생하는 거 같음