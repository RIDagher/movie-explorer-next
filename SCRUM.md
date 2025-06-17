**_ Date: 2025-06-11 _**

### What was done:

- Set up project structure
- Tailwind and CRA set up with custom color palette
- Created Navbar, MovieCard, SearchBar components
- Search functionality and display data in SearchPage

### Challenges:

- API key returned 401 until .env setup corrected

**_ Date: 2025-06-12 _**

### What was done:

- Fetched and displayed trending movies on homepage
- MovieDetail page with poster, genre, production, cast, and director

### Chellenges:

- getting familiar with TMDV api endpoints and response structure

### Next:

- Begin styling for pages created
- Implement Favorites feat/page

**_ Date: 2025-06-13 _**

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

### Challenges:

Identified Search page growing too large with too many states, UI, and logic. Search page needs refactoring.

**_ Date: 2025-06-14 _**

### what's done:

- Refactored Search page into more manageable custom hooks
- Discover search with filters
- Added Popular movies on Search page
- Cleaned the UI
- Pagination for both search and discover
- Debug filter logic - facing HTTP (400 bad request, undefined results, "Objects are not valid as React child")
- Unified text-based search and parameters-based filter
- Read next.js documentation
- Add FavoritesContext that handles add favorite movies

### Next:

- Globalize the search state
- Migrate to Next.js

### Challenges:

- Get more familiar with next.js documentation

**_ Date: 2025-06-17 _**

### what's done:

- Migrated from react to next.js

### Next:

- Refactor some files to follow the framework best practice
- Add Login/register page with auth

### Challenges:

- Refactor all files to make it work with next.js
