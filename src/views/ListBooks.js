import React          from 'react'
import PropTypes      from 'prop-types'
import Bookshelf      from '../modules/Bookshelf'

function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title='Currently reading' books={props.currentlyReading} />
          <Bookshelf title='Want to read' books={props.wantToRead} />
          <Bookshelf title='Read' books={props.read} />
        </div>
      </div>
      <div className="open-search">
        <a onClick={props.onOpenSearchClick}>Add a book</a>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  onOpenSearchClick: PropTypes.func,
  currentlyReading: PropTypes.array,
  wantToRead: PropTypes.array,
  read: PropTypes.array
}

ListBooks.defautlProps = {
  onOpenSearchClick: ()=> {},
  currentlyReading: [],
  wantToRead: [],
  read: []
}

export default ListBooks
