import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./NavBar";
import Home from "./Home";
import Search from "./Search";
import NotFound from "./NotFound";


export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={
            <Search
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        
    <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}