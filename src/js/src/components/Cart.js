import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { total, list, remove, quantity} from 'cart-localstorage';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {

    return (
        <div>
        <Modal centered show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table hover bordered responsive>
            <thead>
              <tr>
                <th className="text-center align-middle">#</th>
                <th className="text-center align-middle">Book title</th>
                <th className="text-center align-middle">Price</th>
                <th className="text-center align-middle">Quantity</th>
                <th className="text-center align-middle">Remove</th>
              </tr>
            </thead>
            <tbody>
            {props.products.map((book, index) =>
              <tr key={book.id}>
                <td>
                  {index + 1}
                </td>
                <td className="text-center align-middle">
                  {book.name}
                </td>
                <td className="text-center">
                    {book.price} PLN
                </td>
                <td className="text-center align-middle">
                  <div className="d-inline-flex">
                  <Button className="mr-2" variant="danger" size="sm" onClick={() => { quantity(book.id, -1); props.update() }}>-</Button>
                  {book.quantity}
                  <Button className="ml-2" variant="success" size="sm" onClick={() => { quantity(book.id, 1); props.update() }}>+</Button>
                  </div>
                </td>
                <td className="text-center align-middle">
                  <Button variant="danger" size="sm" onClick={() => { remove(book.id); props.update() }}>X</Button>
                </td>
              </tr>
            )}
            </tbody>
          </Table>
          <h4>Total price: {total()} PLN</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.hide(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.hide(false)}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Cart;