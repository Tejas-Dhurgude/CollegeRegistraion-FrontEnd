import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CollegeRegister from "./pages/CollegeRegister";
import StudentRegister from "./pages/StudentRegister"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CollegeRegister />,
    },
    {
      path:"/student",
      element:<StudentRegister/>
    }
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
