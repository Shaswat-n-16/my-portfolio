// import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/header/Header.jsx";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
