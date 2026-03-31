import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import { initGA, logPageView } from "./utils/analytics";
import { Toaster } from "react-hot-toast";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Features = lazy(() => import("./pages/features/Features"));
const About = lazy(() => import("./pages/about/About"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const FindrrMap = lazy(() => import("./pages/findrr/FindrrMap"));

import Loading from "./components/loading/Loading";
import { ModalProvider } from "./context/ModalContext";
import JoinTheMovement from "./components/joinTheMovement/JoinTheMovement";

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <ModalProvider>
      <Toaster 
        position="top-center" 
        containerStyle={{ zIndex: 10001 }}
        toastOptions={{
          style: {
            background: '#0a0a0a',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '12px 24px',
            fontSize: '0.95rem',
            fontWeight: '500',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
            maxWidth: '400px'
          },
          success: {
            iconTheme: {
              primary: '#2EEE34',
              secondary: '#000',
            },
            style: {
              border: '1px solid rgba(46, 238, 52, 0.3)',
              boxShadow: '0 0 20px rgba(46, 238, 52, 0.15), 0 10px 40px rgba(0, 0, 0, 0.5)'
            }
          },
          error: {
            iconTheme: {
              primary: '#ff4b4b',
              secondary: '#fff',
            },
            style: {
              border: '1px solid rgba(255, 75, 75, 0.3)',
              boxShadow: '0 0 20px rgba(255, 75, 75, 0.1), 0 10px 40px rgba(0, 0, 0, 0.5)'
            }
          },
          loading: {
            style: {
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }
          }
        }}
      />
      <Router>
        <RouteTracker />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/findrr" element={<FindrrMap />} />
          </Routes>
        </Suspense>
      </Router>
      <JoinTheMovement />
    </ModalProvider>
  );
}

export default App;
