# reactnd-myreads

This is the first assignment from Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com).  Forked originally from [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter) and with the necessary updates to make it functional. It uses [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Backend Server

To simplify your development process, the backend server in the provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Installing the app

`npm install` (requires node.js)

## Launching the app

`npm start`

It will start the server on port 3000.

## Collaborating

Nope

## License

Feel free to do whatever you want with this code.
