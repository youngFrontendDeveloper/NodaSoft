import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Infotmation";
import Gallery from "./components/Gallery/Gallery";
import PopUp from "./components/PopUp/PopUp";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Information />
        <Gallery />
      </div>
      <Footer/>
      <PopUp />
    </div>
  );
}

export default App;
