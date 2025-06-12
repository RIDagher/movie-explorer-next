import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="min-h-screen bg-dark text-light font-sans">
      <Navbar />
      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search" element={<SearchMovie />} /> */}
        <Route path="/favorites" element={<Favorites />} />
        {/* passing movie id from movieCard component */}
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="p-6"></div>
    </div>
  );
}

export default App;
