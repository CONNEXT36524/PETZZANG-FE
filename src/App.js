
import './App.css';
import {Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';
import Home from "./pages/Home/Home";
import Ranking from './pages/ranking/Ranking';

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect fixed="top" className="menu" bg="white">
        <Container>
          <Navbar.Brand href="/" className='Navbar-logo'> 사이트</Navbar.Brand>
            <div className='item1'>
            <Nav.Link href="/">그거</Nav.Link>
            </div>
            <div className='item2'>
            <Nav.Link href="/">로그인</Nav.Link> 
            </div>
        </Container>
      </Navbar>

      <main className='main'>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Ranking" element={<Ranking />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* 지정하지 않은 주소로 들어올 때는 NotFound가 뜬다. */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
