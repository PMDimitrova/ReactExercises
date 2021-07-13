import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading";
import BookList from "./components/BookList";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

// const books = [
//     {_id: '1', title: 'Harry Potter', description: "Wizards and stuff"},
//     {_id: '2', title: 'Programming with JS', description:"Guide to the galaxy" },
//     {_id: '3', title: 'Talmud', description: "God and stuff"}
//     // {_id: '4', title: null, description: "Missing title here"}
// ]

function App() {
  return (
    <div className={"site-wrapper"}>
        <Heading>
            <h1>Our Custom New Library</h1>
            <h2>Second Heading</h2>
        </Heading>

        <Counter />

        {/*<BookList books={books} />*/}
        <BookList />

        <Footer />
    </div>
  );
}

export default App;
