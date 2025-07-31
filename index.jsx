import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 *
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 *
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        {" "}
        #VANLIFE{" "}
      </Link>
      <div className="right">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return <footer>Ⓒ 2022 #VANLIFE</footer>;
}

function Home() {
  return (
    <>
      <Navbar />
      <main className="homeMain">
        <h1>
          {" "}
          You got the travel plans, we <br />
          got the travel vans.{" "}
        </h1>
        <p>
          {" "}
          Add adventure to your life by joining the #vanlife movement. <br />{" "}
          Rent the perfect van to make your perfect road trip.{" "}
        </p>
        <button className="mainBtn"> Find your van </button>
      </main>
      <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <Navbar />
      <main className="aboutMain">
        <img src="aboutmain.png"></img>
        <div className="rest">
          <h2> Don’t squeeze in a sedan when you could relax in a van. </h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="yellowBanner">
            <h3>Your destination is waiting.</h3>
            <h3>Your van is ready.</h3>
            <button className="vansBtn">Explore our vans</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
