import React          from 'react'
import { Link }       from 'react-router-dom'
import PropTypes      from 'prop-types'
import Bookshelf      from '../modules/Bookshelf'

function ListBooks(props) {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <Bookshelf title='Currently reading' books={props.currentlyReading} />
          <Bookshelf title='Want to read' books={props.wantToRead} />
          <Bookshelf title='Read' books={props.read} />
        </div>
      </div>
      <div className='open-search'>
        <Link to='/add'>Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  currentlyReading: PropTypes.array,
  wantToRead: PropTypes.array,
  read: PropTypes.array
}

ListBooks.defautlProps = {
  currentlyReading: [],
  wantToRead: [],
  read: []
}

export default ListBooks
