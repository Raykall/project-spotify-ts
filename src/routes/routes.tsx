import Footer from "components/Footer";
import Menu from "components/Menu";
import Home from "pages/Home";
import Subscribe from "pages/PageSubscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
