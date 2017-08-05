import React          from 'react'
import { Route }      from 'react-router-dom'
import * as BooksAPI  from './BooksAPI'

import SearchBooks    from './views/SearchBooks'
import ListBooks      from './views/ListBooks'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    search: ''
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books=> this.setState({books}))
  }

  filterBooksByShelf(books, shelf) {
    return books.filter(book=> book.shelf === shelf)
  }

  submitSearch(event) {
    event.preventDefault()
    if (this.state.search !== '') {
      BooksAPI.search(this.state.search, 20)
        .then(searchBooks=> this.setState({searchBooks}))
    }
    else {
      this.setState({searchBooks: []})
    }
  }

  changeBookShelf(book_id, shelf) {
    BooksAPI.update({id: book_id}, shelf)
      .then(shelves=> {
        console.log(shelves)
      })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={()=> (
            <ListBooks
              wantToRead={this.filterBooksByShelf(this.state.books, 'wantToRead')}
              currentlyReading={this.filterBooksByShelf(this.state.books, 'currentlyReading')}
              read={this.filterBooksByShelf(this.state.books, 'read')}
              onShelfChange={this.changeBookShelf.bind(this)}
            />
          )}
        />
        <Route
          exact path='/search'
          render={()=> (
            <SearchBooks
              books={this.state.searchBooks}
              search={this.state.search}
              onSearchChange={e=> this.setState({search: e.target.value})}
              onSearchSubmit={this.submitSearch}
              onShelfChange={this.changeBookShelf.bind(this)}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
