import {Component} from "react";
import Book from "./Book";
import bookService from "../services/bookService"

class BookList extends Component{
    constructor(props) {
        super(props);

        this.state ={
            books: []
        }
    }

    bookClicked(title){
        console.log(`The book ${title} has been bought`)
    }

    componentDidMount() {
        bookService.getAll()
            .then(books => {
                this.setState(()=> ({books}))
            });

        // fetch('http://localhost:3000/books')
        //     .then(res => res.json())
        //     .then(books => {
        //         this.setState(()=> ({books}))
        //     });
    }

    render() {

        if(this.state.books.length === 0){
            return <span>Loading books...</span>
        }

        return(
            <ul className="book-list">
                <h2>Our book collection</h2>

                {/*{this.props.books?.map(x => {*/}
                {this.state.books.map(x => {
                    return <Book
                        key={x._id}
                        title={x.title}
                        description={x.description}
                        // clickHandler={this.bookClicked.bind(this, x.title)}/>
                        clickHandler={() => this.bookClicked(x.title)}/>
                })}


            </ul>
        );
    }
}
export default BookList;