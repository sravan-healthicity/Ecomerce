import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Table, Button, Container } from 'react-bootstrap';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <Container>
            <h2>Cart</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => (
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>${(product.price).toFixed(2)}</td>
                            <td>
                                <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td colSpan="2">${totalPrice.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    );
};

export default Cart;
