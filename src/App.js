import React          from 'react'
import { Route }      from 'react-router-dom'
import * as BooksAPI  from './BooksAPI'

import SearchBooks    from './views/SearchBooks'
import ListBooks      from './views/ListBooks'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    search: ''
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
        <Route
          exact path='/'
          render={()=> (
            <ListBooks
            wantToRead={this.filterBooksByShelf(this.state.books, 'wantToRead')}
            currentlyReading={this.filterBooksByShelf(this.state.books, 'currentlyReading')}
            read={this.filterBooksByShelf(this.state.books, 'read')}
            />
          )}
        />
        <Route
          exact path='/add'
          render={()=> (
            <SearchBooks
              search={this.state.search}
              onSearchChange={e=> this.setState({search: e.target.value})}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
