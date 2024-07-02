import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Table, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

const Cart = () => {
    const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Container>
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button variant="secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                                        <Button variant="light" disabled>{item.quantity}</Button>
                                        <Button variant="secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                                    </ButtonGroup>
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3"><strong>Total</strong></td>
                            <td><strong>${calculateTotal()}</strong></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </Table>
            ) : (
                <h2>Your cart is empty</h2>
            )}
        </Container>
    );
};

export default Cart;
