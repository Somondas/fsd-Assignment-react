import { lazy, Suspense, useState } from "react";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// -> Components
const Home = lazy(() => import("./pages/Home"));
const People = lazy(() => import("./pages/People"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
