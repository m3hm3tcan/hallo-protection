import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";

import "./App.css";
import { Products } from "./components/Products";
// import { FAQ } from "./components/FAQ";
// import { FAQ } from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* this is for products */}
      <Products />

      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
