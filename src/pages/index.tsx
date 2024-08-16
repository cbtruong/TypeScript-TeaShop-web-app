import routes from "../routes";
import { Route, Routes } from "react-router-dom";

const MyApp = () => {
  return (
    <Routes>
      {routes
        .map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
    </Routes>
  )
}

export default MyApp;