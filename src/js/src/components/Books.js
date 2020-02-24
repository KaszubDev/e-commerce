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
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Soup')
        .then(results => {
            return results.json();
        }).then(data => {
            let books = data.meals.map((book => {
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
                            <div className="wrapper__item">
                                <Image fluid src={book.strMealThumb}/>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Books;