/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import { Home, Match, Payment } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-[80%] mx-auto max-lg:w-full container">
      <Navbar />

      <div className="flex-1 pb-20">
        <Routes>
          <Route index element={<Home />} />
          <Route path="match/:matchId" element={<Match />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
      </div>

      <div className="fixed bottom-0 left-0 right-0  py-3 bg-white border border-black border-t border-opacity-15 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
