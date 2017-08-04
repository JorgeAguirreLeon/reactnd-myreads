import React          from 'react'
import { Link }       from 'react-router-dom'
import PropTypes      from 'prop-types'

function SearchBooks(props) {
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>Close</Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            value={props.search}
            onChange={props.onSearchChange}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'></ol>
      </div>
    </div>
  )
}

SearchBooks.propTypes = {
  search: PropTypes.string,
  onSearchChange: PropTypes.func
}

SearchBooks.defaultProps = {
  search: '',
  onSearchChange: ()=> {}
}

export default SearchBooks
