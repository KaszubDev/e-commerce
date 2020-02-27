import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../css/Books.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { add } from 'cart-localstorage';
import { store } from 'react-notifications-component';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    componentDidMount() {
        //window.location.href/item/all - gives the present URL
        fetch('http://localhost:8080/item/all')
        .then(results => {
            return results.json();
        }).then(data => {
            let books = data.map((book => {
                return book;
            }));
            this.setState({
                books: books,
            });
            });
    }

    render() {
        let notification = {
            title: "Wonderful!",
            message: "Configurable",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2000,
                onScreen: true
              }
          };
        return (
            <div>
                <Container fluid id="collection">
                    <h1 className={'text-center text-light books__title'}>Our collection</h1>
                    <div className="wrapper">
                        {this.state.books.map(book =>
                            <div key={book.id} className="wrapper__item">
                                <Image fluid src={book.picture}/>
                                <div className="books__information text-light text-center">
                                    <h2>{book.title}</h2>
                                    <h3>{book.price} PLN</h3>
                                </div>
                                <Button variant="light" onClick={ () => { add({id: book.id, price: book.price, name: book.title});
                                    store.addNotification({
                                        ...notification,
                                        container: 'top-right'
                                      });
                                }}>
                                    <FontAwesomeIcon icon={faCartPlus} size="lg"></FontAwesomeIcon>
                                </Button>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Books;