import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../css/Books.css';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    componentDidMount() {
        //window.location.href/item/all - give the present URL
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
        return (
            <div>
                <Container fluid id="collection">
                    <h1 className={'text-center text-light books__title'}>Our collection</h1>
                    <div className="wrapper">
                        {this.state.books.map(book =>
                            <div key={book.id} className="wrapper__item">
                                <Image fluid src={book.picture}/>
                                <div className="books__information text-light text-center">
                                    <h3>{book.title}</h3>
                                    <h4>{book.price}</h4>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Books;