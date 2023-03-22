import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookmarksPage from "./Pages/BookmarksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
