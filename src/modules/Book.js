import React          from 'react'
import PropTypes      from 'prop-types'

import ShelfSelect    from '../elements/ShelfSelect'

function Book(props) {

  const authors = props.authors.join(', ')

  return (
    <div className="book">
      <div className="book-top">
        <img className="book-cover" src={props.cover} alt={props.title} />
        <ShelfSelect />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  cover: PropTypes.string.isRequired
}

export default Book
