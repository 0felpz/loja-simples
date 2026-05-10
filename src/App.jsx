import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ListaProdutos from "./components/ListaProdutos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ListaProdutos />
      <Sobre />
      <Footer />
    </>
  );
}

export default App;