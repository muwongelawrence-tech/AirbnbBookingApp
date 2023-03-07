import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import App from "./App";
import LoadingScreen from "./components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};


const ComingSoon = Loadable(lazy(() => import("./pages/ComingSoon")));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store = { store }>
    <BrowserRouter>
      <Routes>
        <Route path="/coming" element={< ComingSoon/>} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
