import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Mycar from "./mycar/Mycar";
import Archiving from "./archiving/Achiving";
import Mychiving from "./mychiving/Mychiving";
import Header from "./common/Header";
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mycar/trim" element={<Mycar />} />
        <Route path="/archiving" element={<Archiving />} />
        <Route path="/mychiving" element={<Mychiving />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
