import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";

import "./App.css";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* this is for products */}
      <Products />

      {/* <Team /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
