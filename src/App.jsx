import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/index";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/about";
import BlogPage from "./pages/Blog/blog";
import ComunityPage from "./pages/Community/community";
import ClieantsPage from "./pages/Clients/clieants";
import FindJob from "./pages/FindJob/findjob";
import SignIn from "./pages/SignUp/signIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/community" element={<ComunityPage />} />
        <Route path="/clieants" element={<ClieantsPage />} />
        <Route path="/findJob" element={<FindJob />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<h1 className="container" >Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
