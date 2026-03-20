import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Features = lazy(() => import("./pages/features/Features"));
const About = lazy(() => import("./pages/about/About"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const Blog = lazy(() => import("./pages/blog/Blog"));

import Loading from "./components/loading/Loading";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/:slug" element={<Blog />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
