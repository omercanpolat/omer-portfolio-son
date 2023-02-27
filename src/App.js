import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item) => (
        <Main {...item} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
