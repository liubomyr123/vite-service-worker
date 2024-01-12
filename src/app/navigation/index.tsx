import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import { Home } from "@src/pages";
import { Layout } from "./Layout";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

