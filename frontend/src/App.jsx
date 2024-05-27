import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Posts from "./pages/Posts";
import { action as postCreateAction } from "./components/PostForm";
import { action as postEditAction } from "./components/PostForm";
import Create from "./pages/Create";
import { loader as postsLoader } from "./pages/Posts";
import {
  loader as detailsLoader,
  action as deleteAction,
} from "./pages/Details";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Auth, { action as authAction } from "./pages/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create />,
          action: postCreateAction,
        },
        {
          path: "/auth",
          element: <Auth />,
          action: authAction,
        },
        {
          path: ":id",
          id: "post-detail",
          loader: detailsLoader,
          children: [
            {
              index: true,
              element: <Details />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <Edit />,
              action: postEditAction,
            },
          ],
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
