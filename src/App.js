
import './App.css';
import {Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';
import Home from "./pages/Home";
import KakaoLogin from "./pages/Login/KakaoLogin";

function App() {
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const rest_api_key = process.env.REACT_APP_REST_API_KEY;
  const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL
  return (
    <Router>
      <Navbar collapseOnSelect fixed="top" className="menu" bg="white">
        <Container>
          <Navbar.Brand href="/" className='Navbar-logo'> 사이트</Navbar.Brand>
            <div className='item1'>
            <Nav.Link href="/">그거</Nav.Link>
            </div>
            <div className='item2'>
            <Nav.Link className='user-logo' href={KAKAO_AUTH_URL}></Nav.Link> 
            
            </div>
        </Container>
      </Navbar>

      <main className='main'>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/oauth/callback/kakao" element={<KakaoLogin />}/>
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* 지정하지 않은 주소로 들어올 때는 NotFound가 뜬다. */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
