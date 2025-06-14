Date: 2025-06-11

### What was done:

- Set up project structure
- Tailwind and CRA set up with custom color palette
- Created Navbar, MovieCard, SearchBar components
- Search functionality and display data in SearchPage

### Issues:

- API key returned 401 until .env setup corrected

Date: 2025-06-12

- Fetched and displayed trending movies on homepage
- MovieDetail page with poster, genre, production, cast, and director

### Issues:

- getting familiar with TMDV api endpoints and response structure

### Next:

- Begin styling for pages created
- Implement Favorites feat/page

Date: 2025-06-13

### what's done:

- Styles for Home page, Navbar, MovieDetails
- Refactor movie fetch calls to a seperate movieApi.js
- Add MovieSection reausable component
- Started with simple search page with basic text search functionality and basic pagination
- Introduced /discover api for filtering (in progress)
- Integrated TMDB's language API (in progress)

### Next:

- Add FavoritesContext to handle add favorite movies
- Continue with multi-parameter and multilingual filtering on Search page.
- Refactor Search page.

### Issues:

Identified Search page growing too large with too many states, UI, and logic. Search page needs refactoring.

Date: 2025-06-14

### what's done:

Refactored Search page into more manageable custom hooks
Discover search with filters
Added Popular movies on Search page
Cleaned the UI
Pagination for both search and discover

### Next:

Debug filter logic - facing HTTP (400 bad request, undefined results, "Objects are not valid as React child")

### Issues:
