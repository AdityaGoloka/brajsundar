import Footer from "./components/Footer/Footer.jsx";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Navbar from "./components/navbar/Navbar";
import Academy from "./pages/Academy";
// import SingleBlog from "./components/blogs/SingBlog";
import SingleBlog from "./components/blogs/SingleBlog.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Workshop from "./pages/Workshop/Workshop.jsx";
import Coaching from "./pages/Coaching/Coaching.jsx";
import About from "./pages/About.jsx";
import CourseViewPage from "./pages/CourseViewPage.jsx";
import Video from "./pages/Videos/Video.jsx";
import Reel from "./pages/Reels/Reel.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Books from "./pages/Books/Books.jsx";
import BlogDetail from "./pages/Blogs/BlogDetail.jsx";

export default function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li> 
            </ul>
          </nav> */}
        {/* A <Routes> looks through its children <Route> and renders the first one that matches the current URL. */}
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/books" element={<Books />} />
          <Route path="/academy/courses" element={<Courses />} />
          <Route path="/academy/workshop" element={<Workshop />} />
          <Route path="/video" element={<Video />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/academy/coaching" element={<Coaching />} />
          <Route
            path="/academy/course-detail/:id"
            element={<CourseViewPage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<SingleBlog />} />{" "}
          {/* Use Route within Routes */}
          {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
