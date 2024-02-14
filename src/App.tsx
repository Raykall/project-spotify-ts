import Header from "components/Header";
import "./App.css";
import Sidebar from "./components/Siderbar";
import Footer from "components/Footer";
import ContentMain from "components/ContentMain";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <ContentMain />
      <Footer />
    </div>
  );
}

export default App;
