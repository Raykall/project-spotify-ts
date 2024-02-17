import Header from "components/Header";
import "./App.css";
import Sidebar from "./components/Siderbar";
import Footer from "components/Footer";
import ContentMain from "components/ContentMain";
import { ApplicationProvider } from "hooks/useApplication";

function App() {
  return (
    <ApplicationProvider>
      <div className="App">
        <Sidebar />
        <Header />
        <ContentMain  />
        <Footer />
      </div>
    </ApplicationProvider>
  );
}

export default App;
