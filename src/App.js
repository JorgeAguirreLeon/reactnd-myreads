import React          from 'react'
import * as BooksAPI  from './BooksAPI'

import SearchBooks    from './views/SearchBooks'
import ListBooks      from './views/ListBooks'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then(books=> this.setState({books}))
  }

  filterBooksByShelf(books, shelf) {
    return books.filter(book=> book.shelf === shelf)
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            onCloseSearchClick={() => this.setState({ showSearchPage: false })}
          />
        ) : (
          <ListBooks
            onOpenSearchClick={() => this.setState({ showSearchPage: true })}
            wantToRead={this.filterBooksByShelf(this.state.books, 'wantToRead')}
            currentlyReading={this.filterBooksByShelf(this.state.books, 'currentlyReading')}
            read={this.filterBooksByShelf(this.state.books, 'read')}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
