import HomePage from "../../pages/Home/HomePage";
import { Routes, Route } from "react-router";
import DetailPage from "../../pages/Detail/DetailPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
