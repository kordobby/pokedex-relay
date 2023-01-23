import HomePage from "../../pages/Home/HomePage";
import { Routes, Route } from "react-router";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
