import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { total, list, remove, quantity} from 'cart-localstorage';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {

    const [selectedBooks, setSelectedBooks] = useState(list());
    console.log(selectedBooks);

    return (
        <div>
        <Modal centered show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table hover bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Book title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
            {selectedBooks.map((book, index) =>
              <tr key={book.id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  {book.name}
                </td>
                <td>
                  {book.price} PLN
                </td>
                <td className="text-center">
                  <Button className="mr-2" variant="danger" size="sm" onClick={() => { quantity(book.id, -1); setSelectedBooks(list()) }}>-</Button>
                  {book.quantity}
                  <Button className="ml-2" variant="success" size="sm" onClick={() => { quantity(book.id, 1); setSelectedBooks(list()) }}>+</Button>
                </td>
                <td className="text-center">
                  <Button variant="danger" size="sm" onClick={() => { remove(book.id); setSelectedBooks(list()) }}>X</Button>
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