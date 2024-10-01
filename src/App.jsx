import "./App.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="-z-10 min-h-screen w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#86efac_100%)]">
      <Navbar />
      <Background />
      <Manager />
      <Footer />
    </div>
  );
}

export default App;
