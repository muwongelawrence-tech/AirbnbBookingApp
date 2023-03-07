import React, { lazy, Suspense } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "./components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("./pages/Home")));
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));

function App() {
  return (
    <div className="w-full h-screen">
      <Toaster position="top-right" />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
