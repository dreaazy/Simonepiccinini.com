import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { Pcto, Program } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>

        <Routes>
          {/* Route for the "/" path */}
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
              </>
            }
          />
          {/* Route for the "/ciao" path */}
          <Route
            path="/pcto"
            element={
              <>
                <Pcto />
              </>
            }
          />

          <Route
            path="/program"
            element={
              <>
                <Program />
              </>
            }
          />
        </Routes>

        <div className="relative z-0">
          {/* These components remain outside the Routes */}
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
