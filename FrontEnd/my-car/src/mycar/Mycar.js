import { Outlet, Route, Routes } from "react-router-dom";
import Trim from "./routers/Trim.js";
import Engine from "./routers/Engine";
import BodyType from "./routers/BodyType";
import WheelDrive from "./routers/WheelDrive";
import { useState } from "react";
import NavBar from "./components/NavBar.js";
import SummaryModal from "./components/SummaryModal.js";

function Mycar() {
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState({});

  return (
    <>
      <NavBar />
      <Outlet contexts={setOptions} />
      <SummaryModal />
    </>
  );
}
export default Mycar;
