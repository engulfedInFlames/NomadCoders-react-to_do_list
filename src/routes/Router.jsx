import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import App from "./Root";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default MyRouter;
