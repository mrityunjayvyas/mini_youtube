import "./App.css";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCategory from "./components/AddCategory";
import AddVideos from "./components/AddVideos";
import Videos from "./components/Videos";
import EditVideo from "./components/EditVideo";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Category />} />
          <Route exact path="/InputSection" element={<AddCategory />} />
          <Route exact path="/Videos" element={<Videos />} />
          <Route exact path="/AddVideos" element={<AddVideos />} />
          <Route exact path="/EditVideo" element={<EditVideo />} />
          <Route exact path="/VideoPlayer" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
