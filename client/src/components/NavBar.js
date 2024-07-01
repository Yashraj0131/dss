import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import image5 from './image5.png'

const NavBar = () => {
  const auth = localStorage.getItem('new');
  const auth2 = localStorage.getItem('admin');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' expand="sm" variant='light'style={{backgroundColor:"#741b47"}} >
        <Container>
          <Navbar.Brand href="/"style={{color:"#c5aa6a",fontWeight: 'bold'}}>
          <img
              src={image5}
              width="150"
              height="45"
              alt="React Bootstrap logo"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                auth ?

                  <>
                    <Nav.Link className="btn m-1 p-2" href="/UserProfile"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Profile</Nav.Link>
                    <Nav.Link className="btn m-1 p-2" href="/Upload"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Upload</Nav.Link>
                    <Nav.Link className="btn m-1 p-2" href="/UserDashboard"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Dashboard</Nav.Link>
                    <Nav.Link className="btn m-1 p-2" href="/FetchNews"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>News</Nav.Link>
                    <Nav.Link className="btn m-1 p-2" onClick={logout} to="/"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Logout</Nav.Link>
                  </>
                  : auth2 ?
                    <>
                      <Nav.Link className="btn m-1 p-2" href="/AdminProfile"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Profile</Nav.Link>
                      <Nav.Link className="btn m-1 p-2" href="/AdminDashboard"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Dashboard</Nav.Link>
                      <Nav.Link className="btn m-1 p-2" onClick={logout} to="/"style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Logout</Nav.Link>
                    </>
                    : <>
                      <Nav.Link className="btn m-1 p-2 text-center" href="/" style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Home</Nav.Link>
                      <Nav.Link className="btn m-1 p-2 text-center" href='/Register' style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}>Register</Nav.Link>
                      <NavDropdown className="btn p-0 m-1" style={{backgroundColor:"#c5aa6a",color:"#741b47",fontWeight: 'bold'}}title="Login" >
                        <NavDropdown.Item href="/UserLogin">Student</NavDropdown.Item>
                        <NavDropdown.Item href="/AdminLogin">Admin</NavDropdown.Item>
                      </NavDropdown>
                    </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
