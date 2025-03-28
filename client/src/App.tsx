import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Genders from "./pages/gender/Genders";
import EditGenders from "./pages/gender/EditGenders";
import DeleteGenders from "./pages/gender/DeleteGenders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Genders />,
  },
  {
    path: "/gender/edit",
    element: <EditGenders />,
  },
  {
    path: "/gender/delete",
    element: <DeleteGenders />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
