import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Navbar, Tech, Works, Hero, CustomCursor, InteractiveRoboticsDemo } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="relative z-0 bg-[#050505] text-white selection:bg-cyan selection:text-black">
        <Navbar />
        <div className="relative z-0">
          <Hero />
        </div>

        <About />
        <InteractiveRoboticsDemo />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
