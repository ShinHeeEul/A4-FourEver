import { Route, Routes } from "react-router-dom";
import Trim from "./routers/Trim.js";
import Engine from "./routers/Engine";
import BodyType from "./routers/BodyType";
import WheelDrive from "./routers/WheelDrive";

function Mycar() {
  return (
    <>
      <Trim />
      <Routes>
        <Route path="/mycar/engine" element={<Engine />} />
        <Route path="/mycar/bodytype" element={<BodyType />} />
        <Route path="/mycar/wheeldrive" element={<WheelDrive />} />
      </Routes>
    </>
  );
}
export default Mycar;
