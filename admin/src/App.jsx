import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = lazy(() => import("./pages/Add/Add"));
const List = lazy(() => import("./pages/List/List"));
const Orders = lazy(() => import("./pages/Orders/Orders"));

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
