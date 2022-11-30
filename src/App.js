import "./App.css";
import Header from "./components/Header";
import Scene from "./components/Scene";
import Twitter from "./components/Twitter";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Scene />
      <Overlay />
      <a
        href="https://twitter.com/NowMoDesign/"
        style={{ position: "absolute", bottom: 40, left: "4vw", width: 50 }}
      >
        <Twitter />
      </a>
      <Footer />
    </>
  );
}

export default App;
