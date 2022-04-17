import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.svg'
import './Header.css'
const Header = () => {
    const [user, loading] = useAuthState(auth)

    return (
        <div style={{fontSize:"30px"}}>
            <Navbar bg="white" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                            {
                                user? <button onClick={()=>signOut(auth)} className='btn' style={{fontSize:'25px'}}>Sign Out</button>: <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>

    );
};

export default Header;