import HomePage from "../../pages/Home/HomePage";
import { Routes, Route } from "react-router";
import DetailPage from "../../pages/Detail/DetailPage";
import SearchPage from "../../pages/Search/SearchPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:id" element={<DetailPage />} />
      <Route path="/pokemon" element={<SearchPage />} />
    </Routes>
  );
};

export default Router;
