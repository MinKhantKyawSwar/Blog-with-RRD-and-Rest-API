import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Posts from "./pages/Posts";
import Create from "./pages/Create";
import { loader as postsLoader } from "./pages/Posts";
import { loader as detailsLoader } from "./pages/Details";
import Details from "./pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create />,
        },
        {
          path: "/post-details/:id",
          element: <Details />,
          loader: detailsLoader,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
