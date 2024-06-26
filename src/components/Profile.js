import React from 'react';
import { UserContext } from '../contexts/UserContext';
import Cart from './Cart';
import { Container } from 'react-bootstrap';

const Profile = () => {
    const { user } = React.useContext(UserContext);

    return (
        <>
            <Container>
                <h2>Profile Page</h2>
                <h3>Email: {user.email}</h3>
            </Container>

            <Cart />
        </>

    );
};

export default Profile;
