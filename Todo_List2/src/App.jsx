import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Todo from "./pages/Todo";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route path="/Todo" element={<Todo />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
