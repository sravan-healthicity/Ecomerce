import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ show, handleClose, handleConfirm, product }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Add to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Item added to cart: {product.title}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => handleConfirm(product)}>
                    Add to Cart
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;
