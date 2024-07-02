import React, { useEffect } from 'react';
import { Navbar, Nav, Button, Container, Badge } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {

    const { user, logoutUser } = React.useContext(UserContext);
    const { getTotalItems } = React.useContext(CartContext);

    const totalItems = getTotalItems();

    return (
        <>
            <Container>
                <Navbar bg="dark w-100 p-right-90" variant="dark" expand="lg">
                    <Navbar.Brand as={Link} to="/"> <div className="m-left-30"> Logo </div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/cart"><FaShoppingCart size={24} />
                                {totalItems > 0 && <Badge pill bg="danger" className="ml-1">{totalItems}</Badge>}</Nav.Link>
                            {/* {(user && user.isLoggedIn) ? <Nav.Link as={Link} to="/profile">Profile</Nav.Link> : null} */}
                        </Nav>


                    </Navbar.Collapse>
                    <Nav className='pullright'>
                        {user && user.isLoggedIn ? (
                            <>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Button variant="outline-danger" onClick={logoutUser}>Sign Out</Button>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                        )}
                    </Nav>
                    {/* <Nav className='pullright'>
                        {user && user.isLoggedIn ?
                            <Button onClick={() => handleSignout()}> Sign Out</Button>
                            :
                            <Nav.Link as={Link} to="/signup">Signup / Signin </Nav.Link>}


                    </Nav> */}
                </Navbar>
            </Container >
        </>
    );
};

export default Header;
